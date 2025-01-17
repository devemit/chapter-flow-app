import { Route, Routes } from 'react-router';
import { Main } from './components/main';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import { AppWrapper } from './layout/app-layout';
import { Discover } from './components/ui/discover';
import { AboutUs } from './components/ui/about-us';
import { Home } from './components/ui/home';
import { Search } from './components/ui/search';

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
