import React from "react";
import Home from "./Components/Home";
import { Routes,Route } from "react-router-dom";
import Detail from "./Components/Detail";
import Create from "./Components/create";


const App = () => {
  return (
    <div className="w-full h-screen flex">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>

      
    </div>
  );
};

export default App;
