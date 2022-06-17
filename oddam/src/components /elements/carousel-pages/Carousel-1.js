import React,{ useState } from "react";


export default function Carousel1(){



    const [slide1, setSlide1] = useState("carousel__container");
    const changeSlide = () => {
        console.log("click");
        setSlide1("carousel__container");
        setSlide2("carousel__container__hidden");
        setSlide3("carousel__container__hidden");
    }

    const [slide2, setSlide2] = useState("carousel__container__hidden");
    const changeSlide2 = () => {
        console.log("click2");
        setSlide2("carousel__container");
        setSlide1("carousel__container__hidden");
        setSlide3("carousel__container__hidden");
    }

    const [slide3, setSlide3] = useState("carousel__container__hidden");
    const changeSlide3 = () => {
        console.log("click3");
        setSlide3("carousel__container");
        setSlide2("carousel__container__hidden");
        setSlide1("carousel__container__hidden");
    }







    return(
        <>
            <div>
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
        </>
    )
}