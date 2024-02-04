'use server';

import { STATUSES } from '@techmeetup/libs/constants';
import { updatePostById } from '@techmeetup/libs/postsQuery';
import { revalidatePath } from 'next/cache';
import { TEditPostFormState } from './_components/EditPostForm';

export const editPostAction = async (
  id: string,
  prevState: TEditPostFormState,
  formData: FormData,
): Promise<{ status: string; message: string }> => {
  // const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  try {
    const response = await updatePostById({ id, title, description });
    if (response) {
      revalidatePath('/posts', 'page');
      revalidatePath('/admin', 'page');
      revalidatePath('/(user)/posts/[id]', 'page');

      return { status: STATUSES.Success, message: response.message };
    }

    return { status: STATUSES.Error, message: 'Any error occurred!' };
  } catch (error) {
    if (error instanceof Error) {
      return { status: STATUSES.Error, message: error.message };
    }

    return { status: STATUSES.Error, message: 'Something went wrong during update' };
  }
};
