import Decoration from "../../assets/Decoration.svg"
import Instagram from "../../assets/Instagram.svg"
import Facebook from "../../assets/Facebook.svg"

export default function Footer() {
    return (
        <footer className="container__footer" id="footer">
            <div className="background__footer">
                <div className="container__footer__subtitles">
                    <span>Skontatuj się z nami</span>
                    <img className="img__decoration__footer" src={Decoration} alt="decoration"/>
                    <form className="container__footer__subtitles__form">
                        <div className="container__footer__subtitles__form__row">
                                <span>
                                    <label>Wpisz swoje imię</label>
                                    <input placeholder="Krzysztof" type="text"/>
                                </span>
                            <span>
                                    <label>Wpisz swój email</label>
                                    <input placeholder="abc@xyz.pl" type="email" id="email"/>
                                </span>
                        </div>
                        <div className="container__footer__subtitles__form__message">
                                <span>
                                <label>Wpisz swoją wiadomość</label>
                                    <textarea defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore etdolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                                    </textarea>
                                </span>
                        </div>
                        <button className="form__btn">Wyślij</button>
                    </form>
                </div>
            </div>
            <div className="footer__subs">
                <span className="footer__subs">Copyright by Coders Lab</span>
                <img src={Facebook} alt="facebook"/>
                <img src={Instagram} alt="instagram"/>
            </div>
        </footer>
    )
}