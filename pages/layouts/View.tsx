'use client';
import { useMediaQuery } from 'usehooks-ts';
import Desktop from '@/src/views/Desktop';
import Mobile from '@/src/views/Mobile';

const View = () => {
  // const matches = useMediaQuery('(min-width: 500px)')
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    // you can set the mobile screen max width
    matches ? <Desktop /> : <Mobile />
    // <Desktop />
  );

};
export default View;