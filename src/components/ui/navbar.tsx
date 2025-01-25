import { Popover } from 'antd';
import { Bars3Icon } from '@heroicons/react/16/solid';

import { useLocation } from 'react-router';
import { useIsMobile } from '../../hooks/useIsMobile';

import { AppLogo } from './app-logo';
import { popoverContent } from './popover-content';

export const Navbar = () => {
   const location = useLocation();
   const isMobile = useIsMobile();

   const currentPath =
      location.pathname === '/'
         ? 'Home'
         : location.pathname.slice(1).charAt(0).toUpperCase() +
           location.pathname.slice(2).replace(/-/g, ' ');

   return (
      <header className='fixed top-0 left-0 w-full bg-white z-10'>
         <nav className='max-w-[900px] mx-auto px-4 py-3 flex items-center justify-between'>
            <AppLogo />
            {!isMobile && <span className='text-xs font-macondo'>{currentPath}</span>}
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
