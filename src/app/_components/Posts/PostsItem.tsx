import Link from 'next/link';
import { FC } from 'react';

export const PostsItem: FC<{
  id: string;
  title?: string;
  description?: string;
  isAdmin: boolean;
}> = ({ id, title, description, isAdmin }) => (
  <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
    {isAdmin ? (
      <div>
        {title && <h2 className="font-bold text-2xl">{title}</h2>}
        {description && <div>{description}</div>}
      </div>
    ) : (
      <Link href={`/posts/${id.toString()}`}>
        <div>
          {title && <h2 className="font-bold text-2xl">{title}</h2>}
          {description && <div>{description}</div>}
        </div>
      </Link>
    )}
    <div className="flex gap-2">{/* Actions */}</div>
  </div>
);
