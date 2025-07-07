
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { getNewsletterSubscribers } from '@/services/db';
import { Resend } from 'resend';

export async function logout() {
  cookies().delete('admin-auth');
  redirect('/admin/login');
}

const announcementSchema = z.object({
    subject: z.string().min(1, { message: 'Subject cannot be empty.' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});

export async function sendAnnouncement(
  prevState: { message: string, success: boolean } | undefined,
  formData: FormData,
) {
    if (!process.env.RESEND_API_KEY) {
        return {
            message: "Email sending is not configured. The administrator needs to provide a Resend API key.",
            success: false,
        };
    }

    const validatedFields = announcementSchema.safeParse({
        subject: formData.get('subject'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.errors.map((e) => e.message).join(', '),
            success: false,
        };
    }

    const { subject, message } = validatedFields.data;

    try {
        const subscribers = await getNewsletterSubscribers();

        if (subscribers.length === 0) {
            return {
                message: 'There are no subscribers to send an announcement to.',
                success: false,
            };
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        
        // Note: To send from your own domain (e.g., contact@exnus.org), 
        // you must verify it first in your Resend account dashboard.
        const fromAddress = 'onboarding@resend.dev';

        await resend.emails.send({
            from: fromAddress,
            to: subscribers,
            subject: subject,
            text: message,
        });

        return {
            message: `Announcement sent to ${subscribers.length} subscriber(s).`,
            success: true,
        };
    } catch (error) {
        console.error('Failed to send announcement:', error);
        return {
            message: 'An unexpected error occurred while sending the email.',
            success: false,
        };
    }
}
