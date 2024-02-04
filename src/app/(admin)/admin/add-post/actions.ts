'use server';

import { revalidatePath } from 'next/cache';
import { STATUSES } from '@techmeetup/libs/constants';
import { addPost } from '@techmeetup/libs/postsQuery';
import { TAddPostFormState } from './page';

export const addPostAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: TAddPostFormState,
  payload: FormData,
): Promise<TAddPostFormState> => {
  const title = payload.get('title') as string;
  const description = payload.get('description') as string;

  try {
    const response = await addPost({ title, description });
    if (response) {
      revalidatePath('/posts', 'page');
      revalidatePath('/admin', 'page');

      return { status: STATUSES.Success, message: response.message };
    }

    return { status: STATUSES.Error, message: 'Any error occurred!' };
  } catch (error) {
    if (error instanceof Error) {
      return { status: STATUSES.Error, message: error.message };
    }

    return { status: STATUSES.Error, message: 'Something went wrong during adding' };
  }
};
