import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../context/ProductContext";
import Loader from "./Loader";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const pContext = useContext(ProductContext);

    useEffect(() => {
        async function mydata() {
            setLoader(true);
            const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
            const data = await res.json();
            setProducts(data);
            data ? setLoader(false) : setLoader(true);
        }
        mydata();
    }, []);

    return (
        <div>
            <div className='mx-8 bg-zinc-800 rounded-3xl mb-8'>
                <div className='container py-12 text-center'>
                    <h3 className='text-xl font-bold text-amber-400 pb-4'>
                        Welcome to
                    </h3>
                    <h2 className='text-5xl font-bold'>Unique Products</h2>
                </div>
            </div>
            <div className='container'>
                {loader ? (
                    <Loader />
                ) : (
                    <div className='grid grid-cols-4 gap-8'>
                        {" "}
                        {products.map((element, index) => {
                            return (
                                <div
                                    className='bg-zinc-700 p-2 rounded-3xl'
                                    key={index}
                                >
                                    <img
                                        src={element.images[0]}
                                        alt=''
                                        className='rounded-2xl'
                                    />
                                    <h1>{element.title}</h1>
                                    <h3>Price: {element.price} Taka</h3>
                                    <button
                                        onClick={() =>
                                            pContext.setCart(pContext.cart + 1)
                                        }
                                        className='focus:bg-opacity-90 px-4 py-2 rounded-full bg-amber-500 text-black'
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
