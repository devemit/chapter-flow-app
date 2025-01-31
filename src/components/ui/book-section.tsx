interface BookSectionProps {
   title: string;
   children: React.ReactNode;
}

export const BookSection = ({ title, children }: BookSectionProps) => {
   return (
      <div>
         <h2 className='text-xl font-semibold mb-4'>{title}</h2>
         {children}
      </div>
   );
};
