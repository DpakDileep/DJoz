import footerBg from "../assets/images/footer-bg.png"

export default function Footer() {
  return (
    <footer className="footer footer--normal spad set-bg" data-setbg={footerBg}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="footer__address">
                        <ul>
                            <li>
                                <i className="fa fa-phone"></i>
                                <p>Phone</p>
                                <h6>1-677-124-44227</h6>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <p>Email</p>
                                <h6>DJ.Music@gmail.com</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 col-md-6">
                    <div className="footer__social">
                        <h2>DJoz</h2>
                        <div className="footer__social__links">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-6">
                    <div className="footer__newslatter">
                        <h4>Stay With me</h4>
                        <form action="#">
                            <input type="text" placeholder="Email" />
                            <button type="submit"><i className="fa fa-send-o"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
