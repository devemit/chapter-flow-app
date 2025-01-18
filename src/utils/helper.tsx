import {
   ArrowRightEndOnRectangleIcon,
   LanguageIcon,
   UserCircleIcon,
} from '@heroicons/react/16/solid';

export const popoverContent = (
   <div className='space-y-2'>
      <div className='flex items-center gap-2 cursor-pointer hover:text-blue-600'>
         <UserCircleIcon className='size-5' />
         <p>Account</p>
      </div>
      <div className='flex items-center gap-2 cursor-pointer hover:text-blue-600'>
         <LanguageIcon className='size-5' />
         <p>Language</p>
      </div>
      <div className='flex items-center gap-2 cursor-pointer hover:text-blue-600'>
         <ArrowRightEndOnRectangleIcon className='size-5' />
         <p>Logout</p>
      </div>
   </div>
);
