import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// List of valid routes that should not redirect to stay-tuned
const validRoutes = [
  '/',
  '/studio',
  '/layanan',
  '/booking',
  '/riset',
  '/gallery',
  '/stay-tuned',
  '/_next',
  '/api',
  '/favicon.png',
  '/logo.png'
];

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string[] };
  const path = '/' + (slug || []).join('/');

  // Check if the route is valid
  const isValidRoute = validRoutes.some(route => {
    if (route === '/') return path === '/';
    return path.startsWith(route);
  });

  // If it's a valid route, let Next.js handle it normally
  if (isValidRoute) {
    return {
      notFound: true, // This will trigger 404 for valid routes that don't exist
    };
  }

  // For invalid routes, redirect to stay-tuned
  return {
    redirect: {
      destination: '/stay-tuned',
      permanent: false,
    },
  };
};

// This component will only render if the route is somehow still accessible
const CatchAllPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Double-check and redirect if needed
    const path = router.asPath;
    const isValidRoute = validRoutes.some(route => {
      if (route === '/') return path === '/';
      return path.startsWith(route);
    });

    if (!isValidRoute) {
      router.replace('/stay-tuned');
    }
  }, [router]);

  return null; // This component should never render
};

export default CatchAllPage; 