interface BookGridProps {
   children: React.ReactNode;
}

export const BookGrid = ({ children }: BookGridProps) => {
   return <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>{children}</div>;
};
