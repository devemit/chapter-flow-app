export const AboutUs = () => {
   return (
      <div className='max-w-[800px] mx-auto p-6 text-gray-800'>
         <h1 className='text-3xl font-bold text-blue-600 mb-4 text-left'>📚 About Us</h1>
         <p className='text-lg leading-7 mb-4'>
            Welcome to <span className='font-semibold text-blue-600'>Chapter Flow</span>, your cozy
            corner for everything books! 🌟 Whether you're a passionate reader, an eager explorer of
            new stories, or someone who enjoys flipping through pages of inspiration, we’ve got you
            covered.
         </p>
         <p className='text-lg leading-7 mb-4'>
            Our mission is simple: to bring books closer to you, one chapter at a time. From
            timeless classics to the latest releases, we aim to create a seamless and delightful
            reading experience tailored just for you. ✨
         </p>
         <p className='text-lg leading-7 mb-4'>📖 Here’s what makes us special:</p>
         <ul className='list-disc list-inside space-y-2 pl-2'>
            <li>
               🌍 <span className='font-semibold'>Discover Globally:</span> Dive into a world of
               books from diverse genres, cultures, and languages.
            </li>
            <li>
               🔍 <span className='font-semibold'>Search Seamlessly:</span> Find your next favorite
               book with ease, thanks to our powerful search tools.
            </li>
            <li>
               ❤️ <span className='font-semibold'>Connect Personally:</span> Save and track your
               favorite reads, making every journey unforgettable.
            </li>
         </ul>
         <p className='text-lg leading-7 mt-4'>
            So, grab a cup of coffee ☕, settle into your favorite reading spot 🛋️, and let’s start
            exploring the chapters that await. We're thrilled to have you here! 🎉
         </p>
         <div className='mt-6 mb-10 text-center'>
            <span className='text-xl font-semibold text-gray-600'>
               📬 Have feedback or questions? Drop us a line anytime!
            </span>
         </div>
         <div className='mt-4 text-center'>
            <a
               href='https://www.instagram.com/chapterflow_app'
               target='_blank'
               rel='noopener noreferrer'
               className='text-blue-500 hover:underline text-lg font-medium'
            >
               Follow us on Instagram! 🌟
            </a>
         </div>
      </div>
   );
};
