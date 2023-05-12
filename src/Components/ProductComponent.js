import React from 'react';
import { useSelector } from 'react-redux/es/exports';

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <>
      <div className='py-3 px-3' key={id}>
        <div className='ui link cards flex'>
          <div className=' hover:bg-slate-900 rounded overflow-hidden shadow-lg justify-items-center'>
            <div className='card p-2 w-35 bg-white rounded-md'>
              <div className='image my-4 h-51 w-full object-contain'>
                <img src={image} alt={title} />
              </div>
              <div className='content text-center my-2 text-sm'>
                <div className='header font-bold'>{title}</div>
                <div className='meta price font-bold text-lg my-2 italic'>{price}</div>
                <div className='meta text-slate-500'>{category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  
  });

  // const {id, title}=products[0];

  return <>
  {renderList}
  
  </>;
}

export default ProductComponent;
