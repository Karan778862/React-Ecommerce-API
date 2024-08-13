import React from "react";
import { productContext } from "../utils/Context";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const {search, pathname} = useLocation();

  // console.log(search,pathname)
  const [products] = useContext(productContext);

  const distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  const distinct_categorys = [...new Set(distinct_category)];

  return (
    <nav className="w-[15%] h-full bg-slate-300 flex flex-col items-center pt-5">
      <a
        className="px-5 py-3 border rounded border-blue-400 text-blue-600"
        href="/create"
      >
        Add new Product
      </a>
      <hr className="my-3 w-[80%] h-[2px] bg-slate-100" />
      {(pathname != "/" || search.length > 0) && <Link
        to="/"
        className=" px-16 py-3 border rounded border-blue-400 text-blue-600"
      >
        Home
      </Link>}
      
      <h1 className=" text-2xl font-semibold  w-[80%] mb-3">category Filter</h1>

      <div className=" w-[80%]">
        {distinct_categorys.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className=" flex items-center mb-3 uppercase "
          >
            <span className=" w-[15px] h-[15px] mr-2 inline-block bg-blue-400 rounded-full"></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
