import largeImg from "../../assets/images/videos/large-item.jpg"
import videoImg1 from "../../assets/images/videos/videos-1.jpg"
import videoImg2 from "../../assets/images/videos/videos-2.jpg"
import videoImg3 from "../../assets/images/videos/videos-3.jpg"
import videoImg4 from "../../assets/images/videos/videos-4.jpg"


export default function VideoSection() {
  return (
    <section className="videos spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-title">
                        <h2>YOutube feed</h2>
                        <h1>Latest videos</h1>
                    </div>
                    <div className="videos__large__item set-bg" data-setbg={largeImg}>
                        <a href="https://www.youtube.com/watch?v=yJg-Y5byMMw?autoplay=1" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                        <div className="videos__large__item__text">
                            <h4>Martin Garrix & Pierce Fulton feat. Mike Shinoda - Waiting For Tomorrow (Official Video)
                            </h4>
                            <ul>
                                <li>02:35:18</li>
                                <li>Dec 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="videos__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="videos__item">
                                    <div className="videos__item__pic set-bg" data-setbg={videoImg1}>
                                        <a href="https://www.youtube.com/watch?v=yJg-Y5byMMw?autoplay=1" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                                    </div>
                                    <div className="videos__item__text">
                                        <h5>Electric Love Festival 2019 - The Opening Ceremony</h5>
                                        <ul>
                                            <li>02:35:18</li>
                                            <li>Dec 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="videos__item">
                                    <div className="videos__item__pic set-bg" data-setbg={videoImg2}>
                                        <a href="https://www.youtube.com/watch?v=K4DyBUG242c?autoplay=1" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                                    </div>
                                    <div className="videos__item__text">
                                        <h5>Tiësto - Live Electric Daisy Carnival Las Vegas 2019</h5>
                                        <ul>
                                            <li>02:35:18</li>
                                            <li>Dec 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="videos__item">
                                    <div className="videos__item__pic set-bg" data-setbg={videoImg3}>
                                        <a href="https://www.youtube.com/watch?v=3nQNiWdeH2Q?autoplay=1" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                                    </div>
                                    <div className="videos__item__text">
                                        <h5>Martin Garrix - Live @ Ultra Music Festival Miami 2019</h5>
                                        <ul>
                                            <li>02:35:18</li>
                                            <li>Dec 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="videos__item">
                                    <div className="videos__item__pic set-bg" data-setbg={videoImg4}>
                                        <a href="https://www.youtube.com/watch?v=Srqs4CitU2U?autoplay=1" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                                    </div>
                                    <div className="videos__item__text">
                                        <h5>Armin van Buuren live at Tomorrowland 2019</h5>
                                        <ul>
                                            <li>02:35:18</li>
                                            <li>Dec 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="videos__item">
                                    <div className="videos__item__pic set-bg" data-setbg={videoImg3}>
                                        <a href="https://www.youtube.com/watch?v=vBGiFtb8Rpw?autoplay=1" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                                    </div>
                                    <div className="videos__item__text">
                                        <h5>Martin Garrix - Live @ Ultra Music Festival Miami 2019</h5>
                                        <ul>
                                            <li>02:35:18</li>
                                            <li>Dec 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
