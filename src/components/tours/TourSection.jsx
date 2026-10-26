import tourImg1 from "../../assets/images/tours/tour-1.jpg"
import tourImg2 from "../../assets/images/tours/tour-2.jpg"
import tourImg3 from "../../assets/images/tours/tour-3.jpg"

export default function TourSection() {
  return (
    <section className="tours spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 order-lg-1">
                    <div className="tours__item__text">
                        <h2>Untold Festival 2020</h2>
                        <div className="tours__text__widget">
                            <ul>
                                <li>
                                    <i className="fa fa-clock-o"></i>
                                    <span>8:00pm</span>
                                    <span>Dec 15, 2019</span>
                                </li>
                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    Funkhaus Berlin, Berlin, Germany
                                </li>
                            </ul>
                            <div className="price">$ 35.00</div>
                        </div>
                        <div className="tours__text__desc">
                            <p>Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin
                                hosts an impressive roster of techno artists worthy.</p>
                            <p>Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights
                                of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the</p>
                        </div>
                        <a href="#" className="primary-btn border-btn">Buy tickets</a>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2">
                    <div className="tours__item__pic">
                        <img src={tourImg1} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-4">
                    <div className="tours__item__text tours__item__text--right">
                        <h2>Untold Festival 2020</h2>
                        <div className="tours__text__widget">
                            <ul>
                                <li>
                                    <i className="fa fa-clock-o"></i>
                                    <span>8:00pm</span>
                                    <span>Dec 15, 2019</span>
                                </li>
                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    Funkhaus Berlin, Berlin, Germany
                                </li>
                            </ul>
                            <div className="price">$ 35.00</div>
                        </div>
                        <div className="tours__text__desc">
                            <p>Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin
                                hosts an impressive roster of techno artists worthy.</p>
                            <p>Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights
                                of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the</p>
                        </div>
                        <a href="#" className="primary-btn border-btn">Buy tickets</a>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-3">
                    <div className="tours__item__pic tours__item__pic--left">
                        <img src={tourImg2} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-5">
                    <div className="tours__item__text">
                        <h2>Untold Festival 2020</h2>
                        <div className="tours__text__widget">
                            <ul>
                                <li>
                                    <i className="fa fa-clock-o"></i>
                                    <span>8:00pm</span>
                                    <span>Dec 15, 2019</span>
                                </li>
                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    Funkhaus Berlin, Berlin, Germany
                                </li>
                            </ul>
                            <div className="price">$ 35.00</div>
                        </div>
                        <div className="tours__text__desc">
                            <p>Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin
                                hosts an impressive roster of techno artists worthy.</p>
                            <p>Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights
                                of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the</p>
                        </div>
                        <a href="#" className="primary-btn border-btn">Buy tickets</a>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-6">
                    <div className="tours__item__pic tours__item__pic--last">
                        <img src={tourImg3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
