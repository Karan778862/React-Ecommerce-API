import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [products, setproducts] = useContext(productContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const addproducthandle = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("each and avery input must have atleast 4 charavters");
      return ;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    // toast.success("new product added")
  };

  console.log(products)
  return (
    <form
      onSubmit={addproducthandle}
      className="p-[5%] flex flex-col items-center w-screen h-screen gap-5"
    >
      <h1 className="text-3xl mb-3 ">Add New Product</h1>
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-slate-200 rounded p-3 w-1/2"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <input
        type="url"
        placeholder="image url"
        className="text-2xl bg-slate-200 rounded p-3 w-1/2"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <div className="w-1/2 flex justify-between" rows="10">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-slate-200 rounded p-3 w-[45%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-slate-200 rounded p-3 w-[45%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        placeholder="enter products description here"
        className="text-2xl bg-slate-200 rounded p-3 w-1/2 mb-3"
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-3 border rounded border-blue-400 text-blue-600">
          Add new Product
        </button>
      </div>
    </form>
  );
};

export default Create;
