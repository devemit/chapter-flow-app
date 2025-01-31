interface BookSectionProps {
   title: string;
   action?: React.ReactNode;
   children: React.ReactNode;
}

export const BookSection = ({ title, children, action }: BookSectionProps) => {
   return (
      <div>
         <h2 className='text-md font-semibold mb-4 text-gray-800'>{title}</h2>
         {children}
         {action}
      </div>
   );
};
