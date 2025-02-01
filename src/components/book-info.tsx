import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Spin } from 'antd';
import { BookOutlined, ReadOutlined } from '@ant-design/icons';

import { fetchBook } from '../services/fetch-book';
import ReadingComponent from './views/epub-reader';

export const BookInfo = () => {
   const { id } = useParams();

   const [book, setBook] = useState<any>(null);
   const [loading, setLoading] = useState(true);
   const [isReading, setIsReading] = useState(false);

   useEffect(() => {
      const getBook = async () => {
         try {
            const book = await fetchBook(id as string);
            setBook(book);
         } catch (error) {
            console.error('Error fetching book:', error);
         } finally {
            setLoading(false);
         }
      };
      getBook();
   }, [id]);

   if (loading) {
      return (
         <div className='flex justify-center items-center min-h-screen'>
            <Spin size='large' />
         </div>
      );
   }

   if (!book) {
      return (
         <div className='flex justify-center items-center min-h-screen'>
            <p className='text-gray-500'>Book not found</p>
         </div>
      );
   }

   if (isReading) {
      return <ReadingComponent fileUrl={book?.file_url} />;
   }

   return (
      <div className='max-w-6xl mx-auto p-6'>
         <div className='grid md:grid-cols-2 gap-8'>
            {/* Left Column - Image */}
            <div className='flex flex-col items-center gap-y-4'>
               <img
                  src={book?.cover_image_url || '/default-book-cover.jpg'}
                  alt={book?.title || 'Book Cover'}
                  className='rounded-lg shadow-lg max-w-[300px] w-full object-cover'
               />
               <div className='space-y-2'>
                  <Button
                     onClick={() => setIsReading(true)}
                     type='primary'
                     size='large'
                     icon={<ReadOutlined />}
                  >
                     Read Now
                  </Button>
                  <Button size='large' icon={<BookOutlined />}>
                     Add to Library
                  </Button>
               </div>
            </div>

            {/* Right Column - Info */}
            <div className='space-y-6'>
               <div>
                  <h1 className='text-3xl font-bold mb-2'>{book.title}</h1>
                  <p className='text-xl text-gray-600'>by {book.author}</p>
               </div>

               <div className='space-y-4'>
                  <div>
                     <h2 className='text-lg font-semibold mb-2'>About this book</h2>
                     <p className='text-gray-600 leading-relaxed'>
                        {book?.description || 'No description available.'}
                     </p>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                     {book?.publication_year && (
                        <div>
                           <h3 className='font-medium text-gray-700'>Published</h3>
                           <p>{book?.publication_year}</p>
                        </div>
                     )}
                     {book.language && (
                        <div>
                           <h3 className='font-medium text-gray-700'>Language</h3>
                           <p>{book?.language}</p>
                        </div>
                     )}
                     {book.source && (
                        <div>
                           <h3 className='font-medium text-gray-700'>Source</h3>
                           <p className='capitalize'>{book?.source}</p>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
