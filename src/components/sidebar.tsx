import { NavLink } from 'react-router-dom';

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
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'
                     fill='currentColor'
                     className='size-6'
                  >
                     <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                     <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
                  </svg>
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
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'
                     fill='currentColor'
                     className='size-6'
                  >
                     <path
                        fill-rule='evenodd'
                        d='M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z'
                        clip-rule='evenodd'
                     />
                  </svg>
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
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'
                     fill='currentColor'
                     className='size-6'
                  >
                     <path d='M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z' />
                     <path
                        fill-rule='evenodd'
                        d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z'
                        clip-rule='evenodd'
                     />
                  </svg>
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
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'
                     fill='currentColor'
                     className='size-6'
                  >
                     <path
                        fill-rule='evenodd'
                        d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
                        clip-rule='evenodd'
                     />
                  </svg>
               </span>
            </NavLink>
         </nav>

         {/* Desktop Sidebar */}
         <nav className='hidden md:flex flex-col space-y-4'>
            <NavLink
               to='/'
               className={({ isActive }) =>
                  `block text-center py-2 px-4 rounded ${
                     isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'
                  }`
               }
            >
               Home
            </NavLink>
            <NavLink
               to='/discover'
               className={({ isActive }) =>
                  `block text-center py-2 px-4 rounded ${
                     isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'
                  }`
               }
            >
               Discover
            </NavLink>
            <NavLink
               to='/search'
               className={({ isActive }) =>
                  `block text-center py-2 px-4 rounded ${
                     isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'
                  }`
               }
            >
               Search
            </NavLink>
            <NavLink
               to='/about-us'
               className={({ isActive }) =>
                  `block text-center py-2 px-4 rounded ${
                     isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'
                  }`
               }
            >
               About
            </NavLink>
         </nav>
      </aside>
   );
};
