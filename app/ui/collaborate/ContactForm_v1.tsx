'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

interface ApiResponse {
    message?: string;
    error?: string;
}

type ContactPreference = 'email' | 'text' | 'whatsapp';

// Deprecated legacy component. Kept temporarily for reference while the active
// contact flow uses MailtoContactTransport via ContactForm.tsx.

// --- Main Form Component ----------------------------------------------
export default function ContactForm() {
    const [preference, setPreference] = useState<ContactPreference>('email');
    const [status, setStatus] = useState<{ loading: boolean; error?: string; success?: string }>({
        loading: false,
    });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus({ loading: true });

        // grab form data
        const form = e.currentTarget;
        const fd = new FormData(form);
        const firstname = fd.get('firstname')?.toString().trim() ?? '';
        const lastname = fd.get('lastname')?.toString().trim() ?? '';
        const name = `${firstname} ${lastname}`;
        const phone = fd.get('phone')?.toString().trim() ?? '';
        const email = fd.get('email')?.toString().trim() ?? '';
        const whatsapp = fd.get('whatsapp')?.toString().trim() ?? '';
        const method = (fd.get('preference')?.toString().trim() ?? 'email') as ContactPreference;

        let handle: string;
        if (method === 'email') {
            handle = email;
        } else if (method === 'text') {
            handle = phone;
        } else {
            handle = whatsapp;
        }

        const message = fd.get('message')?.toString().trim() ?? '';
        const payload = { name, method, handle, message };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const body: ApiResponse = await response.json();
            if (!response.ok) throw new Error(body.error || 'Failed to submit contact form');
            setStatus({ loading: false, success: body.message || 'Thank you for your inquiry!' });
            form.reset();
            setPreference('email');
        } catch (error: unknown) {
            setStatus({
                loading: false,
                error: error instanceof Error ? error.message : 'An error occurred',
            });
        }
    }

    if (status.success) {
        return (
            <div className="text-brand-secondary font-lobster font-semibold text-center">
                Thanks for your inquiry! I&apos;ll be in touch soon!
            </div>
        );
    } else {
        return (
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

                {/* communication preference */}
                <fieldset className="space-y-2">
                    <legend className="font-zillaslab font-medium">
                        preferred communication&nbsp;
                        <span className="text-collection-alizarincrimson">*</span>
                    </legend>
                    <div className="flex flex-wrap gap-6 mt-1">
                        {[
                            { value: 'email', label: 'Email', icon: <FaEnvelope /> },
                            { value: 'text', label: 'Text', icon: <FaPhone /> },
                            { value: 'whatsapp', label: 'WhatsApp', icon: <FaWhatsapp /> },
                        ].map(({ value, label, icon }) => (
                            <label
                                key={value}
                                className="inline-flex items-center gap-2 cursor-pointer font-josefinsans"
                            >
                                <input
                                    type="radio"
                                    name="preference"
                                    value={value}
                                    defaultChecked={value === 'email'}
                                    onChange={() => setPreference(value as ContactPreference)}
                                    className="sr-only peer accent-collection-caribbeangreen"
                                />
                                <span className="peer-checked:text-collection-caribbeangreen capitalize inline-flex items-center gap-1">
                                    {icon}
                                    {label}
                                </span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Contact Channels */}
                <div className="grid md:grid-cols-3 gap-4">
                    <label className="flex flex-col">
                        <span className="font-zillaslab font-medium">
                            email{' '}
                            {preference === 'email' && (
                                <span className="text-collection-alizarincrimson">*</span>
                            )}
                        </span>
                        <input
                            type="email"
                            name="email"
                            required={preference === 'email'}
                            placeholder="your@email.com"
                            className="mt-1 rounded border p-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="font-zillaslab font-medium">
                            phone{' '}
                            {preference === 'text' && (
                                <span className="text-collection-alizarincrimson">*</span>
                            )}
                        </span>
                        <input
                            type="tel"
                            name="phone"
                            required={preference === 'text'}
                            placeholder="(213) 555-1212"
                            className="mt-1 rounded border p-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="font-zillaslab font-medium">
                            whatsapp{' '}
                            {preference === 'whatsapp' && (
                                <span className="text-collection-alizarincrimson">*</span>
                            )}
                        </span>
                        <input
                            type="text"
                            name="whatsapp"
                            required={preference === 'whatsapp'}
                            placeholder="@whatsapp_handle"
                            className="mt-1 rounded border p-2"
                        />
                    </label>
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
}
