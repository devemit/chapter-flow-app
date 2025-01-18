import { NavLink } from 'react-router-dom';
import {
   HomeIcon,
   SparklesIcon,
   MagnifyingGlassIcon,
   InformationCircleIcon,
} from '@heroicons/react/24/solid';

export const Sidebar = () => {
   return (
      <aside className='md:fixed md:top-16 md:h-full md:w-[120px] px-4 py-3 md:flex-shrink-0 fixed bottom-0 w-full bg-white'>
         {/* Mobile Sidebar */}
         <nav className='md:hidden flex justify-around items-center border-t border-gray-200 py-2 bg-white'>
            <NavLink
               to='/'
               className={({ isActive }) =>
                  `text-sm text-center ${
                     isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-400'
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
                     isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-400'
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
                     isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-400'
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
                     isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-400'
                  }`
               }
            >
               <span className='block'>
                  <InformationCircleIcon className='size-6' />
               </span>
            </NavLink>
         </nav>

         {/* Desktop Sidebar */}
         <nav className='hidden md:flex flex-col space-y-4'>
            <NavLink
               to='/'
               className={({ isActive }) =>
                  `block text-center py-2 relative ${
                     isActive
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                  }`
               }
            >
               <span className='relative group'>
                  Home
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
               </span>
            </NavLink>
            <NavLink
               to='/discover'
               className={({ isActive }) =>
                  `block text-center py-2 relative ${
                     isActive
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                  }`
               }
            >
               <span className='relative group'>
                  Discover
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
               </span>
            </NavLink>
            <NavLink
               to='/search'
               className={({ isActive }) =>
                  `block text-center py-2 relative ${
                     isActive
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                  }`
               }
            >
               <span className='relative group'>
                  Search
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
               </span>
            </NavLink>
            <NavLink
               to='/about-us'
               className={({ isActive }) =>
                  `block text-center py-2 relative ${
                     isActive
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                  }`
               }
            >
               <span className='relative group'>
                  About
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
               </span>
            </NavLink>
         </nav>
      </aside>
   );
};
