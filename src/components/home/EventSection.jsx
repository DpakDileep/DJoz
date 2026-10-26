import event1 from "../../assets/images/events/event-1.jpg";
import event2 from "../../assets/images/events/event-2.jpg";
import event3 from "../../assets/images/events/event-3.jpg";

export default function EventSection() {
  return (
    <section className="event spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Upcoming Events</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="event__slider owl-carousel">
            <div className="col-lg-4">
              <div className="event__item">
                <div
                  className="event__item__pic set-bg"
                  data-setbg={event1}
                >
                  <div className="tag-date">
                    <span>Dec 15, 2019</span>
                  </div>
                </div>
                <div className="event__item__text">
                  <h4>David Guetta Miami Ultra</h4>
                  <p>
                    <i className="fa fa-map-marker"></i> Funkhaus Berlin,
                    Berlin, Germany
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="event__item">
                <div
                  className="event__item__pic set-bg"
                  data-setbg={event2}
                >
                  <div className="tag-date">
                    <span>Dec 15, 2019</span>
                  </div>
                </div>
                <div className="event__item__text">
                  <h4>David Guetta Miami Ultra</h4>
                  <p>
                    <i className="fa fa-map-marker"></i> Funkhaus Berlin,
                    Berlin, Germany
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="event__item">
                <div
                  className="event__item__pic set-bg"
                  data-setbg={event3}
                >
                  <div className="tag-date">
                    <span>Dec 15, 2019</span>
                  </div>
                </div>
                <div className="event__item__text">
                  <h4>David Guetta Miami Ultra</h4>
                  <p>
                    <i className="fa fa-map-marker"></i> Funkhaus Berlin,
                    Berlin, Germany
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="event__item">
                <div
                  className="event__item__pic set-bg"
                  data-setbg={event2}
                >
                  <div className="tag-date">
                    <span>Dec 15, 2019</span>
                  </div>
                </div>
                <div className="event__item__text">
                  <h4>David Guetta Miami Ultra</h4>
                  <p>
                    <i className="fa fa-map-marker"></i> Funkhaus Berlin,
                    Berlin, Germany
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
