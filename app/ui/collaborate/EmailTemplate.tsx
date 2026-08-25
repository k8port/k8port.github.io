import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
    <div>
        <h1>New Message incoming from Portfolio!</h1>
        <p>A new contact form submission has been received.</p>
        <hr />
        <h2>Sender Details:</h2>
        <ul>
            <li>
                <strong>Name:</strong> {name}
            </li>
            <li>
                <strong>Email:</strong> {email}
            </li>
        </ul>
        <hr />
        <h2>Message:</h2>
        <p>{message}</p>
    </div>
);
