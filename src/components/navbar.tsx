import { useIsMobile } from '../hooks/useIsMobile';
import { AppLogo } from './app-logo';

export const Navbar = () => {
   const isMobile = useIsMobile();
   return (
      <header className='fixed top-0 left-0 w-full bg-white z-10'>
         <nav className='max-w-[900px] mx-auto px-4 py-3 flex items-center justify-center'>
            <span className='font-bold text-lg'>{isMobile && <AppLogo />}</span>
         </nav>
      </header>
   );
};
