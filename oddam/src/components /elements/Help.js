import React from "react";
import {useState} from "react";
import Decoration from "../../assets/Decoration.svg"


export default function Help(){

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
        console.log("elo");
    }

    return(
        <>
            <div className="container__help">
                <span>Komu Pomagamy?</span>
                <img src={Decoration} alt="decoration"/>
                    <div className="container__help__buttons">
                        <button onClick={handleClick} className="help__button button__1">Fundacjom</button>
                        <button className="help__button button__2">Organizacjom pozarządowym</button>
                        <button className="help__button button__3">Lokalnym zbiórkom</button>
                    </div>
            </div>
            <div className="container__help__carusel__1">
                    <span style={{
                        visibility: setShow ? '' : 'hidden',
                    }}>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </span>
            </div>
            <div className="container__help__carusel__2">
                    <span>
                        chuj i dupa jebac
                    </span>
            </div>
            <div className="container__help__carusel__3">
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </span>
            </div>
        </>
    )
}