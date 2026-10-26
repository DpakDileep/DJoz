import largeImg from "../../assets/images/blog/large-item.jpg"
import blogImg1 from "../../assets/images/blog/blog-1.jpg"
import blogImg2 from "../../assets/images/blog/blog-2.jpg"
import blogImg3 from "../../assets/images/blog/blog-3.jpg"
import blogImg4 from "../../assets/images/blog/blog-4.jpg"
import blogImg5 from "../../assets/images/blog/blog-5.jpg"
import blogImg6 from "../../assets/images/blog/blog-6.jpg"
import brImg1 from "../../assets/images/blog/br-1.jpg"
import brImg2 from "../../assets/images/blog/br-2.jpg"
import brImg3 from "../../assets/images/blog/br-3.jpg"
import brImg4 from "../../assets/images/blog/br-4.jpg"

export default function BlogSection() {
  return (
    <section className="blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-title">
                        <h2>Latest posts</h2>
                        <h1>Music blog</h1>
                    </div>
                    <div className="blog__large">
                        <div className="blog__large__pic set-bg" data-setbg={largeImg}>
                            <a href="#"><i className="fa fa-share-alt"></i></a>
                        </div>
                        <div className="blog__large__text">
                            <span>Music festival</span>
                            <h4>Guidelines for music festival event organisers: music festival harm reduction - December
                                2019</h4>
                            <p>Lorem ipsum dolor consectetur adipiscing eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <div className="blog__large__widget">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <ul>
                                            <li>By <span>Erna O’Conner</span></li>
                                            <li>Dec 17, 2019</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <ul className="right__widget">
                                            <li>230 Views</li>
                                            <li>18 Comments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={blogImg1} alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <span>Music festival</span>
                                    <h5>World Music Festival | Free Events & Concerts in Chicago</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={blogImg2} alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <span>Music festival</span>
                                    <h5>How ROQU Media and The Manual London staged Saudi…</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={blogImg3} alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <span>Music festival</span>
                                    <h5>2019 Festival of the Sun music event, Port Macquarie</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={blogImg4} alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <span>Music festival</span>
                                    <h5>Taylor Swift to Headline Glaston Music Festival</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={blogImg5} alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <span>Music festival</span>
                                    <h5>24-hour festival Inner City Electronic returns</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={blogImg6} alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <span>Music festival</span>
                                    <h5>Lost Paradise festival cancelled amid bushfire danger</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="pagination__links blog__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">Next</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog__sidebar">
                        <div className="blog__sidebar__item">
                            <div className="blog__sidebar__title">
                                <h4>Subscribe newsletter</h4>
                            </div>
                            <p>Ipsum dolor sit amet, adipiscing elit, sed eiusmod </p>
                            <form action="#">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                        </div>
                        <div className="blog__sidebar__item">
                            <div className="blog__sidebar__title">
                                <h4>Social media</h4>
                            </div>
                            <div className="blog__sidebar__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                            </div>
                        </div>
                        <div className="blog__sidebar__item">
                            <div className="blog__sidebar__title">
                                <h4>Recent posts</h4>
                            </div>
                            <a href="#" className="recent__item">
                                <div className="recent__item__pic">
                                    <img src={brImg1} alt="" />
                                </div>
                                <div className="recent__item__text">
                                    <h6>2020 Bendigo Blues and Roots Music Festival…</h6>
                                    <span>Dec 17, 2019</span>
                                </div>
                            </a>
                            <a href="#" className="recent__item">
                                <div className="recent__item__pic">
                                    <img src={brImg2} alt="" />
                                </div>
                                <div className="recent__item__text">
                                    <h6>2020 Bendigo Blues and Roots Music Festival…</h6>
                                    <span>Dec 17, 2019</span>
                                </div>
                            </a>
                            <a href="#" className="recent__item">
                                <div className="recent__item__pic">
                                    <img src={brImg3} alt="" />
                                </div>
                                <div className="recent__item__text">
                                    <h6>2020 Bendigo Blues and Roots Music Festival…</h6>
                                    <span>Dec 17, 2019</span>
                                </div>
                            </a>
                            <a href="#" className="recent__item">
                                <div className="recent__item__pic">
                                    <img src={brImg4} alt="" />
                                </div>
                                <div className="recent__item__text">
                                    <h6>2020 Bendigo Blues and Roots Music Festival…</h6>
                                    <span>Dec 17, 2019</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
