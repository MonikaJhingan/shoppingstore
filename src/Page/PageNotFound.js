import React from 'react';
// import {Link} from 'react-router-dom'

import img2 from '../Assets/boat.png';
import img3 from '../Assets/flipkart.png';
import img1 from '../Assets/beardo.png';
import img6 from '../Assets/myntra.png';
import img5 from '../Assets/nykaa.png';
import img9 from '../Assets/wow.png';
import img10 from '../Assets/plug_man_deskop.png';

function PageNotFound() {
  return (
    <div className='container'>
      <h1 className='hd-2 ml-36 py-5 px-10 text-center text-red-500 decoration-8 text-9xl'>
        Oops!!
      </h1>
      <h3 className='text-center text-black-800 ml-36 text-3xl '>
        Something went wrong!!!
      </h3>
      <p className='ml-36 text-1xl'>
        Click below to browse similar deals from top shopping sites
      </p>
      <div className='logos'>
        <div className='bg-white'>
          <div className='mt-2 ml-60 px-5 py-10 rounded overflow-hidden align-center shadow-bg justify-items-center h-full w-50 mb-2 grid gap-y-2 gap-x-1 grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:gap-x-1 group relative rounded-lg'>
            <div className='h-20 w-28 shadow-2xl rounded-2xl object-center place-content-center'>
              <a href='https://www.nykaa.com/'>
                {' '}
                <img src={img5} alt='logo' />
              </a>
            </div>
            <div className='h-20 w-28 shadow-2xl rounded-2xl'>
              <a href='https://www.flipkart.com/'>
                {' '}
                <img src={img3} alt='logo' />
              </a>
            </div>
            <div className='h-20 w-28 shadow-2xl rounded-2xl'>
              <a href='https://www.boat.com/'>
                {' '}
                <img src={img2} alt='logo' />
              </a>
            </div>

            <div className='h-20 w-28 shadow-2xl rounded-2xl'>
              <a href='https://www.myntra.com/'>
                {' '}
                <img src={img6} alt='logo' />
              </a>
            </div>
            <div className='h-20 w-28 shadow-2xl rounded-2xl'>
              <a href='https://beardo.in/'>
                {' '}
                <img src={img1} alt='logo' />
              </a>
            </div>

            <div className='h-20 w-28 shadow-2xl rounded-2xl'>
              <a href='https://www.wow.com/'>
                {' '}
                <img src={img9} alt='logo' />
              </a>
            </div>
          </div>
          <img className='w-50 ml-20 px-10' src={img10} alt='logo' />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
