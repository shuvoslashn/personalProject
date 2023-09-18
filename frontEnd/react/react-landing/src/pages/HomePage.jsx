import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Feature from "../components/sections/Feature";
import SlidingCompanies from "../components/sections/SlidingCompanies";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import Map from "../components/sections/Map";

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <Feature />
            <SlidingCompanies />
            <Services />
            <Contact />
            <Map />
        </Layout>
    );
};

export default HomePage;
