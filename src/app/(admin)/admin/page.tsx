import { FC } from 'react';
import { Metadata } from 'next';
import { getPosts } from '@techmeetup/libs/postsQuery';
import { PostList } from '@techmeetup/app/_components/Posts/PostsList';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Post! TechMeetup - Admin posts',
};

const AdminPostsPage: FC = async () => {
  const { posts } = await getPosts();

  return <PostList posts={posts} isAdmin />;
};

export default AdminPostsPage;
