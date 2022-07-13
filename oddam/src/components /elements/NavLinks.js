import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

function NavLinks() {
    const animateFrom = {opacity: 0,y:-60}
    const animateTo = {opacity: 1, y:0}

    return (
        <div className="container__nav__menu">
            <ul className="container__nav__menu__list">
                <motion.li initial={animateFrom}
                            animate={animateTo}>
                        <NavLink to="/">Start</NavLink>
                </motion.li>
                <motion.li initial={animateFrom}
                           animate={animateTo}>
                    <Link to="three_columns" smooth={true} duration={300}>O co chodzi?</Link>
                </motion.li>
                <motion.li initial={animateFrom}
                                  animate={animateTo}>
                    <Link to="about" smooth={true} duration={300}>O nas</Link>
                </motion.li>
                <motion.li initial={animateFrom}
                           animate={animateTo}>
                    <Link to="help" smooth={true} duration={300}>Fundacja i organizacja</Link>
                </motion.li>
                <motion.li initial={animateFrom}
                           animate={animateTo}>
                    <Link to="footer" smooth={true}   duration={300}>Kontakt</Link>
                </motion.li>
            </ul>
        </div>
    );
}

export default NavLinks;