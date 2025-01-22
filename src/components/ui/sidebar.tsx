import { NavLink } from 'react-router-dom';
import {
   HomeIcon,
   SparklesIcon,
   MagnifyingGlassIcon,
   InformationCircleIcon,
   UserCircleIcon,
} from '@heroicons/react/24/solid';
import { useSupabaseSession } from '../../supabase/hooks/useSupabaseSession';

export const Sidebar = () => {
   const session = useSupabaseSession();

   return (
      <aside className='md:fixed md:top-16 md:h-full md:w-[120px] px-4 py-3 md:flex-shrink-0 fixed bottom-0 w-full bg-white'>
         {/* Mobile Sidebar */}
         <nav className='md:hidden flex justify-around items-center border-t border-gray-200 py-2 bg-white'>
            <NavLink
               to='/'
               className={({ isActive }) =>
                  `text-sm text-center ${
                     isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-400'
                  }`
               }
            >
               <span className='block'>
                  <HomeIcon className='size-6' />
               </span>
            </NavLink>
            <NavLink
               to='/discover'
               className={({ isActive }) =>
                  `text-sm text-center ${
                     isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-400'
                  }`
               }
            >
               <span className='block'>
                  <SparklesIcon className='size-6' />
               </span>
            </NavLink>
            <NavLink
               to='/search'
               className={({ isActive }) =>
                  `text-sm text-center ${
                     isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-400'
                  }`
               }
            >
               <span className='block'>
                  <MagnifyingGlassIcon className='size-6' />
               </span>
            </NavLink>
            <NavLink
               to='/about-us'
               className={({ isActive }) =>
                  `text-sm text-center ${
                     isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-400'
                  }`
               }
            >
               <span className='block'>
                  <InformationCircleIcon className='size-6' />
               </span>
            </NavLink>
            {session && (
               <NavLink
                  to='/profile'
                  className={({ isActive }) =>
                     `text-sm text-center ${
                        isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-400'
                     }`
                  }
               >
                  <span className='block'>
                     {session.user?.user_metadata?.avatar_url ? (
                        <img
                           src={session.user.user_metadata.avatar_url}
                           alt='Profile'
                           className='w-6 h-6 rounded-full'
                        />
                     ) : (
                        <UserCircleIcon className='w-6 h-6' />
                     )}
                  </span>
               </NavLink>
            )}
         </nav>

         {/* Desktop Sidebar */}
         <nav className='hidden md:flex flex-col space-y-4'>
            <NavLink
               to='/'
               className={({ isActive }) =>
                  `flex items-center gap-2 text-center py-2 relative ${
                     isActive
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                  }`
               }
            >
               <HomeIcon className='w-5 h-5' />
               <span className='relative group'>Home</span>
            </NavLink>
            <NavLink
               to='/discover'
               className={({ isActive }) =>
                  `flex items-center gap-2 text-center py-2 relative ${
                     isActive
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                  }`
               }
            >
               <SparklesIcon className='w-5 h-5' />
               <span className='relative group'>Discover</span>
            </NavLink>
            <NavLink
               to='/search'
               className={({ isActive }) =>
                  `flex items-center gap-2 text-center py-2 relative ${
                     isActive
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                  }`
               }
            >
               <MagnifyingGlassIcon className='w-5 h-5' />
               <span className='relative group'>Search</span>
            </NavLink>
            <NavLink
               to='/about-us'
               className={({ isActive }) =>
                  `flex items-center gap-2 text-center py-2 relative ${
                     isActive
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                  }`
               }
            >
               <InformationCircleIcon className='w-5 h-5' />
               <span className='relative group'>About</span>
            </NavLink>
            {session && (
               <NavLink
                  to='/profile'
                  className={({ isActive }) =>
                     `flex gap-1 items-center text-center py-2 relative ${
                        isActive
                           ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                           : 'text-gray-700 hover:text-blue-600'
                     }`
                  }
               >
                  <span className='relative group'>
                     {session.user?.user_metadata?.avatar_url ? (
                        <img
                           src={session.user.user_metadata.avatar_url}
                           alt='Profile'
                           className='w-5 h-5 rounded-full inline-block'
                        />
                     ) : (
                        <UserCircleIcon className='w-6 h-6 inline-block' />
                     )}
                     <span className='ml-2'>Profile</span>
                  </span>
               </NavLink>
            )}
         </nav>
      </aside>
   );
};
