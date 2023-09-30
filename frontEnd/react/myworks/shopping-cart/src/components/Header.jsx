import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
    const pContext = useContext(ProductContext);
    return (
        <header className='py-4 bg-zinc-900/80 backdrop-blur-sm'>
            <div className='container flex justify-between items-center'>
                <h2 className='text-2xl font-black text-white'>
                    my<span className='text-amber-500'>shop</span>
                </h2>
                {/* menu */}
                <nav className='flex gap-8'>
                    <NavLink className='text-amber-300 font-semibold' to={"/"}>
                        Home
                    </NavLink>
                    <NavLink
                        className='hover:text-white duration-200'
                        to={"/shop"}
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        className='hover:text-white duration-200'
                        to={"/categories"}
                    >
                        Categories
                    </NavLink>
                    <NavLink
                        className='hover:text-white duration-200'
                        to={"/contact"}
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* cart */}
                <div className='text-white relative'>
                    <i className='ri-shopping-cart-2-fill text-2xl'></i>
                    <span className='w-6 h-6 flex text-center justify-center items-center bg-amber-500 rounded-full text-[14px] text-black font-semibold absolute -top-2 -right-4'>
                        {pContext.cart}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
