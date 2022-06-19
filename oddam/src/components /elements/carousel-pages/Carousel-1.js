import React,{ useState } from "react";


export default function Carousel1(){





    const [slide6, setSlide6] = useState("carousel__container");
    const changeSlide5 = () => {
        console.log("click2");
        setSlide6("carousel__container");
    }








    return(
        <>
            <div>
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