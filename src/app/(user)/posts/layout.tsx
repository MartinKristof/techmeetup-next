import { FC } from 'react';
import { Container } from '@techmeetup/app/_components/ui/Container';
import { Nav } from '@techmeetup/app/_components/ui/Nav';
import Link from 'next/link';

const UserLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Nav>
      <Link className="text-white font-bold hover:underline" href="/posts">
        Posts
      </Link>
    </Nav>
    <Container>{children}</Container>
  </>
);

export default UserLayout;
