'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@/context/UserContext';

function AuthRedirectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refetchUser } = useUser();
  
  useEffect(() => {
    async function handleAuthRedirect() {
      const code = searchParams.get('code');
      
      if (!code) {
        console.error('No code provided');
        router.push('/');
        return;
      }

      try {
        // Send the code to your backend
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/spotify/callback?code=${code}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error(`Authentication error: ${response.statusText}`);
        }

        // Refresh user data after successful authentication
        await refetchUser();
        
        // Redirect to home page
        router.push('/');
      } catch (error) {
        console.error('Auth failed:', error);
        router.push('/auth/error');
      }
    }

    handleAuthRedirect();
  }, [searchParams, router, refetchUser]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Authenticating...</h2>
        <p className="text-gray-600">Please wait while we complete your login.</p>
      </div>
    </div>
  );
}

export default function AuthRedirect() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading...</h2>
        </div>
      </div>
    }>
      <AuthRedirectContent />
    </Suspense>
  );
} 