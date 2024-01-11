import { Link } from "react-router-dom";
import { categories } from "./../../data/categories";

export default function Header() {
    return (
        <header className='py-4'>
            <div className='container flex justify-between items-center'>
                {/* logo here */}
                <h3 className='text-2xl font-bold text-white'>World<span className="text-red-500">News</span></h3>

                {/* menu here */}
                <nav>
                    <ul className='flex gap-8'>
                        {categories.map((category) => {
                            return (
                                <li key={category} className="text-white/70 hover:text-red-500 duration-300 capitalize">
                                    <Link to=''>{category}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
