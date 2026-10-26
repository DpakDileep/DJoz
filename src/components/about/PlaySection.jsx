import serviceImg1 from "../../assets/images/services/as-1.jpg"
import serviceImg2 from "../../assets/images/services/as-2.jpg"
import serviceImg3 from "../../assets/images/services/as-3.jpg"
import iconImg1 from "../../assets/images/services/as-icon-1.png"
import iconImg2 from "../../assets/images/services/as-icon-2.png"
import iconImg3 from "../../assets/images/services/as-icon-3.png"

export default function PlaySection() {
  return (
    <section className="about-services spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-title">
                        <h2>WHERE DO I PLAY</h2>
                        <h1>Best service</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="about__services__item">
                        <div className="about__services__item__pic set-bg" data-setbg={serviceImg1}>
                            <div className="icon">
                                <img src={iconImg1} alt="" />
                            </div>
                        </div>
                        <div className="about__services__item__text">
                            <h4>Wedding</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="about__services__item">
                        <div className="about__services__item__pic set-bg" data-setbg={serviceImg2}>
                            <div className="icon">
                                <img src={iconImg2} alt="" />
                            </div>
                        </div>
                        <div className="about__services__item__text">
                            <h4>Clubs and bar</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="about__services__item">
                        <div className="about__services__item__pic set-bg" data-setbg={serviceImg3}>
                            <div className="icon">
                                <img src={iconImg3} alt="" />
                            </div>
                        </div>
                        <div className="about__services__item__text">
                            <h4>Corporate events</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
