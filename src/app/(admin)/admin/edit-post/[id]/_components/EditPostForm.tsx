// 'use client';

import { FC, ReactNode } from 'react';

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
  return <p>Edit post form</p>;
};
