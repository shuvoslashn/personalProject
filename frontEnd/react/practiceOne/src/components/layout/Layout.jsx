import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = (cls) => {
    return (
        <>
            <Header />
            <main className={cls}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
