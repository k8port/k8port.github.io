'use client';

import React, { useState } from 'react';
import { createContactTransport } from '@/lib/contact/transport';

// --- Main Form Component ----------------------------------------------
export default function ContactForm() {
    const transport = createContactTransport();
    const [status, setStatus] = useState<{
        loading: boolean;
        error?: string;
        success?: string;
    }>({ loading: false });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus({ loading: true });

        // grab form data
        const form = e.currentTarget;
        const fd = new FormData(form);
        const firstname = fd.get('firstname')?.toString().trim() ?? '';
        const lastname = fd.get('lastname')?.toString().trim() ?? '';
        const name = `${firstname} ${lastname}`;
        const email = fd.get('email')?.toString().trim() ?? '';
        const method = 'email';
        const handle = email;

        const message = fd.get('message')?.toString().trim() ?? '';
        const payload = { name, method, handle, message, email };

        try {
            const response = await transport.submit({
                name: payload.name,
                email: payload.email,
                message: payload.message,
            });
            if (!response.ok || !response.redirectUrl) {
                throw new Error(response.error || 'Failed to start contact flow');
            }

            window.location.href = response.redirectUrl;
            setStatus({
                loading: false,
                success: response.message || 'Opening your email client...',
            });
            form.reset();
        } catch (error: unknown) {
            setStatus({
                loading: false,
                error: error instanceof Error ? error.message : 'An error occurred',
            });
        }
    }

    return status.success ? (
        <div className="text-brand-secondary font-lobster font-semibold text-center">
            Thanks for your inquiry! I&apos;ll be in touch soon!
        </div>
    ) : (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl mx-auto bg-brand-secondary/60 border rounded shadow p-12 space-y-8 text-collection-midnightgreen"
        >
            {/* name inline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 w-full">
                    <label htmlFor="firstname" className="whitespace-nowrap">
                        <span className="font-zillaslab inline-flex items-center after:content-[*] after:ml-1 after:text-collection-alizarincrimson">
                            first&nbsp;name&nbsp;
                        </span>
                        <input
                            type="text"
                            name="firstname"
                            required
                            placeholder="first name"
                            className="mt-1 rounded border p-2"
                        />
                    </label>
                </div>

                <div className="flex items-center gap-2 w-full">
                    <label htmlFor="lastname" className="whitespace-nowrap">
                        <span className="font-zillaslab font-medium inline-flex items-center after:content-[*] after:ml-1 after:text-collection-alizarincrimson">
                            last&nbsp;name&nbsp;
                        </span>
                        <input
                            type="text"
                            name="lastname"
                            required
                            placeholder="last name"
                            className="mt-1 rounded border p-2"
                        />
                    </label>
                </div>
            </div>

            {/* preferred communication - temporarily disabled for email-only */}
            {/*
            <fieldset className="space-y-2">
                    <legend className="font-zillaslab font-medium">
                    preferred communication&nbsp;
                    <span className="text-collection-alizarincrimson">*</span>
                </legend>
                <div className="flex flex-wrap gap-6 mt-1">
                    ...
                </div>
            </fieldset>
            */}

            {/* Contact Channels */}
            <div className="grid md:grid-cols-3 gap-4">
                <label className="flex flex-col">
                    <span className="font-zillaslab font-medium">
                        email <span className="text-collection-alizarincrimson">*</span>
                    </span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="mt-1 rounded border p-2"
                    />
                </label>

                {/*
                <label className="flex flex-col">
                    <span className="font-zillaslab font-medium">
                        phone
                    </span>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="(213) 555-1212"
                        className="mt-1 rounded border p-2"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-zillaslab font-medium">
                        whatsapp
                    </span>
                    <input
                        type="text"
                        name="whatsapp"
                        placeholder="@whatsapp_handle"
                        className="mt-1 rounded border p-2"
                    />
                </label>
                */}
            </div>

            {/* Message Area */}
            <label className="flex flex-col">
                <span className="font-zillaslab text-sm font-medium">Message</span>
                <textarea
                    name="message"
                    rows={6}
                    placeholder="you like my flex because it hits different"
                    className="mt-1 rounded border p-2"
                />
            </label>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
                <button
                    type="submit"
                    disabled={status.loading}
                    className="bg-collection-caribbeangreen text-brand-secondary font-bold px-6 py-2 rounded hover:bg-collection-caribbeangreen/60 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status.loading ? 'Sending...' : 'Submit'}
                </button>
            </div>

            {/* Error Message */}
            {status.error && <p className="text-collection-alizarincrimson">{status.error}</p>}
        </form>
    );
}
