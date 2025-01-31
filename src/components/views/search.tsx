import { Divider, Input } from 'antd';
import { Book } from '../ui/book';
import { BookGrid } from '../ui/book-grid';
import { BookSection } from '../ui/book-section';

export const Search = () => {
   return (
      <section className='flex flex-col items-center pt-10'>
         <div className='w-full max-w-[900px]'>
            <Input placeholder='Books, Authors, etc...' />
         </div>
         <Divider />

         <div className='w-full max-w-[900px] space-y-8'>
            <BookSection title='Popular Books'>
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
