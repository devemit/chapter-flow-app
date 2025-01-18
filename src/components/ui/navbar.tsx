import { Popover } from 'antd';
import {
   ArrowRightEndOnRectangleIcon,
   Bars3Icon,
   LanguageIcon,
   UserCircleIcon,
} from '@heroicons/react/16/solid';

import { useIsMobile } from '../../hooks/useIsMobile';
import { AppLogo } from './app-logo';

export const Navbar = () => {
   const isMobile = useIsMobile();

   const popoverContent = (
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

   return (
      <header className='fixed top-0 left-0 w-full bg-white z-10'>
         <nav className='max-w-[900px] mx-auto px-4 py-3 flex items-center justify-between'>
            <span>{isMobile && <AppLogo />}</span>
            <Popover
               content={popoverContent}
               arrow={false}
               trigger={'click'}
               placement='bottomLeft'
            >
               <div className='cursor-pointer'>
                  <Bars3Icon className='size-6' />
               </div>
            </Popover>
         </nav>
      </header>
   );
};
