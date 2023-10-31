'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const FooterNav = () => {
  const pathname = usePathname();
  // Add active classes to the current link
  const activeClasses = 'font-bold text-white';

  return (
    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
      <li>
        <Link href="/" className={`mr-4 hover:underline md:mr-6`}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/photos" className={`mr-4 hover:underline md:mr-6`}>
          Photos
        </Link>
      </li>
    </ul>
  );
};
