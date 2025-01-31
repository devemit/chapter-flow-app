import { SubTitle } from '../ui/sub-title';
import { AiInput } from '../ui/ai-input';

export const Discover = () => {
   return (
      <section>
         <SubTitle>Recommended by Discover AI 🧠</SubTitle>
         <h2 className='text-gray-800'>
            Discover AI is an AI-powered book recommendation system that uses your reading history
            and preferences to suggest books you might like.
         </h2>
         <AiInput className='my-4' />
         <button
            type='button'
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
         >
            Generate
         </button>
      </section>
   );
};
