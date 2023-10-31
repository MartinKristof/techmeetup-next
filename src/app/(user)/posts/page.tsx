import { FC } from 'react';
import { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Post! TechMeetup - User posts',
};

const UserPostsPage: FC = async () => {
  return <p>User post page</p>;
};

export default UserPostsPage;
