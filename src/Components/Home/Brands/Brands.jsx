/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [brandName,setBrandName] = useState([])
    useEffect(() =>{
        fetch('/brands.json')
      .then(res => res.json())
      .then(data => setBrandName(data))
    },[])
    return (
        <div className=" max-w-7xl lg:p-5 mx-auto p-3">
            <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Shop by your favorite brands</h2>
   
        </div>

            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 justify-center items-center gap-7 gap-y-20 mb-10">
            {
                brandName.map(brand => {
                    return (
                        <div>
                               
                           <Link to={`/home/${brand.name}`}>
                           
                           {/* <div className="hover:shadow-black shadow-gray-500 rounded-xl shadow-2xl w-full h-[150px] flex justify-center card-shadow  items-center gap-5">
                           
                           <img className="w-10 h-10 " src={brand.image} alt={brand.name}/>
                           <h1 className="font-semibold text-xl">{brand.name}</h1>
                       </div> */}


<div className="card  bg-base-100  h-64 shadow-xl image-full">
  <figure><img className="w-full h-full" src={brand.image} alt="Shoes" /></figure>
  <div className="card-body justify-end items-end">
    <div className="card-actions ">
      <button className="btn btn-outline btn-info normal-case text-3xl font-bold">{brand.name}</button>
    </div>
  </div>
</div>
                       
                       </Link>



                        </div>
                       
                    
                    )
                })
            }
            
        </div>
        </div>
    );
};

export default Brands;
