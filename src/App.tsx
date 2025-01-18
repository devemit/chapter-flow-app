import { Route, Routes } from 'react-router';
import { AppWrapper } from './layout/app-layout';

import { Main } from './components/ui/main';
import { Navbar } from './components/ui/navbar';
import { Sidebar } from './components/ui/sidebar';

import { Discover } from './components/views/discover';
import { AboutUs } from './components/views/about-us';
import { Home } from './components/views/home';
import { Search } from './components/views/search';

const App = () => {
   return (
      <AppWrapper>
         <Navbar />
         <div className='flex flex-col md:flex-row w-full pt-16'>
            <Sidebar />
            <Main>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/discover' element={<Discover />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/about-us' element={<AboutUs />} />
               </Routes>
            </Main>
         </div>
      </AppWrapper>
   );
};

export default App;
