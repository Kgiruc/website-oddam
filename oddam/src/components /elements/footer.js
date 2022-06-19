import React from "react";
import Decoration from "../../assets/Decoration.svg"
import Instagram from "../../assets/Instagram.svg"
import Facebook from "../../assets/Facebook.svg"



export default function Footer(){
    return(
        <>
            <div className="container__footer">
                <div className="background__footer">
                    <div className="container__footer__form">
                        <span>Skontaktuj się z nami </span>
                        <img src={Decoration} alt="dekoracja"/>
                        <input/>
                        <input/>
                        <input/>
                        <button>Wyślij</button>
                    </div>
                        <ul className="footer__subs">
                        <span className="footer__subs">Copyright by Coders Lab</span>
                        <img src={Instagram} alt="instagram"/>
                        <img src={Facebook} alt="facebook"/>
                        </ul>
                </div>
            </div>
        </>
    )
}