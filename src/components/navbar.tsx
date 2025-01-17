import { useIsMobile } from '../hooks/useIsMobile';
import { AppLogo } from './app-logo';

export const Navbar = () => {
   const isMobile = useIsMobile();
   return (
      <header className='fixed top-4 left-0 w-full bg-white z-10'>
         <nav className='max-w-[900px] mx-auto px-4 py-3 flex items-center justify-between'>
            <span>{isMobile && <AppLogo />}</span>
            <div>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-6'
               >
                  <path
                     fill-rule='evenodd'
                     d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                     clip-rule='evenodd'
                  />
               </svg>
            </div>
         </nav>
      </header>
   );
};
