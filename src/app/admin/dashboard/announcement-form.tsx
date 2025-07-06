
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendAnnouncement } from './actions';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, AlertTriangle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function SendButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" aria-disabled={pending}>
      {pending ? 'Sending...' : 'Send to Subscribers'}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function AnnouncementForm() {
  const [state, dispatch] = useActionState(sendAnnouncement, undefined);

  return (
    <form action={dispatch} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="subject" className="font-medium text-sm">Subject</label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="New Update from Exnus Protocol!"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="font-medium text-sm">Message</label>
        <Textarea
          id="message"
          name="message"
          placeholder="Type your announcement here..."
          required
          rows={5}
        />
      </div>
      {state && (
        <Alert variant={state.success ? 'default' : 'destructive'} className={state.success ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : ''}>
          {state.success ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
          <AlertTitle>{state.success ? 'Success' : 'Error'}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      <SendButton />
    </form>
  );
}
