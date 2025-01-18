import {
   ArrowRightEndOnRectangleIcon,
   LanguageIcon,
   UserCircleIcon,
} from '@heroicons/react/16/solid';
import { SignOutButton, SignInButton, useAuth } from '@clerk/clerk-react';

export const popoverContent = () => {
   const { isSignedIn } = useAuth();

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
         {isSignedIn ? (
            <SignOutButton>
               <div
                  className='flex items-center gap-2 cursor-pointer hover:text-blue-600'
                  role='button'
               >
                  <ArrowRightEndOnRectangleIcon className='size-5' />
                  <p>Logout</p>
               </div>
            </SignOutButton>
         ) : (
            <SignInButton mode='modal'>
               <div
                  className='flex items-center gap-2 cursor-pointer hover:text-blue-600'
                  role='button'
               >
                  <ArrowRightEndOnRectangleIcon className='size-5' />
                  <p>Login</p>
               </div>
            </SignInButton>
         )}
      </div>
   );
};
