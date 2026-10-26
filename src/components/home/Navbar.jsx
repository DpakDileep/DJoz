import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="header__logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <a href="/">Home</a>
                  </li>
                  <li
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    <a href="/about">About</a>
                  </li>
                  <li
                    className={
                      location.pathname === "/discography" ? "active" : ""
                    }
                  >
                    <a href="/discography">Discography</a>
                  </li>
                  <li
                    className={location.pathname === "/tours" ? "active" : ""}
                  >
                    <a href="/tours">Tours</a>
                  </li>
                  <li
                    className={location.pathname === "/videos" ? "active" : ""}
                  >
                    <a href="/videos">Videos</a>
                  </li>
                  <li className={location.pathname === "/blog" ? "active" : ""}>
                    <a href="/blog">Blog</a>
                  </li>
                  <li
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="header__right__social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </section>
  );
}
