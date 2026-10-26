import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="DJoz" />
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    <Link to="/about">About</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/discography" ? "active" : ""
                    }
                  >
                    <Link to="/discography">Discography</Link>
                  </li>
                  <li
                    className={location.pathname === "/tours" ? "active" : ""}
                  >
                    <Link to="/tours">Tours</Link>
                  </li>
                  <li
                    className={location.pathname === "/videos" ? "active" : ""}
                  >
                    <Link to="/videos">Videos</Link>
                  </li>
                  <li className={location.pathname === "/blog" ? "active" : ""}>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    <Link to="/contact">Contact</Link>
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
