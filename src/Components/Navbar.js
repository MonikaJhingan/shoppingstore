import React, {useState} from 'react';
import img1 from '../Assets/logo.png';
import { SearchFilter } from './SearchFilter';
export default function Navbar() {
  const [isPreviewShown, setPreviewShown] = useState(false);

  const Form =()=>{
        setPreviewShown(true); // Here we change state
    }

  return (
    <div className='navigate'>
      <div className='shadow-lg bg-white mx-auto px-1 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-18'>
          <div className='flex items-center justify-between sm:items-stretch sm:justify-start w-5'>
            <div className='flex-shrink-0 flex items-center p-1'>
              <img src={img1} alt='logo' className='h-40 w-105 px-20' />
            </div>
          </div>

          <div className='flex items-center w-3/4'>
            <div className='w-full sm:w-1/2'>
              <button
                type='submit'
                onClick={Form}
                className='text-sm font-medium px-2 py-2  text-white rounded-md w-full shadow-lg hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
              >

                <div className='flex justify-start items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-gray-400 h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    ></path>
                  </svg>

                  <span className='ml-4 text-gray-400'>Search for Product</span>
                </div>
              </button>
              {isPreviewShown && <SearchFilter/>}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

