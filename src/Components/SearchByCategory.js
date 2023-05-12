import React, {useEffect,useState} from 'react'

export const SearchByCategory=() =>{
   const [data,setData]=useState([]);
   const[filterVal,setfilterVal]=useState('');
   const[searchApiData,setsearchApiData]=useState([])
   useEffect(() =>{
      const fetchData=() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
         setData(json)
         setsearchApiData(json);
        })
   }
   fetchData();
},[]);
const handleFilter=(e)=>{
   if(e.target.value===''){
   setData(searchApiData)
   }
   else{
      const filterResult=searchApiData.filter(item=>item.category.toLowerCase().includes(e.target.value.toLowerCase())||item.description.toLowerCase().includes(e.target.value.toLowerCase()))
      if(filterResult.length>0){
      setData(filterResult);
      }else{
         setData([{"name":"no data"}])
      }
   }
   setfilterVal(e.target.value);
}

  return (
    <div className="auto-cols-auto py-20 px-10 mt-2 space-x-0.5 space-y-0.5 mb-5 grid-container mb-4 grid gap-y-2 gap-x-5 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 xl:gap-x-3 group relative shadow-lg rounded-md">
    <div className="dropdown justify-center bg-grey">
   
      <select className="outline-transparent border-solid border-4 rounded-md border-sky-500 w-50 h-45 rounded-mg btn btn-primary dropdown-toggle data-mdb-toggle-dropdown aria-expanded-false  "type='search' placeholder='Search' value={filterVal} onInput={(e)=>handleFilter(e)}>
         
            <option value="electronics">electronics</option>
            <option value="jewelery">jewellery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>

          </select>
    </div>
    {data.map(item=>{
      return(

         <div className='py-3 px-3 '>
        <div className='ui link cards flex'>
          <div className='space-y-0.5 hover:bg-slate-900 rounded overflow-hidden shadow-lg justify-items-center'>
            <div className='card p-2 w-30 bg-white rounded-md'>
              <div className='image o-flag--small my-2 h-52 w-full object-contain rounded-sm '>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='content text-center my-2 text-sm overflow-hidden'>
                <div className='header font-bold'>{item.title}</div>
                <div className='meta price font-bold text-lg my-2 italic'>{item.price}</div>
                <div className='meta text-slate-500'>{item.category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    })}
    </div>
    )
    }
      
  


