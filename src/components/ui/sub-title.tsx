import { cn } from '../../utils/tw';

export const SubTitle = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return <h2 className={cn('text-md font-semibold mb-4 text-gray-800', className)}>{children}</h2>;
};
