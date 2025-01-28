import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   ArrowRightEndOnRectangleIcon,
   LanguageIcon,
   UserCircleIcon,
} from '@heroicons/react/16/solid';

import { useAuth } from '../../supabase/providers/AuthProvider';
import { supabase } from '../../supabase/supabase';

export const popoverContent = () => {
   const navigate = useNavigate();
   const { session } = useAuth();
   const [loading, setLoading] = useState(false);

   const handleSignIn = async () => {
      setLoading(true);
      try {
         await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
               redirectTo: `${window.location.origin}/auth/callback`,
            },
         });
      } catch (error) {
         console.error('Error signing in:', error);
      } finally {
         setLoading(false);
      }
   };

   const handleSignOut = async () => {
      setLoading(true);
      try {
         await supabase.auth.signOut();
      } catch (error) {
         console.error('Error signing out:', error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className='space-y-2'>
         {session && (
            <div className='px-2 pb-2 mb-2 border-b'>
               <p className='text-sm text-gray-500'>Signed in as:</p>
               <p className='text-sm font-medium truncate'>{session.user.email}</p>
            </div>
         )}

         <div
            className='flex items-center gap-2 cursor-pointer hover:text-blue-600 px-2 py-1'
            onClick={() => navigate('/profile')}
         >
            <UserCircleIcon className='size-5' />
            <p>Account</p>
         </div>

         <div
            className='flex items-center gap-2 cursor-pointer hover:text-blue-600 px-2 py-1'
            onClick={() => navigate('/languages')}
         >
            <LanguageIcon className='size-5' />
            <p>Language</p>
         </div>

         {session ? (
            <div
               className='flex items-center gap-2 cursor-pointer hover:text-blue-600 px-2 py-1'
               onClick={handleSignOut}
               role='button'
            >
               <ArrowRightEndOnRectangleIcon className='size-5' />
               <p>{loading ? 'Loging out...' : 'Logout'}</p>
            </div>
         ) : (
            <div
               className='flex items-center gap-2 cursor-pointer hover:text-blue-600 px-2 py-1'
               onClick={handleSignIn}
               role='button'
            >
               <ArrowRightEndOnRectangleIcon className='size-5' />
               <p>{loading ? 'Loging in...' : 'Login'}</p>
            </div>
         )}
      </div>
   );
};
