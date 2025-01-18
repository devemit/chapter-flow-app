import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react';

import App from './App.tsx';
import './tailwind.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
   throw new Error('Missing Publishable Key');
}
console.log(PUBLISHABLE_KEY);

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
            <App />
         </ClerkProvider>
      </BrowserRouter>
   </StrictMode>
);
