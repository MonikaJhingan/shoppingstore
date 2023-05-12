import React, { useEffect, useState } from 'react';

export const SearchFilter = () => {
  const [data, setData] = useState([]);
  const [filterVal, setfilterVal] = useState('');
  const [searchApiData, setsearchApiData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setsearchApiData(json);
        });
    };
    fetchData();
  }, []);
  const handleFilter = (e) => {
    if (e.target.value === '') {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.description.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ name: 'no data' }]);
      }
    }
    setfilterVal(e.target.value);
  };

  return (
    <div className='ml-8 max-w-md mt-2 bg-gray-200 mb-2 w-full max-w-md bg-white p-1 text-wrap align-middle shadow-xl transition-all opacity-100 scale-100'>
      <div className='p-input icon-right'>
        <input
          className='w-full transform bg-white p-2 text-left align-middle shadow-xl transition-all opacity-100 scale-100'
          type='search'
          placeholder='Search'
          value={filterVal}
          onInput={(e) => handleFilter(e)}
        />
      </div>
      {data.map((item) => {
        return (
          <div className='cursor-pointer hover:shadow-lg flex items-center gap-2 p-2 flex flex-col flex-wrap justify-between py-10 px-5 .table-striped w-100'>
            <div className='ui link cards lg-shaded bg-white'>
              <div className='image-container '>
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-10 width-15'
                />
              </div>
              <div className='text-container overflow-hidden h-12'>
                <div className='title font-size:0.75rem;'>{item.title}</div>
                <div className='description'>{item.description}</div>
                <br></br>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
