import { createContext, useContext, ReactNode } from 'react';
import { Session } from '@supabase/supabase-js';
import { useSupabaseSession } from '../hooks/useSupabaseSession';

interface AuthContextType {
   session: Session | null;
   loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ session: null, loading: true });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const { session, loading } = useSupabaseSession();

   return <AuthContext.Provider value={{ session, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
