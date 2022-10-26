import {NavLink} from "react-router-dom";
import Decoration from "../../assets/Decoration.svg"
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";

export default function Navigation() {
    return (
        <header className="container__nav" id="start">
            <div className="container__nav__login">
                <ul className="container__nav__login__list">
                    <nav>
                        <li><NavLink to="/sign">Zaloguj</NavLink></li>
                        <li><NavLink to="/register">Załóż konto</NavLink></li>
                    </nav>
                </ul>
            </div>
            <div className="container__nav__menu">
                    <NavBar />
                    <MobileNav />
            </div>
            <div className="container__nav__subtitles">
                <h1>Zacznij pomagać! <br/>Oddaj niechane rzeczy w zaufane ręce</h1>
                <img className="img__decoration" src={Decoration} alt="decoration"/>
                <div className="container__nav__subtitles__buttons">
                    <NavLink to="/sign">ODDAJ <br/>RZECZY</NavLink>
                    <NavLink className="container__nav__subtitles__button__2"
                             to="/sign">ZORGANIZUJ <br/>ZBIÓRKĘ</NavLink>
                </div>
            </div>
        </header>
    )
}