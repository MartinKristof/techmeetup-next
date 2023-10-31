'use client';

import { FC } from 'react';
import { useNotification } from '../_hooks/useNotification';
import { Alert } from './ui/Alert';

export const Notification: FC = () => {
  const { status, message } = useNotification();

  return (
    status &&
    message && (
      <div className="my-5">
        <Alert status={status} message={message} />
      </div>
    )
  );
};
