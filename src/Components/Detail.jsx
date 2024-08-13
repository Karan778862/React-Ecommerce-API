import React, { useEffect, useState,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loding from "./Loding";
import { productContext } from "../utils/Context";

const Detail = () => {
  // const [products] = useContext(productContext);
  const [product, setproduct] = useState(null);
  const {id} =  useParams();
    const getsingleproduct = async ()=>{
      try{
        const {data} =await axios.get(`/products/${id}`);
         setproduct(data);
      }catch(error){
        console.log(error)
      }
    };

 useEffect(()=>{
  // if(!product){
  //   setproduct(products.filter(p => p.id === id[0]))
  // }
  getsingleproduct();
 },[])

 

  return ( product ?
    <div className="w-[70%] flex  items-center  h-full  m-auto p-[10%]">
      <img
        className="h-[80%]  object-contain"
        src={product.image}
        alt=""
      />
      <div className=" p-10">
        <h1 className="text-3xl font-semibold">
          {product.title}
        </h1>
        <h3 className="text-zinc-400">{product.category}</h3>
        <h2 className="text-red-300 mb-3">${product.price}</h2>
        <p className="mb-5">
           {product.description}
          
        </p>
        <Link className="px-3 py-1 bg-sky-400 text-white mr-5   rounded">Edit</Link>
        <Link className="px-3 py-1 bg-red-400 text-white mr-5  rounded">Delete</Link>
      </div>
    </div> :<Loding/>
  );
};

export default Detail;
