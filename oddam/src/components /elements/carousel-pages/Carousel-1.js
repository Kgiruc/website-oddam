import React from "react";

export default function Carousel1(){
    return(
        <>
            <div>
                <div className="carousel__container">
                    <ul className="carousel__container__1">
                        <span className="fundation__name">Fundacja “Dbam o Zdrowie”</span>
                        <span className="items__name">ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                        <span className="goal__name">
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </span>
                    </ul>

                    <ul className="carousel__container__2">
                        <span className="fundation__name">Fundacja “Dbam o Zdrowie”</span>
                        <span className="items__name">ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                        <span className="goal__name">
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </span>
                    </ul>

                    <ul className="carousel__container__3">
                        <span className="fundation__name">Fundacja “Dbam o Zdrowie”</span>
                        <span className="items__name">ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                        <span className="goal__name">
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </span>
                    </ul>


                </div>
                    <div className="carousel__container__btn">
                        <button className="carousel__btn">1</button>
                        <button className="carousel__btn">2</button>
                        <button className="carousel__btn">3</button>
                    </div>
            </div>
        </>
    )
}