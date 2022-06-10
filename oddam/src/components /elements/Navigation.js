import React from "react";

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
                </div>
            </div>
        </>
    )
}