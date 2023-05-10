import React from 'react';
import img1 from '../Assets/ajio.png';
import img2 from '../Assets/boat.png';
import img3 from '../Assets/flipkart.png';
import img4 from '../Assets/Giva.png';
import img5 from '../Assets/licious.png';
import img6 from '../Assets/myntra.png';
import img7 from '../Assets/pizza-hut.png';
import img8 from '../Assets/udemy.png';
import img9 from '../Assets/wow.png';
// 

function CardGrid() {
  return (
    <div className='bg-white'>
      <div className='Featueed Products'>Feature</div>
      <div className='mb-2 grid gap-y-5 gap-x-6 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8 group relative shadow rounded-md'>
        <div>
        <a href="https://www.ajio.com/"> <img src={img1} alt='logo'/></a>
        </div> 
        <div>
        <a href="https://www.boat.com/"> <img src={img2} alt='logo'/></a>
        </div>
        <div>
        <a href="https://www.flipkart.com/"> <img src={img3} alt='logo'/></a>
        </div>
        <div>
        <a href="https://www.giva.com/"> <img src={img4} alt='logo'/></a>
        </div>
        <div>
        <a href="https://www.licious.com/"> <img src={img5} alt='logo'/></a>
        </div>
        <div>
        <a href="https://www.myntra.com/"> <img src={img6} alt='logo'/></a>
        </div>
        <div>
        <a href="https://www.pizzahut.com/"> <img src={img7} alt='logo'/></a>
        </div>
        <div>
        <a href="https://www.udemy.com/"> <img src={img8} alt='logo'/></a>
        </div>
        <div>
        <a href="https://www.wow.com/"> <img src={img9} alt='logo'/></a>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
