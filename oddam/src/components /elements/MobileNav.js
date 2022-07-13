import NavLinks from "./NavLinks";
import MenuIcon from "../../assets/menu.png"
import MenuClose from "../../assets/close.png"
import {useState} from "react";

function MobileNav() {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <img className="img__menu" src={MenuIcon} alt="menu"
                               onClick={() =>{
                                   setOpen(true);
                               }}/>
    const closeIcon = <img className="img__menu" src={MenuClose} alt="menu"
                               onClick={() =>{
                                   setOpen(false);
                               }}/>

    return (
        <nav className="container__nav__menu mobile__nav">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </nav>
    );
}

export default MobileNav;