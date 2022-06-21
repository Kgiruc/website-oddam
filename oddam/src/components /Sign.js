import React from "react";
import Navigation from "./elements/Navigation";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import Decoration from "../assets/Decoration.svg";

export default function Sign(){
    return(
        <>
            <div className="container__sign" >
                <div className="container__nav__login">
                    <ul className="container__nav__login__list">
                        <nav>
                            <li><NavLink to="/sign">Zaloguj</NavLink></li>
                            <li><NavLink to="/register">Załóż konto</NavLink></li>
                        </nav>
                    </ul>
                </div>
                <div className="container__nav__menu">
                    <ul className="container__nav__menu__list">
                        <li><NavLink to="/">Start</NavLink></li>
                        <li><NavLink to="/" >O co chodzi?</NavLink></li>
                        <li><NavLink to="/" >O nas</NavLink></li>
                        <li><NavLink to="/" >Fundacja i organizacja</NavLink></li>
                        <li><NavLink to="/" >Kontakt</NavLink></li>
                    </ul>
                </div>
                     <div className="container__sign__form">
                            <span>Zaloguj się </span>
                            <img  className="img__decoration" src={Decoration} alt="decoration"/>
                            <form className="sign__form">
                                <span>
                                    <label>Email</label>
                                    <input type="text"/>
                                    <label>Hasło</label>
                                    <input type="password"/>
                                </span>

                            </form>
                     </div>
                <div className="sign__btn">
                    <button className="register__btn" ><NavLink to="/register">Załóż konto</NavLink></button>
                    <button><NavLink to="/">Zaloguj się</NavLink></button>
                </div>
            </div>
        </>
    )
}