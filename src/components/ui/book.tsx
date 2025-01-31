import { Card } from 'antd';
import { cn } from '../../utils/tw';

export const Book = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return <Card className={cn(className, 'cursor-pointer')}>{children}</Card>;
};
