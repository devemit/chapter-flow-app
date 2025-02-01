import { supabase } from '../supabase/supabase';

export const fetchBook = async (id: string) => {
   const { data } = await supabase.from('books').select('*').eq('id', id).single();
   return data;
};
