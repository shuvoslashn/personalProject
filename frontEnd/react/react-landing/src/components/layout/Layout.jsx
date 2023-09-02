import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='min-h-[90vh] flex justify-center items-center w-full'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
