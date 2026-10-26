import linkImg1 from "../../assets/images/discography/link-1.jpg"
import linkImg2 from "../../assets/images/discography/link-2.jpg"
import discoImg1 from "../../assets/images/discography/disco-1.jpg"
import discoImg2 from "../../assets/images/discography/disco-2.jpg"
import discoImg3 from "../../assets/images/discography/disco-3.jpg"
import discoImg4 from "../../assets/images/discography/disco-4.jpg"
import discoImg5 from "../../assets/images/discography/disco-5.jpg"
import discoImg6 from "../../assets/images/discography/disco-6.jpg"

export default function DiscographySection() {
  return (
    <section className="discography spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-title">
                        <h2>Latest Releases</h2>
                        <h1>Discography</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="discography__item">
                        <div className="discography__item__pic">
                            <img src={discoImg1} alt="" />
                        </div>
                        <div className="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            <a href="#"><img src={linkImg1} alt="" /></a>
                            <a href="#"><img src={linkImg2} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="discography__item">
                        <div className="discography__item__pic">
                            <img src={discoImg2} alt="" />
                        </div>
                        <div className="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            <a href="#"><img src={linkImg1} alt="" /></a>
                            <a href="#"><img src={linkImg2} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="discography__item">
                        <div className="discography__item__pic">
                            <img src={discoImg3} alt="" />
                        </div>
                        <div className="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            <a href="#"><img src={linkImg1} alt="" /></a>
                            <a href="#"><img src={linkImg2} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="discography__item">
                        <div className="discography__item__pic">
                            <img src={discoImg4} alt="" />
                        </div>
                        <div className="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            <a href="#"><img src={linkImg1} alt="" /></a>
                            <a href="#"><img src={linkImg2} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="discography__item">
                        <div className="discography__item__pic">
                            <img src={discoImg5} alt="" />
                        </div>
                        <div className="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            <a href="#"><img src={linkImg1} alt="" /></a>
                            <a href="#"><img src={linkImg2} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="discography__item">
                        <div className="discography__item__pic">
                            <img src={discoImg6} alt="" />
                        </div>
                        <div className="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            <a href="#"><img src={linkImg1} alt="" /></a>
                            <a href="#"><img src={linkImg2} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="pagination__links">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">Next</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
