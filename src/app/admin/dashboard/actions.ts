
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { getNewsletterSubscribers } from '@/services/db';

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

        // --- Email Sending Simulation ---
        // In a real application, you would integrate an email service like
        // SendGrid, Resend, or Nodemailer here. For this demo, we'll
        // just log the action to the console.

        console.log('--- Sending Announcement ---');
        console.log('Subject:', subject);
        console.log('Message:', message);
        console.log('Recipients:', subscribers);
        console.log('--------------------------');

        // Simulate a network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            message: `Announcement sent to ${subscribers.length} subscriber(s). Check the console for details.`,
            success: true,
        };
    } catch (error) {
        console.error('Failed to send announcement:', error);
        return {
            message: 'An unexpected error occurred.',
            success: false,
        };
    }
}
