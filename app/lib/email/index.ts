import { Resend } from 'resend';
import type { SendEmailCommandInput } from '@aws-sdk/client-ses';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import nodemailer from 'nodemailer';
import postmark from 'postmark';
import sgMail from '@sendgrid/mail';
import { Twilio } from 'twilio';

export interface Mail {
    to: string;
    subject: string;
    html: string;
    text?: string;
}

export interface EmailAdapter {
    send(mail: Mail): Promise<{ ok: boolean; id?: string; error?: string }>;
}

function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : 'Unknown error';
}

/* ---------- Resend ---------- */
export class ResendAdapter implements EmailAdapter {
    private resend = new Resend(process.env.RESEND_API_KEY!);

    async send(mail: Mail) {
        try {
            const { data } = await this.resend.emails.send({
                from: process.env.MAIL_FROM!,
                to: [mail.to],
                subject: mail.subject,
                html: mail.html,
                text: mail.text,
            });
            return { ok: true, id: data?.id ?? '' };
        } catch (error: unknown) {
            return { ok: false, error: getErrorMessage(error) };
        }
    }
}

/* ---------- Postmark ---------- */
export class PostmarkAdapter implements EmailAdapter {
    private client = new postmark.ServerClient(process.env.POSTMARK_TOKEN!);
    async send(mail: Mail) {
        try {
            const res = await this.client.sendEmail({
                From: process.env.MAIL_FROM!,
                To: mail.to,
                Subject: mail.subject,
                HtmlBody: mail.html,
                TextBody: mail.text,
                MessageStream: 'outbound',
            });
            return { ok: true, id: res.MessageID };
        } catch (error: unknown) {
            return { ok: false, error: getErrorMessage(error) };
        }
    }
}

/* ---------- AWS SES ---------- */
export class SesAdapter implements EmailAdapter {
    private ses = new SESClient({ region: process.env.AWS_REGION! });
    async send(mail: Mail) {
        const params: SendEmailCommandInput = {
            Destination: { ToAddresses: [mail.to] },
            Source: process.env.MAIL_FROM!,
            Message: {
                Subject: { Data: mail.subject },
                Body: { Html: { Data: mail.html }, Text: { Data: mail.text ?? '' } },
            },
        };
        try {
            const out = await this.ses.send(new SendEmailCommand(params));
            return { ok: true, id: out.MessageId };
        } catch (error: unknown) {
            return { ok: false, error: getErrorMessage(error) };
        }
    }
}

/* ---------- Fallback SMTP (Nodemailer) ---------- */
export class SmtpAdapter implements EmailAdapter {
    private transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST!,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: false,
        auth: {
            user: process.env.SMTP_USER!,
            pass: process.env.SMTP_PASS!,
        },
    });
    async send(mail: Mail) {
        try {
            const info = await this.transporter.sendMail({
                from: process.env.MAIL_FROM!,
                to: mail.to,
                subject: mail.subject,
                html: mail.html,
                text: mail.text,
            });
            return { ok: true, id: info.messageId };
        } catch (error: unknown) {
            return { ok: false, error: getErrorMessage(error) };
        }
    }
}

/* ---------- SendGrid ---------- */
export class SendGridAdapter implements EmailAdapter {
    constructor() {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    }
    async send(mail: Mail) {
        try {
            const [response] = await sgMail.send({
                to: mail.to,
                from: process.env.MAIL_FROM!,
                subject: mail.subject,
                text: mail.text,
                html: mail.html,
            });
            return { ok: true, id: response.headers?.['x-message-id'] as string | undefined };
        } catch (error: unknown) {
            return { ok: false, error: getErrorMessage(error) };
        }
    }
}

/* ---------- Twilio SMS/WhatsApp ---------- */
export class TwilioAdapter implements EmailAdapter {
    private client = new Twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);

    async send(mail: Mail) {
        try {
            // Strip HTML to plain text for SMS
            const body = mail.text ?? mail.html.replace(/<[^>]*>/g, '') ?? '';
            const isWhatsApp = mail.to.startsWith('whatsapp:');
            const fromNumber = isWhatsApp
                ? process.env.TWILIO_WHATSAPP_FROM!
                : process.env.TWILIO_SMS_FROM!;
            const message = await this.client.messages.create({
                body,
                from: fromNumber,
                to: mail.to,
            });
            return { ok: true, id: message.sid };
        } catch (error: unknown) {
            return { ok: false, error: getErrorMessage(error) };
        }
    }
}

/* ---------- Factory ---------- */
export function getEmailAdapter(): EmailAdapter {
    switch (process.env.EMAIL_PROVIDER) {
        case 'postmark':
            return new PostmarkAdapter();
        case 'ses':
            return new SesAdapter();
        case 'smtp':
            return new SmtpAdapter();
        case 'sendgrid':
            return new SendGridAdapter();
        case 'twilio':
            return new TwilioAdapter();
        default:
            return new ResendAdapter();
    }
}
