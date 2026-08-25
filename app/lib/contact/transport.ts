import { buildPortfolioMailtoUrl } from './mailtoTransportCore';

export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
}

export interface ContactTransportResult {
    ok: boolean;
    redirectUrl?: string;
    message?: string;
    error?: string;
}

export interface ContactTransport {
    submit(payload: ContactSubmission): Promise<ContactTransportResult>;
}

export class MailtoContactTransport implements ContactTransport {
    constructor(private readonly to = 'k8@k8port.io') {}

    async submit(payload: ContactSubmission): Promise<ContactTransportResult> {
        const redirectUrl = buildPortfolioMailtoUrl({
            to: this.to,
            name: payload.name,
            email: payload.email,
            message: payload.message,
        });

        return {
            ok: true,
            redirectUrl,
            message: 'Opening your email client...',
        };
    }
}

export function createContactTransport(): ContactTransport {
    return new MailtoContactTransport();
}
