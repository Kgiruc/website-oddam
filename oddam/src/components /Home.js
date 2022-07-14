import Navigation from "./elements/Navigation";
import ThreeColumns from "./elements/Three-columns";
import SimpleSteps from "./elements/Simple-steps";
import About from "./elements/About";
import Help from "./elements/Help";
import Footer from "./elements/Footer";


export default function Home() {
    return (
        <>
            <Navigation/>
            <ThreeColumns/>
            <SimpleSteps/>
            <About/>
            {/*<Help/>*/}
            {/*<Footer/>*/}
        </>
    )
}