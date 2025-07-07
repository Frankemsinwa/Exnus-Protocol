
'use server';

import { z } from 'zod';
import { addNewsletterSubscriber } from '@/services/db';

const emailSchema = z.string().email({ message: 'Please enter a valid email address.' });

export async function subscribeToNewsletter(
  prevState: { message: string; success: boolean },
  formData: FormData
) {
  const email = formData.get('email');

  const validatedEmail = emailSchema.safeParse(email);

  if (!validatedEmail.success) {
    return {
      message: validatedEmail.error.errors[0].message,
      success: false,
    };
  }

  try {
    await addNewsletterSubscriber(validatedEmail.data);
    return {
      message: "You've subscribed to our newsletter. We'll be in touch!",
      success: true,
    };
  } catch (error) {
    console.error('Failed to subscribe:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
    };
  }
}
