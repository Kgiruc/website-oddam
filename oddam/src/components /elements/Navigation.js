import React from "react";
import Decoration from "../../assets/Decoration.svg"

export default function Navigation(){
    return(
        <>

            <div className="container__nav">
                <div className="container__nav__login">
                    <ul className="container__nav__login__list">
                        <li><a href="#">Zaloguj</a></li>
                        <li><a href="#">Załóż konto</a></li>
                    </ul>
                </div>
                <div className="container__nav__menu">
                    <ul className="container__nav__menu__list">
                        <li><a href="#">Start</a></li>
                        <li><a href="#">O co chodzi?</a></li>
                        <li><a href="#">O nas</a></li>
                        <li><a href="#">Fundacja i organizacja</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                </div>
                <div className="container__nav__subtitles">
                    <span>Zacznij pomagać! <br />Oddaj niechane rzeczy w zaufane ręce</span>
                    <img  className="img__decoration" src={Decoration} alt="decoration"/>
                        <div className="container__nav__subtitles__buttons">
                            <a href="#">ODDAJ <br />RZECZY</a>
                            <a className="container__nav__subtitles__button__2" href="#">ZORGANIZUJ <br />ZBIÓRKĘ</a>
                        </div>
                </div>

            </div>
        </>
    )
}