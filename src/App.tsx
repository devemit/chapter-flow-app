import { Route, Routes } from 'react-router';
import { AppWrapper } from './layout/app-layout';

import { MainContent } from './components/ui/main-content';
import { Navbar } from './components/ui/navbar';
import { Sidebar } from './components/ui/sidebar';

import { Discover } from './components/views/discover';
import { AboutUs } from './components/views/about-us';
import { Home } from './components/views/home';
import { Search } from './components/views/search';
import { Profile } from './components/views/profile';

const App = () => {
   return (
      <AppWrapper>
         <Navbar />
         <div className='flex flex-col md:flex-row w-full pt-16'>
            <Sidebar />
            <MainContent>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/discover' element={<Discover />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/about-us' element={<AboutUs />} />
                  <Route path='/profile' element={<Profile />} />
               </Routes>
            </MainContent>
         </div>
      </AppWrapper>
   );
};

export default App;
