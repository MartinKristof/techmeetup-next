import React, { FC } from 'react';

interface PostDetailPageProps {
  params: { id: string };
}

// SSG

const PostDetailPage: FC<PostDetailPageProps> = async ({ params: { id } }) => {
  return <p>Post detail page</p>;
};

export default PostDetailPage;
