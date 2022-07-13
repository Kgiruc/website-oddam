import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";

function NavLinks() {
    return (
        <div className="container__nav__menu">
            <ul className="container__nav__menu__list">
                <li><NavLink to="/">Start</NavLink></li>
                <li><Link to="three_columns" smooth={true} duration={300}>O co chodzi?</Link></li>
                <li><Link to="about" smooth={true} duration={300}>O nas</Link></li>
                <li><Link to="help" smooth={true} duration={300}>Fundacja i organizacja</Link></li>
                <li><Link to="footer" smooth={true}   duration={300}>Kontakt</Link></li>
            </ul>
        </div>
    );
}

export default NavLinks;