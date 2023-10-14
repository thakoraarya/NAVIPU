import LandingPage from '../src/views/LandingPage';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser(); // Use useAuth0 hook to access user information
// Using async/await to handle the Promise
  if (user) {
    router.push('/admin/AdminView');
    return null;
  }
  return (isLoading ? <div className='w-screen h-screen bg-amber-50 text-center text-8xl'>loading</div> :
    <LandingPage />);
};
export default IndexPage;