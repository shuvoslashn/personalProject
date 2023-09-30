import { createContext, useState } from "react";

export const ProductContext = createContext(null);
export const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState(0);
    return (
        <ProductContext.Provider value={{ cart, setCart }}>
            {children}
        </ProductContext.Provider>
    );
};
