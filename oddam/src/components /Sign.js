import {NavLink} from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import NavBar from "./elements/NavBar";
import MobileNav from "./elements/MobileNav";

export default function Sign() {
    return (
        <>
            <section className="container__sign">
                <header className="container__nav__login">
                    <ul className="container__nav__login__list">
                        <nav>
                            <li><NavLink to="/sign">Zaloguj</NavLink></li>
                            <li><NavLink to="/register">Załóż konto</NavLink></li>
                        </nav>
                    </ul>
                </header>
                <div className="container__nav__menu">
                    <NavBar />
                    <MobileNav />
                </div>
                <div className="container__sign__form">
                    <span>Zaloguj się </span>
                    <img className="img__decoration" src={Decoration} alt="decoration"/>
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
                    <button className="register__btn"><NavLink to="/register">Załóż konto</NavLink></button>
                    <button><NavLink to="/">Zaloguj się</NavLink></button>
                </div>
            </section>
        </>
    )
}