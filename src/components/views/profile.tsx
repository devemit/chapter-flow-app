import { useAuth } from '../../supabase/providers/AuthProvider';

export const Profile = () => {
   const { session } = useAuth();

   if (!session) {
      return (
         <div className='flex flex-col items-center justify-center p-4'>
            <p className='text-lg'>Please sign in to view your profile</p>
         </div>
      );
   }

   return (
      <div className='flex flex-col items-center justify-center p-4'>
         <div className='space-y-4 w-full max-w-2xl'>
            <div className='flex items-center gap-4 p-4 bg-white rounded-lg shadow'></div>

            <div className='mt-8'>
               <h2 className='text-xl font-semibold mb-4'>Your Books</h2>
            </div>
         </div>
      </div>
   );
};
