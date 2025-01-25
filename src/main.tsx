import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router';
import { AuthProvider } from './supabase/providers/AuthProvider.tsx';

import App from './App.tsx';

import './tailwind.css';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <AuthProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </AuthProvider>
   </StrictMode>
);
