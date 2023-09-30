import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Headroom from "react-headroom";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className='h-screen'>
            <Headroom>
                <Header />
            </Headroom>
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/shop' element={<Products />} />
                <Route path='/categories' element={<Products />} />
                <Route path='/contact' element={<Products />} />
            </Routes>
        </div>
    );
};

export default App;
