
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const accessCode = formData.get('accessCode');

    // Make sure ADMIN_ACCESS_CODE is set in your .env.local file
    if (!process.env.ADMIN_ACCESS_CODE || process.env.ADMIN_ACCESS_CODE === "replace-with-your-secret-code") {
        return "Administrator has not configured an access code.";
    }

    if (accessCode === process.env.ADMIN_ACCESS_CODE) {
      cookies().set('admin-auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });
    } else {
      return 'Invalid access code. Please try again.';
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return 'An unknown error occurred.';
    }
    return 'An unknown error occurred.';
  }

  redirect('/admin/dashboard');
}
