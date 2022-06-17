import React, { useState }from "react";
import Decoration from "../../assets/Decoration.svg"


export default function Help(){

    const [style1, setStyle1] = useState("container__help__carusel__1__hidden");
    const changeStyle = () => {
        console.log("clicked");
        setStyle1("container__help__carusel__1");
        setStyle2("container__help__carusel__2__hidden");
        setStyle3("container__help__carusel__3__hidden");
    }

    const [style2, setStyle2] = useState("container__help__carusel__2__hidden");
    const changeStyle2 = () => {
        console.log("clicked");
        setStyle2("container__help__carusel__2");
        setStyle1("container__help__carusel__1__hidden");
        setStyle3("container__help__carusel__3__hidden");
    }

    const [style3, setStyle3] = useState("container__help__carusel__3__hidden");
    const changeStyle3 = () => {
        console.log("clicked");
        setStyle3("container__help__carusel__3");
        setStyle2("container__help__carusel__2__hidden");
        setStyle1("container__help__carusel__1__hidden");
    }


    return(
        <>
            <div className="container__help">
                <span>Komu Pomagamy?</span>
                <img src={Decoration} alt="decoration"/>
                    <div  className="container__help__buttons">
                        <button  onClick={changeStyle} className="help__button button__1">Fundacjom</button>
                        <button onClick={changeStyle2} className="help__button button__2">Organizacjom pozarządowym</button>
                        <button onClick={changeStyle3} className="help__button button__3">Lokalnym zbiórkom</button>
                    </div>
            </div>
            <div className={style1}>
                    <span>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </span>
            </div>
            <div className={style2}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </span>
            </div>
            <div className={style3}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </span>
            </div>
        </>
    )
}