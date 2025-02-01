import { useState } from 'react';
import { ReactReader } from 'react-reader';

const ReadingComponent = ({ fileUrl }: { fileUrl: string }) => {
   const [location, setLocation] = useState(null);

   return (
      <div className='h-screen relative mb-10'>
         <div className='h-full'>
            <ReactReader
               url={fileUrl}
               location={location}
               locationChanged={(loc: any) => setLocation(loc)}
               epubOptions={{
                  flow: 'scrolled',
               }}
            />
         </div>
      </div>
   );
};

export default ReadingComponent;
