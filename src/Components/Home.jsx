import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loding from "./Loding";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(productContext);
  // console.log(products)
  const {search} = useLocation();
  const category =decodeURIComponent(search.split("=")[1]);

  const [filterproduct,setfilterproduct] = useState(null);
  
  const getproductcategory = async ()=>{
    try{
      const {data }= await axios.get(`/products/category/${category}`);
      setfilterproduct(data);

    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    if(!filterproduct || category == "undefined")setfilterproduct(products)
      if(category != "undefined")getproductcategory();
  },[category, products])


  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] p-5 pt-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filterproduct && filterproduct.map((item, index) => (
          <Link
            key={index}
            to={`/detail/${item.id}`}
            className="mr-3 mb-3 p-3 border shadow-md rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
          >
            <div
              className=" hover:scale-110  mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-400">{item.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loding />
  );
};

export default Home;
