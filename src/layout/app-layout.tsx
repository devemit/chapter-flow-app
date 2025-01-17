export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className='flex justify-center  min-h-screen'>
         <div className='max-w-[900px] w-full'>{children}</div>
      </div>
   );
};
