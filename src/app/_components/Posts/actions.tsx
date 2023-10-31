// 'use server';

import { revalidatePath } from 'next/cache';
import { isInFavorites } from '@techmeetup/libs/favorites';
import { deletePostById } from '@techmeetup/libs/postsQuery';

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
