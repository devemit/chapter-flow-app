import { Input } from 'antd';
import { cn } from '../../utils/tw';

export const AiInput = ({ className }: { className?: string }) => {
   return (
      <div className={cn('w-full max-w-[900px]', className)}>
         <Input placeholder='I want to learn about the entire history of the world' />
      </div>
   );
};
