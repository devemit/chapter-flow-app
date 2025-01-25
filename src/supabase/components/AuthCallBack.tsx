import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

export const AuthCallback = () => {
   const navigate = useNavigate();

   const createUserProfile = async (userId: string, email: string, avatarUrl?: string) => {
      try {
         const { data: existingUser } = await supabase
            .from('users')
            .select()
            .eq('id', userId)
            .single();
         console.log(existingUser);
         if (!existingUser) {
            const { error } = await supabase.from('users').insert([
               {
                  id: userId,
                  email,
                  avatar_url: avatarUrl,
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString(),
               },
            ]);

            if (error) throw error;
         }
      } catch (error) {
         console.error('Error creating user profile:', error);
      }
   };

   useEffect(() => {
      supabase.auth.onAuthStateChange(async (event, session) => {
         if (event === 'SIGNED_IN' && session) {
            await createUserProfile(
               session.user.id,
               session.user.email!,
               session.user.user_metadata.avatar_url
            );
            navigate('/');
         }
      });
   }, [navigate]);

   return <div>Loading...</div>;
};
