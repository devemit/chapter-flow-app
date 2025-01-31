import { Button } from 'antd';
import { useAuth } from '../../supabase/providers/AuthProvider';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { BookGrid } from '../ui/book-grid';
import { BookSection } from '../ui/book-section';
import { Book } from '../ui/book';
import { SubTitle } from '../ui/sub-title';
import { Link } from 'react-router-dom';

export const Home = () => {
   const { session } = useAuth();
   const hasReadingHistory = false;

   return (
      <div className='flex flex-col items-center'>
         <section className='w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-20'>
            <div className='max-w-[900px] mx-auto px-4 text-center'>
               <h1 className='text-5xl font-bold mb-6 font-macondo'>Dive into Endless Stories</h1>
               <p className='text-gray-600 mb-8 text-lg max-w-[600px] mx-auto'>
                  Explore thousands of books, from classics to AI-generated tales, all in one place
               </p>
               <Link to='/search'>
                  <Button type='primary' size='large'>
                     Start Reading
                  </Button>
               </Link>
            </div>
         </section>

         <div className='w-full max-w-[900px] px-4 py-8 space-y-12'>
            {session && (
               // TODO: Add continue reading for user
               <BookSection title='Picked for You'>
                  <BookGrid>
                     <Book className='h-40 bg-gray-100 rounded-md'>Book 1</Book>
                     <Book className='h-40 bg-gray-100 rounded-md'>Book 2</Book>
                  </BookGrid>
               </BookSection>
            )}

            <BookSection title='Trending Now'>
               <BookGrid>
                  <Book className='h-40 bg-gray-100 rounded-md'>Book 1</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Book 2</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Book 3</Book>
               </BookGrid>
            </BookSection>

            {session && hasReadingHistory && (
               // TODO: Add continue reading
               <BookSection title='Continue Reading'>
                  <BookGrid>
                     <Book className='h-40 bg-gray-100 rounded-md'>Book 3</Book>
                  </BookGrid>
               </BookSection>
            )}

            <section className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8'>
               <div className='flex items-center gap-2 mb-4'>
                  <SparklesIcon className='w-6 h-6 text-purple-600' />
                  <SubTitle>AI-Generated Stories</SubTitle>
               </div>
               <p className='text-gray-600 mb-4'>
                  Experience unique stories crafted by artificial intelligence. Each tale is
                  one-of-a-kind, created just for you.
               </p>
               <Link to='/discover'>
                  <Button type='primary' className='bg-purple-600'>
                     Explore AI Books
                  </Button>
               </Link>
            </section>

            <section>
               <h2 className='text-xl font-semibold mb-4'>Explore Genres</h2>
               <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  {[
                     'Fantasy',
                     'Mystery',
                     'Romance',
                     'Sci-Fi',
                     'Horror',
                     'Biography',
                     'History',
                     'Self-Help',
                  ].map((genre) => (
                     <div
                        key={genre}
                        className='p-4 bg-gray-50 rounded-lg text-center 
                                 hover:bg-gray-100 cursor-pointer transition-colors'
                     >
                        {genre}
                     </div>
                  ))}
               </div>
            </section>

            <section className='bg-gray-50 rounded-2xl p-8'>
               <div className='flex justify-between items-start mb-6'>
                  <div>
                     <h2 className='text-xl font-semibold mb-2'>Book of the Day</h2>
                     <p className='text-gray-600'>Hand-picked recommendations updated daily</p>
                  </div>
                  <Button type='link'>See Previous Picks</Button>
               </div>
               <div className='flex gap-8'>
                  <div className='w-1/3'>
                     <div className='aspect-[2/3] bg-gray-200 rounded-lg'></div>
                  </div>
                  <div className='w-2/3'>
                     <h3 className='text-xl font-semibold mb-2'>Book Title</h3>
                     <p className='text-gray-600 mb-4'>Author Name</p>
                     <p className='text-gray-700 mb-4'>
                        Brief description of the book goes here. This should be a compelling
                        introduction that makes readers want to learn more.
                     </p>
                     <Button type='primary'>Read Now</Button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};
