import React, { useState }from "react";
import Decoration from "../../assets/Decoration.svg"
import Carousel1 from "./carousel-pages/Carousel-1";


export default function Help(){

    const [style1, setStyle1] = useState("container__help__carusel__1");
    const changeStyle = () => {
        console.log("clicked");
        setStyle1("container__help__carusel__1");
        setStyle2("container__help__carusel__2__hidden");
        setStyle3("container__help__carusel__3__hidden");
        setSlide1("carousel__container");
        setSlide6("carousel__container__hidden");
        setSlide4("carousel__container__hidden");
    }

    const [style2, setStyle2] = useState("container__help__carusel__2__hidden");
    const changeStyle2 = () => {
        console.log("clicked");
        setStyle2("container__help__carusel__2");
        setStyle1("container__help__carusel__1__hidden");
        setStyle3("container__help__carusel__3__hidden");
        setSlide1("carousel__container__hidden");
        setSlide2("carousel__container__hidden");
        setSlide3("carousel__container__hidden");
        setSlide6("carousel__container__hidden");
        setSlide5("carousel__container__hidden");
        setSlide4("carousel__container");

    }

    const [style3, setStyle3] = useState("container__help__carusel__3__hidden");
    const changeStyle3 = () => {
        console.log("clicked");
        setStyle3("container__help__carusel__3");
        setStyle2("container__help__carusel__2__hidden");
        setStyle1("container__help__carusel__1__hidden");
        setSlide1("carousel__container__hidden");
        setSlide2("carousel__container__hidden");
        setSlide3("carousel__container__hidden");
        setSlide4("carousel__container__hidden");
        setSlide5("carousel__container__hidden");
        setSlide6("carousel__container");
    }

    const [slide1, setSlide1] = useState("carousel__container");
    const changeSlide = () => {
        console.log("click");
        setSlide1("carousel__container");
        setSlide2("carousel__container__hidden");
        setSlide3("carousel__container__hidden");
        setSlide4("carousel__container__hidden");
        setSlide6("carousel__container__hidden");
    }

    const [slide2, setSlide2] = useState("carousel__container__hidden");
    const changeSlide2 = () => {
        console.log("click2");
        setSlide2("carousel__container");
        setSlide1("carousel__container__hidden");
        setSlide3("carousel__container__hidden");
        setSlide4("carousel__container__hidden");
        setSlide6("carousel__container__hidden");
    }

    const [slide3, setSlide3] = useState("carousel__container__hidden");
    const changeSlide3 = () => {
        console.log("click3");
        setSlide3("carousel__container");
        setSlide2("carousel__container__hidden");
        setSlide1("carousel__container__hidden");
        setSlide6("carousel__container__hidden");
        setSlide5("carousel__container__hidden");
    }

    const [slide4, setSlide4] = useState("carousel__container__hidden");
    const changeSlide4 = () => {
        console.log("click");
        setSlide4("carousel__container");
        setSlide5("carousel__container__hidden");
        setSlide6("carousel__container__hidden");

    }

    const [slide5, setSlide5] = useState("carousel__container__hidden");
    const changeSlide5 = () => {
        console.log("click2");
        setSlide5("carousel__container");
        setSlide4("carousel__container__hidden");
        setSlide6("carousel__container__hidden");
    }

    const [slide6, setSlide6] = useState("carousel__container__hidden");
    const changeSlide6 = () => {
        console.log("click2");
        setSlide5("carousel__container__hidden");
        setSlide6("carousel__container__hidden");
        setSlide4("carousel__container__hidden");


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
                <div className={slide1}>
                    <ul className="carousel__container__1">
                        <span className="fundation__name">Fundacja “Dbam o Zdrowie”</span>
                        <span className="items__name">ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                        <span className="goal__name">
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </span>
                    </ul>

                    <ul className="carousel__container__2">
                        <span className="fundation__name">Fundacja “Dla dzieci”</span>
                        <span className="items__name">ubrania, meble, zabawki</span>
                        <span className="goal__name">
                            Cel i misja: Pomoc dzieciom z ubogich rodzin.
                        </span>
                    </ul>

                    <ul className="carousel__container__3">
                        <span className="fundation__name">Fundacja “Dbam o Zdrowie”</span>
                        <span className="items__name">ubrania, jedzenie, ciepłe koce</span>
                        <span className="goal__name">
                            Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                        </span>
                    </ul>
                </div>
                <div className={slide2}>
                    <ul className="carousel__container__1">
                        <span className="fundation__name">Lorem ipsum dolor sit amet.</span>
                        <span className="items__name">Lorem ipsum dolor sit amet.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </span>
                    </ul>

                    <ul className="carousel__container__2">
                        <span className="fundation__name">Lorem ipsum dolor sit amet.</span>
                        <span className="items__name">Lorem ipsum dolor sit amet.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </span>
                    </ul>

                    <ul className="carousel__container__3">
                        <span className="fundation__name">Lorem ipsum dolor sit amet.</span>
                        <span className="items__name">Lorem ipsum dolor sit amet.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </span>
                    </ul>
                </div>
                <div className={slide3}>
                    <ul className="carousel__container__1">
                        <span className="fundation__name">Lorem ipsum dolor s.</span>
                        <span className="items__name">Lorem ipsum dolor si.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicint.
                        </span>
                    </ul>

                    <ul className="carousel__container__2">
                        <span className="fundation__name">Lorem ipsum dolor .</span>
                        <span className="items__name">Lorem ipsum dolor t.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur .
                        </span>
                    </ul>

                    <ul className="carousel__container__3">
                        <span className="fundation__name">Lorem ipsum dolor sit amet.</span>
                        <span className="items__name">Lorem ipsum dolor sit amet.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur .
                        </span>
                    </ul>
                </div>
                <div className="carousel__container__btn">
                    <button  onClick={changeSlide} className="carousel__btn">1</button>
                    <button onClick={changeSlide2} className="carousel__btn">2</button>
                    <button onClick={changeSlide3} className="carousel__btn">3</button>
                </div>


            </div>
            <div className={style2}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </span>
                <div className={slide4}>
                    <ul className="carousel__container__1">
                        <span className="fundation__name">Organizacja “Lorem ipsum 1”</span>
                        <span className="items__name">Egestas,sed,tempus</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </span>
                    </ul>

                    <ul className="carousel__container__2">
                        <span className="fundation__name">Organizacja “Lorem ipsum 2”</span>
                        <span className="items__name">ubrania, meble, zabawki</span>
                        <span className="goal__name">
                            Cel i misja: Pomoc dzieciom z ubogich rodzin.
                        </span>
                    </ul>

                    <ul className="carousel__container__3">
                        <span className="fundation__name">Organizacja “Lorem ipsum 3”</span>
                        <span className="items__name">ubrania, jedzenie, ciepłe koce</span>
                        <span className="goal__name">
                            Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                        </span>
                    </ul>
                </div>
                <div className={slide5}>
                    <ul className="carousel__container__1">
                        <span className="fundation__name">Organizacja “Lorem ipsum 4”</span>
                        <span className="items__name">Lorem ipsum dolor sit amet.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur
                        </span>
                    </ul>

                    <ul className="carousel__container__2">
                        <span className="fundation__name">Organizacja “Lorem ipsum 5”</span>
                        <span className="items__name">Lorem ipsum dolor sit amet.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adi
                        </span>
                    </ul>

                    <ul className="carousel__container__3">
                        <span className="fundation__name">Organizacja “Lorem ipsum 6”</span>
                        <span className="items__name">Lorem ipsum dolor sit amet.</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adipisici
                        </span>
                    </ul>
                </div>

                <div className="carousel__container__btn">
                    <button  onClick={changeSlide4} className="carousel__btn">1</button>
                    <button onClick={changeSlide5} className="carousel__btn">2</button>
                </div>
            </div>
            <div className={style3}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </span>
                <div className={slide6}>
                    <ul className="carousel__container__1">
                        <span className="fundation__name">Zbiórka “Lorem ipsum 1”</span>
                        <span className="items__name">Egestas,sed,tempus</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </span>
                    </ul>

                    <ul className="carousel__container__2">
                        <span className="fundation__name">Zbiórka “Lorem ipsum 2”</span>
                        <span className="items__name">Egestas,sed,tempus</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet.
                        </span>
                    </ul>

                    <ul className="carousel__container__3">
                        <span className="fundation__name">Zbiórka “Lorem ipsum 3”</span>
                        <span className="items__name">Egestas,sed,tempus</span>
                        <span className="goal__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </span>
                    </ul>
                </div>
            </div>
        </>
    )
}