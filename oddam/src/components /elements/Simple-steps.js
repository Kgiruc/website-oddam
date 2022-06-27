import {NavLink} from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";

export default function SimpleSteps() {
    return (
        <section className="container__steps" id="simple__steps">
            <span>Wystarczą 4 proste kroki</span>
            <img src={Decoration} alt="decoraction"/>
            <div className="container__steps__columns">
                <article className="container__steps__1 column__steps">
                    <ul>
                        <li><img src={Icon1} alt="t-shirt"/></li>
                        <li>Wybierz rzeczy</li>
                        <li className="line"></li>
                        <li className="subs_steps">ubrania, zabawki, sprzęt i inne
                        </li>
                    </ul>
                </article>
                <article className="container__steps__2 column__steps">
                    <ul>
                        <li><img src={Icon2} alt="bag"/></li>
                        <li>Spakuj je</li>
                        <li className="line"></li>
                        <li className="subs_steps">skorzystaj z worków na śmieci
                        </li>
                    </ul>
                </article>
                <article className="container__steps__3 column__steps">
                    <ul>
                        <li><img src={Icon3} alt="lupa"/></li>
                        <li>Zdecyduj komu <br/>chcesz pomóc</li>
                        <li className="line"></li>
                        <li className="subs_steps">wybierz zaufane miejsce
                        </li>
                    </ul>
                </article>
                <article className="container__steps__4 column__steps">
                    <ul>
                        <li><img src={Icon4} alt="refresh"/></li>
                        <li>Zamów kuriera</li>
                        <li className="line"></li>
                        <li className="subs_steps">kurier przyjedzie w dogodnym terminie
                        </li>
                    </ul>
                </article>
            </div>
            <NavLink className="steps__button" to="/sign">ODDAJ <br/>RZECZY</NavLink>
        </section>
    )
}