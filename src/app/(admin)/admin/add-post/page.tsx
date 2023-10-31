'use client';

import { Form } from '@techmeetup/app/_components/ui/Form';
import { Input } from '@techmeetup/app/_components/ui/Input';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { addPostAction } from './actions';

const initialState = {
  message: null,
  status: null,
};

const AddPostPage = () => {
  return (
    <Form action={addPostAction}>
      <Input name="title" placeholder="Post Title" />
      <Input name="description" placeholder="Description Title" />
      <SubmitButton>Add Post</SubmitButton>
    </Form>
  );
};
export default AddPostPage;
