import servicesImg1 from "../../assets/images/services/service-1.png";
import servicesImg2 from "../../assets/images/services/service-2.png";
import servicesImg3 from "../../assets/images/services/service-3.png";
import servicesImg4 from "../../assets/images/services/service-4.png";
import serviceLeftImg from "../../assets/images/services/service-left.jpg";

export default function ServiceSection() {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div
              className="services__left set-bg"
              data-setbg={serviceLeftImg}
            >
              <a
                href="https://www.youtube.com/watch?v=JGwWNGJdvx8"
                className="play-btn video-popup"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="row services__list">
              <div className="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
                <div className="service__item deep-bg">
                  <img src={servicesImg1} alt="" />
                  <h4>Wedding</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
                <div className="service__item">
                  <img src={servicesImg2} alt="" />
                  <h4>Clubs and bar</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
                <div className="service__item deep-bg">
                  <img src={servicesImg4} alt="" />
                  <h4>DJ lessons</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
                <div className="service__item">
                  <img src={servicesImg3} alt="" />
                  <h4>Corporate events</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
