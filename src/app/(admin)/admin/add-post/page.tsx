'use client';

import { Form } from '@techmeetup/app/_components/ui/Form';
import { Input } from '@techmeetup/app/_components/ui/Input';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { addPostAction } from './actions';
import { useFormState } from 'react-dom';
import { useNotification } from '@techmeetup/app/_hooks/useNotification';
import { useEffect } from 'react';
import { STATUSES } from '@techmeetup/libs/constants';
import { redirect } from 'next/navigation';

const initialState = {
  message: null,
  status: null,
};

const AddPostPage = () => {
  const [state, formAction] = useFormState(addPostAction, initialState);
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
    <Form action={formAction}>
      <Input name="title" placeholder="Post Title" />
      <Input name="description" placeholder="Description Title" />
      <SubmitButton>Add Post</SubmitButton>
    </Form>
  );
};
export default AddPostPage;
