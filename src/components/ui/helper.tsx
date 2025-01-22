import {
   ArrowRightEndOnRectangleIcon,
   LanguageIcon,
   UserCircleIcon,
} from '@heroicons/react/16/solid';

import { useSupabaseSession } from '../../supabase/hooks/useSupabaseSession';
import { supabase } from '../../supabase/supabase';

export const popoverContent = () => {
   const session = useSupabaseSession();

   const handleSignIn = async () => {
      try {
         const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
               redirectTo: `${window.location.origin}/auth/callback`,
               queryParams: {
                  access_type: 'offline',
                  prompt: 'consent',
               },
            },
         });

         if (error) throw error;
      } catch (error) {
         console.error('Error signing in:', error);
      }
   };

   const handleSignOut = async () => {
      try {
         const { error } = await supabase.auth.signOut();
         if (error) throw error;
      } catch (error) {
         console.error('Error signing out:', error);
      }
   };

   return (
      <div className='space-y-2'>
         <div className='flex items-center gap-2 cursor-pointer hover:text-blue-600'>
            <UserCircleIcon className='size-5' />
            <p>Account</p>
         </div>
         <div className='flex items-center gap-2 cursor-pointer hover:text-blue-600'>
            <LanguageIcon className='size-5' />
            <p>Language</p>
         </div>
         {session ? (
            <div
               className='flex items-center gap-2 cursor-pointer hover:text-blue-600'
               role='button'
               onClick={handleSignOut}
            >
               <ArrowRightEndOnRectangleIcon className='size-5' />
               <p>Logout</p>
            </div>
         ) : (
            <div
               className='flex items-center gap-2 cursor-pointer hover:text-blue-600'
               role='button'
               onClick={handleSignIn}
            >
               <ArrowRightEndOnRectangleIcon className='size-5' />
               <p>Login</p>
            </div>
         )}
      </div>
   );
};
