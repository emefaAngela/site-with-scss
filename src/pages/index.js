// // Step 1: Import React
// import * as React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'


// // Step 2: Define your component
// const IndexPage = () => {
//   return (
//     <main className=''>
//       <section className='px-8 py-4'>
//       <header className='flex flex-row space-x-4 absolute right-0 px-4'>
//               <div className='pt-2 font-light'>Gmail</div>
//               <div className='pt-2 font-light'>Images</div>
//               <Link to='/signin' className='w-24 h-10 rounded-md bg-blue-500 text-white text-center py-2'>Sign in</Link>
//             </header>
//             <section className='flex flex-col space-y-8 my-36 mx-auto justify-center items-center'>
//               <div>
//                 <StaticImage
//                 src="../images/googlelogo.png"
//                 />
//               </div>
//               <div className='w-1/2 h-16 p-2 rounded-full border border-0.5 border-gray-500 flex flex-row justify-between'>
//                 <div>s</div>
//                 <div className='flex flex-row space-x-4'></div>
//               </div>
//               <div className='flex flex-row space-x-4'>
//                 <div className='w-32 h-8 bg-gray-100 text-center pt-1 rounded-sm text-gray-700'>Google search</div>
//                 <div className='w-36 h-8 bg-gray-100 text-center pt-1 rounded-sm text-gray-700'>I'm Feeling Lucky</div>
//               </div>
//               <div>Google offered in: Hausa Akan Ewe Ga</div>
//             </section>
//       </section>
           
//             <footer className='flex flex-col bg-gray-100'>
//               <div className='px-8 py-4'>Ghana</div>
//               <div className='border w-full h-0.5 border-0.5 bg-gray-400'></div>
//               <div className='px-8 py-2 flex flex-row justify-between'>
//                 <div className='flex flex-row space-x-4'>
//                 <div>About</div>
//                 <div>Advertising</div>
//                 <div>Business</div>
//                 <div>How Search Works</div>
//                 </div>
//                 <div className='flex flex-row space-x-4'>
//                   <div>Privacy</div>
//                   <div>Terms</div>
//                   <div>Settings</div>
//                 </div>
//               </div>
//             </footer>
//     </main>
//   )
// }

// // You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>

// // Step 3: Export your component
// export default IndexPage


// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import '../styles/styles.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main className='main'>
      <section>
        <header className='header'>
          <div className='gmail'>Gmail</div>
          <div className='images'>Images</div>
          {/* <div className='collectionicon'>
          <FontAwesomeIcon icon={faTh} />
          </div> */}
          <Link to='/signin' className='signin'>Sign in</Link>
        </header>
        <section className='content'>
          <div>
            <StaticImage
              src="../images/googlelogo.png"
              alt="Google Logo"
            />
          </div>
          <div className='search-bar'>
            <div> <FontAwesomeIcon icon={faSearch} /></div>
            <div className='icon'>
            
            </div>
          </div>
          <div className='buttons'>
            <div className='google-search'>Google Search</div>
            <div className='lucky'>I'm Feeling Lucky</div>
          </div>
          <div className='languages'>Google offered in:
          <Link to='hausa' className='language-link'>Hausa</Link>
          <Link to='hausa' className='language-link'>Akan</Link>
          <Link to='hausa' className='language-link'>Ewe</Link>
          <Link to='hausa' className='language-link'>Ga</Link>
</div>
        </section>
      </section>
      <footer className='footer'>
        <div className='location'>Ghana</div>
        <div className='divider'></div>
        <div className='links'>
          <div className='left'>
            <div>About</div>
            <div>Advertising</div>
            <div>Business</div>
            <div>How Search Works</div>
          </div>
          <div className='right'>
            <div>Privacy</div>
            <div>Terms</div>
            <div>Settings</div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
