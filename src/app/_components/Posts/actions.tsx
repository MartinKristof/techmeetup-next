'use server';

import { getFavoritesFromCookies, isInFavorites, setFavoritesToCookies } from '@techmeetup/libs/favorites';
import { deletePostById } from '@techmeetup/libs/postsQuery';
import { revalidatePath } from 'next/cache';

export const toggleFavorite = async (id: string) => {
  const favorites = getFavoritesFromCookies();

  let newFavorites = [...favorites.favorites, id];

  if (isInFavorites(id)) {
    newFavorites = favorites.favorites.filter((favId: string) => favId !== id);
  }

  setFavoritesToCookies(newFavorites);
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
