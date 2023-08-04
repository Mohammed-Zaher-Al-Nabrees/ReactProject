import React from "react";
import {Blog, FAQ, Facts, Landing, Projects, Services, Startegy, Testimonials} from '../../components/index'
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const Home = () => {
    return (
    <>
        <Landing />
        <HeaderSection  
            title="Our Services" 
            desc="The service we offer is specifically designed to meet your needs"
        />
        <Services />
        <Projects />
        <Startegy />
        <Facts />
        <Testimonials />
        <FAQ />
        <Blog />
    </>
    );
};

export default Home;
