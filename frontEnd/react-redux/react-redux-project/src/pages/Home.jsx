import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const Home = () => {
    const [rating, setRating] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products`);
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, []);

    return (
        <div className='w-[90vw] mx-auto py-8'>
            <div className='flex flex-wrap gap-8'>
                {products.map((p) => {
                    return (
                        <div className='basis-60 flex-grow p-8 shadow-2xl flex justify-between flex-col' key={p.id}>
                            <img src={p.image} alt={p.title} className='h-60' />
                            <div className='pt-8'>
                                <h4 className='font-xl font-medium'>{p.title.slice(0, 15)} item</h4>
                                <div className='flex justify-between items-center py-2'>
                                    <p>
                                        Price: <b className='font-bold'>${p.price}</b>
                                    </p>
                                    <p>
                                        Rating: <b className='font-bold'>{p.rating.rate}</b>
                                    </p>
                                </div>
                                <a
                                    href='/'
                                    className='py-2 mt-4 border border-gray-600 hover:bg-gray-800 hover:border-gray-800 duration-300 transition-all hover:text-white block text-center'
                                >
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
