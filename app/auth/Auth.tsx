'use client';
import { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth =<p extends object> (WrappedComponent:ComponentType<p>) => {
    return (props:p) => {
      const router = useRouter();

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/auth'); // Redirect if no token
        }
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
