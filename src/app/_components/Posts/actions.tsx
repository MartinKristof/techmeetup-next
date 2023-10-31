'use server';

import { isInFavorites } from '@techmeetup/libs/favorites';
import { deletePostById } from '@techmeetup/libs/postsQuery';
import { revalidatePath } from 'next/cache';

export const toggleFavorite = async (id: string) => {
  return undefined;
};

export const deletePost = async (id: string) => {
  await deletePostById(id);

  revalidatePath('/posts', 'page');
  revalidatePath('/admin', 'page');
  revalidatePath('/(user)/posts/[id]', 'page');

  if (isInFavorites(id)) {
    toggleFavorite(id);
  }
};
