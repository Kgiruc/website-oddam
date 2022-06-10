import React from "react";

export default function Navigation(){
    return(
        <>
            <div className="container__nav">
                <div className="container__nav__login">
                    <ul className="container__nav__login__list">
                        <li>Zaloguj</li>
                        <li>Załóż konto</li>
                    </ul>
                </div>
                <div className="container__nav__menu">
                    <ul className="container__nav__menu__list">
                        <li>Start</li>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacja i organizacja</li>
                        <li>Kontakt</li>
                    </ul>
                </div>

            </div>
        </>
    )
}