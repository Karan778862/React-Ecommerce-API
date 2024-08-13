import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'

export const productContext = createContext()

const Context = (props) => {

    const [products, setproducts] = useState( null);

    const getproducts = async ()=> {
        try{
            const {data} = await axios("/products");
            setproducts(data);
        }catch(erroe){
            console.log(erroe)
        }
    }

    useEffect(()=>{
        getproducts();
    },[])


    console.log(products)
  return <productContext.Provider value={[products, setproducts]}>
    {props.children}
  </productContext.Provider>
}

export default Context
