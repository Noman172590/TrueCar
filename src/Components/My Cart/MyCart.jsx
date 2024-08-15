/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import ProductCart from "./ProductCard/ProductCart";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyCart = () => {
  
  const { user } = useContext(AuthContext);
  const cartUser = user.email;
  const [products,setProducts] =useState([]);
 useEffect(()=>{
  fetch(`https://server-site-taupe.vercel.app/mycart/${cartUser}`)
  .then(response => response.json())
 .then(data => setProducts(data))
 },[])

 


  return (
    
    <div className="max-w-7xl p-3 mx-auto mb-10">
      <h3 className="text-5xl font-extrabold text-center mb-10 ">My Cart</h3>
      {
        products.length === 0 ? <div className="flex justify-center items-center "><img className="h-64 rounded-2xl  lg:w-96" src="https://i.ibb.co/yXM8g9W/24dc1c97-29b0-4c0a-a6bc-895fb5977fc1.jpg" alt="" /></div>
        : 
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 lg:gap-16">
        {
            products.map((product) => <ProductCart product={product}
            products={products}
            setProducts={setProducts}
            ></ProductCart>)
        }
      </div>
      }
    </div>
  );
};

export default MyCart;
