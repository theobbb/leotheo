import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export function withAuth(WrappedComponent) {
    return function AuthenticatedWrapper({ user, ...props }) {
      const router = useRouter();
  
      // Check if we are on the client-side before using useRouter
      if (typeof window !== 'undefined' && !router) {
        return null;
      }
  
      if (!user) {
        // Redirect the user to the login page if they are not logged in
        router.push('/login');
        return null;
      }
  
      // Render the wrapped component if the user is authenticated
      return <WrappedComponent user={user} {...props} />;
    };
  }