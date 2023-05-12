import React from 'react';
import CardGrid from '../Components/CardGrid';
import Navbar from '../Components/Navbar';
import ProductListing from '../Components/ProductListing';

export const Home=()=>{
  return (
   <>
   <Navbar />
   <CardGrid/>
      <ProductListing/>
      </>
  )
}

export default Home