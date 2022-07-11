import React from 'react';
import Decoration from "../../assets/Decoration.svg";

const Header = ({text}) => {
    return (
        <div>
            <h2 className="header__text">{text}</h2>
            <img src={Decoration} alt="decoration"/>
        </div>
    );
};

export default Header;