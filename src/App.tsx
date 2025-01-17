const App = () => {
   return (
      <div className='flex justify-center  min-h-screen'>
         {/* Outer Wrapper with max-width */}
         <div className='max-w-[900px] w-full'>
            {/* Navbar */}
            <div className='fixed top-0 left-0 w-full bg-white z-10'>
               <nav className='max-w-[900px] mx-auto px-4 py-3 flex items-center justify-center'>
                  <span className='font-bold text-lg'>here will go the app title</span>
               </nav>
            </div>

            {/* Layout Wrapper */}
            <div className='flex flex-col md:flex-row w-full pt-16'>
               {/* Sidebar */}
               <div className='md:fixed md:top-16 md:h-full md:w-[120px] px-4 py-3 md:flex-shrink-0 fixed bottom-0 w-full bg-white'>
                  <p className='font-medium'>Sidebar Content</p>
               </div>

               {/* Main Content */}
               <main className='flex-grow md:ml-[25%] p-4'>
                  <div className='h-[100%]'>
                     <h1 className='text-xl mb-4'>Scrollable Main Content</h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsa fuga
                        quam dolorem quas, iusto nihil, animi voluptatem amet id a perspiciatis
                        adipisci ea aspernatur praesentium quidem alias illo fugiat facere quos
                        magni perferendis. Distinctio assumenda sit dolor rem quo ea dicta
                        reiciendis nemo adipisci, nobis incidunt commodi est repellat culpa illum
                        modi deserunt suscipit placeat ipsum maxime voluptate, aliquam velit fuga!
                        Reiciendis nobis in ullam! Eius expedita omnis fugit, earum accusantium
                        alias facilis ullam? Veniam tempora nesciunt repellendus, animi at placeat
                        libero adipisci minus sunt sed repudiandae eveniet dolor ducimus odit itaque
                        expedita necessitatibus neque! Laboriosam est fuga sit totam doloremque,
                        esse doloribus deserunt porro architecto magnam similique ullam minus. Nulla
                        laborum a illo, veniam magni quia maiores dolores, aliquid tempore
                        accusantium eum asperiores, iusto facere inventore libero. Fugiat, quia rem?
                        Neque quas blanditiis, provident aspernatur adipisci nihil iure rem
                        doloribus ad temporibus rerum nesciunt. Voluptatibus in animi, fugit quae
                        excepturi officiis provident nobis, sed neque eveniet molestiae doloribus
                        laudantium aliquid ea consequuntur iusto velit commodi odio beatae et
                        asperiores quidem corporis blanditiis natus. Hic deleniti nam, corrupti
                        voluptates at provident natus est in nesciunt amet porro repellat explicabo
                        nobis nisi id expedita optio aut non blanditiis. Maxime dolore, deleniti
                        veritatis magnam, quam aut libero eaque harum aspernatur blanditiis
                        perspiciatis hic ut tempora officiis minima possimus sunt rem voluptatum
                        quaerat placeat repellat earum. Optio quasi, voluptatum enim sit velit
                        deleniti! Similique distinctio id in. Iste consequuntur laborum id explicabo
                        nisi excepturi ut animi, deleniti debitis rem quis repellat vero, illum
                        earum dolore repellendus! Quam illo aperiam necessitatibus magni,
                        repellendus perspiciatis dolor excepturi, quia omnis veniam recusandae
                        cupiditate fugit earum quas, reiciendis ipsum assumenda! Cumque, nisi soluta
                        eum ea numquam, consequatur modi nam veritatis accusamus odit cupiditate
                        harum praesentium dicta fuga necessitatibus iste ipsa mollitia ipsam
                        assumenda pariatur tenetur quae dolorem illum? Ab nesciunt corrupti
                        perspiciatis eaque ex sint minus, libero alias explicabo esse nostrum ad
                        similique deleniti? Nemo voluptatem, dignissimos quas error excepturi autem
                        voluptatum in ad, nobis, ex accusamus ea doloribus numquam minus architecto
                        eum amet eaque sapiente assumenda voluptas id placeat rem ratione
                        temporibus? Impedit repudiandae perferendis consectetur illum minus adipisci
                        unde modi dicta architecto repellendus mollitia, maiores, veritatis
                        consequatur suscipit iure. Possimus quas sit error, tempora inventore
                        dolores repellendus, sapiente, quis recusandae iste accusamus maiores
                        consequatur deleniti tenetur modi quo? Illo, magni modi? Labore saepe
                        expedita ipsa magni id voluptatibus minus! Laborum illum beatae nesciunt
                        vel, ducimus libero eius dolorem, quia fuga quos veritatis dicta eligendi,
                        magnam recusandae obcaecati iure odit enim! Adipisci doloribus harum tenetur
                        voluptates corrupti praesentium. Consequuntur necessitatibus soluta dolore
                        possimus provident autem quos consectetur accusantium nulla, omnis incidunt
                        beatae, quisquam error placeat nemo. Maiores, commodi mollitia, inventore
                        nisi minus porro ullam placeat eos nulla quod necessitatibus aperiam
                        repellendus esse perspiciatis deleniti vel. Molestias, atque? Dolores
                        architecto quisquam libero repellendus temporibus cumque? Voluptatibus
                        quidem natus adipisci animi sunt quibusdam inventore vel. Maxime, explicabo.
                        Quisquam delectus velit, commodi aspernatur qui magnam sunt eius earum error
                        quis cum, doloremque quibusdam, quae impedit. In molestiae sed aut magnam
                        voluptate velit vitae non tenetur id dolorum aliquam quidem quae dolore
                        delectus voluptatum esse, ratione officiis libero nihil. Repellat quasi est
                        reprehenderit beatae aut similique aperiam et facere provident rerum placeat
                        sed consectetur reiciendis ullam veniam natus voluptates necessitatibus
                        tenetur blanditiis, cum illum consequuntur totam. Dolorem voluptates soluta,
                     </p>
                  </div>
               </main>
            </div>
         </div>
      </div>
   );
};

export default App;
