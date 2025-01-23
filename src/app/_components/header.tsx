// components/LoginHeader.tsx
'use client';

import { useUser } from '@/context/UserContext';
import Link from 'next/link';

export default function LoginHeader() {
  const { user, loading, loginUrl } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-end p-4">
      {user ? (
        <div className="flex items-center gap-2">
          <span>Welcome, {user.displayName}</span>
          {user.imageUrl && (
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
          )}
        </div>
      ) : (
        <Link
          href={loginUrl}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login with Spotify
        </Link>
      )}
    </div>
  );
}