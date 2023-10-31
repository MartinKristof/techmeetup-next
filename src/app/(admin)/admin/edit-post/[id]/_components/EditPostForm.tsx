'use client';

import { Form } from '@techmeetup/app/_components/ui/Form';
import { Input } from '@techmeetup/app/_components/ui/Input';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { useNotification } from '@techmeetup/app/_hooks/useNotification';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { editPostAction } from '../actions';
import { STATUSES } from '@techmeetup/libs/constants';
import { redirect } from 'next/navigation';

const initialState = {
  message: null,
  status: null,
};

export const EditPostForm: FC<{
  children: ReactNode;
  id: string;
  title: string;
  description: string;
}> = ({ children, id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [state, formAction] = useFormState(editPostAction.bind(null, id), initialState);
  const { showError, showSuccess } = useNotification();

  useEffect(() => {
    if (state.status === STATUSES.Success) {
      showSuccess(state.message, true);

      redirect('/admin');
    } else if (state.status === STATUSES.Error) {
      showError(state.message);
    }
  }, [showError, showSuccess, state, state.message, state.status]);

  return (
    <>
      <Form action={formAction}>
        <Input name="title" onChange={value => setNewTitle(value)} value={newTitle} placeholder="Post Title" />
        <Input
          name="description"
          onChange={value => setNewDescription(value)}
          value={newDescription}
          placeholder="Description Title"
        />
        <SubmitButton>Update Post</SubmitButton>
      </Form>
      {children}
    </>
  );
};
