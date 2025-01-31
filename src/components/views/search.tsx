import { Divider } from 'antd';

import { SearchInput } from '../ui/search-input';

import { Book } from '../ui/book';
import { BookGrid } from '../ui/book-grid';
import { BookSection } from '../ui/book-section';

export const Search = () => {
   return (
      <section className='flex flex-col items-center pt-10'>
         <Divider />
         <SearchInput />
         <div className='w-full max-w-[900px] space-y-8'>
            <h2 className='my-10 font-semibold text-2xl text-slate-700'>Popular Books</h2>
            <BookSection title='Horror'>
               <BookGrid>
                  <Book className='h-40 bg-gray-100 rounded-md'>Book 1</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Book 2</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Book 3</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Book 4</Book>
               </BookGrid>
            </BookSection>

            <BookSection title='Action & Adventure'>
               <BookGrid>
                  <Book className='h-40 bg-gray-100 rounded-md'>Fiction 1</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Fiction 2</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Fiction 3</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Fiction 4</Book>
               </BookGrid>
            </BookSection>

            <BookSection title='Thriller'>
               <BookGrid>
                  <Book className='h-40 bg-gray-100 rounded-md'>Non-Fiction 1</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Non-Fiction 2</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Non-Fiction 3</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Non-Fiction 4</Book>
               </BookGrid>
            </BookSection>
            <BookSection title='Romance'>
               <BookGrid>
                  <Book className='h-40 bg-gray-100 rounded-md'>Non-Fiction 1</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Non-Fiction 2</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Non-Fiction 3</Book>
                  <Book className='h-40 bg-gray-100 rounded-md'>Non-Fiction 4</Book>
               </BookGrid>
            </BookSection>
         </div>
      </section>
   );
};
