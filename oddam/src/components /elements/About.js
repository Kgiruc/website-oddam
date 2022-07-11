import Header from "../common/header"
import Signature from "../../assets/Signature.svg"


export default function About() {
    return (
        <section className="container__about" id="about">
            <div className="container__about__1">
                <Header text="O nas" />
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img className="signature" src={Signature} alt="signature"/>
            </div>
            <div className="container__about__2">
            </div>
        </section>
    )
}