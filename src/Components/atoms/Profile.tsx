import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

interface ProfileProps {
    innertext: string;
}

const Profile: React.FC<ProfileProps> = ({ innertext }) => {
    const {  user } = useUser(); // Use useAuth0 hook to access user information

    return (
        <div className='w-auto'>
            <p className='capitalize'>
                {innertext},{' '}
                <span className='font-bold uppercase'>
          {user ? user.nickname : 'guest'}
        </span>
            </p>
        </div>
    );
};

export default Profile;
