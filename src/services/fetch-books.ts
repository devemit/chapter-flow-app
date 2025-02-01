import { supabase } from '../supabase/supabase';

export const fetchBooks = async () => {
   const {
      data: { user },
   } = await supabase.auth.getUser();

   if (!user) {
      console.error('No user logged in');
      return;
   }

   const { data, error } = await supabase.from('books').select('*').eq('user_id', user.id);

   if (error) {
      console.error('Error fetching books:', error);
      return;
   }

   return data;
};
