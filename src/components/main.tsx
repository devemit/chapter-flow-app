export const Main = ({ children }: { children: React.ReactNode }) => {
   return (
      <main className='flex-grow md:ml-[25%] p-4'>
         <div className='h-[100%]'>{children}</div>
      </main>
   );
};
