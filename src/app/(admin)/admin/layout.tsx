import { Container } from '@techmeetup/app/_components/ui/Container';
import { FC } from 'react';

const AdminLayout: FC<{ children: React.ReactNode }> = ({ children }) => <Container>{children}</Container>;

export default AdminLayout;
