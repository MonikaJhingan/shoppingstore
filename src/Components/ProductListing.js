import { React, useEffect } from 'react';
import axios from 'axios';
import { SearchFilter } from './SearchFilter.js';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import { SearchByCategory } from './SearchByCategory.js';

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('error', err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  //  console.log("Product:" ,products);

  return (
    <>
      <SearchByCategory />

      <div className=' grid-container mx-autoshadow-lg mb-4 grid gap-y-4 gap-x-6 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-6 group relative shadow-lgrounded-md'>
        <h1 className='text-3xl text-bold'>All Products</h1>
        <ProductComponent />
      </div>
    </>
  );
}

export default ProductListing;
