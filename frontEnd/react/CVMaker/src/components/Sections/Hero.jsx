import { useEffect, useState } from "react";

export default function Hero() {
    const URL = import.meta.env.VITE_BASEURL;
    const KEY = import.meta.env.VITE_APIKEY;
    const apiUrl = `${URL}?category=business&apiKey=${KEY}`;
    const myapikey = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=fab35550e15a4fb4afdd2e37f0c98346`;

    const [data, setData] = useState([]);

    useEffect(() => {
        async function ReqFunc() {
            const res = await fetch(myapikey);
            const getData = await res.json();
            await setData(getData.articles);
            console.log(data);
        }
        ReqFunc();
    }, []);

    return (
        <section id='hero' className='py-8'>
            <div className='container grid grid-cols-3 gap-4'>
                {data.map((post) => {
                    return (
                        <div key={post.title} className="p-4 bg-white/5 rounded-3xl">
                            <img
                                src={post.urlToImage}
                                alt={post.title}
                                className=' rounded-2xl h-[300px] w-full object-cover block'
                            />
                            <div className='p-4'>
                                <p>Author: {post.author}</p>
                                <h2 className='text-2xl font-semibold text-white my-2'>
                                    {post.title.substring(0, 50)}
                                    {post.title.length > 50 ? "..." : ""}
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
