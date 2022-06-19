import React from "react";
import Navigation from "./elements/Navigation";
import ThreeColumns from "./elements/Three-columns";
import SimpleSteps from "./elements/Simple-Steps";
import About from "./elements/About";
import Help from "./elements/Help";
import Footer from "./elements/footer";

export default function Home(){
    return(
        <>
            <Navigation/>
            <ThreeColumns/>
            <SimpleSteps/>
            <About/>
            <Help/>
            <Footer/>
        </>
    )
}