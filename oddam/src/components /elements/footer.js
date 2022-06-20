import React from "react";
import Decoration from "../../assets/Decoration.svg"
import Instagram from "../../assets/Instagram.svg"
import Facebook from "../../assets/Facebook.svg"



export default function Footer(){
    return(
        <>
            <div className="container__footer">
                <div className="background__footer">
                    <div className="container__footer__subtitles">
                        <span>Skontatuj się z nami</span>
                        <img  className="img__decoration__footer" src={Decoration} alt="decoration"/>
                        <form className="container__footer__subtitles__form">
                            <div className="container__footer__subtitles__form__row">
                                <span>
                                    <label >Wpisz swoje imię</label>
                                    <input type="text"/>
                                </span>
                                <span>
                                <label>Wpisz swój email</label>
                                <input type="email" id="email" />
                                </span>
                            </div>
                            <div className="container__footer__subtitles__form__message">
                                <span>
                                <label>Wpisz swoją wiadomość</label>
                                    <input type="text" id="email"/>
                                </span>
                            </div>
                            <button>Wyślij</button>
                        </form>
                    </div>
                    </div>

                        <div className="footer__subs">
                            <span className="footer__subs">Copyright by Coders Lab</span>
                            <img src={Facebook} alt="facebook"/>
                            <img src={Instagram} alt="instagram"/>

                        </div>
            </div>
        </>
    )
}