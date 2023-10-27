import { FC } from 'react';

export const Alert: FC<{ message: string }> = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold mr-3">An error occurred!</strong>
    <span className="block sm:inline">{message}</span>
  </div>
);
