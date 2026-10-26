import youtubeImg1 from "../../assets/images/youtube/youtube-1.jpg";
import youtubeImg2 from "../../assets/images/youtube/youtube-2.jpg";
import youtubeImg3 from "../../assets/images/youtube/youtube-3.jpg";

export default function YoutubeFeed() {
  return (
    <section className="youtube spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Youtube feed</h2>
              <h1>Latest videos</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="youtube__item">
              <div
                className="youtube__item__pic set-bg"
                data-setbg={youtubeImg1}
              >
                <a
                  href="https://www.youtube.com/watch?v=yJg-Y5byMMw?autoplay=1"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
              <div className="youtube__item__text">
                <h4>David Guetta Miami Ultra Music Festival 2019</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="youtube__item">
              <div
                className="youtube__item__pic set-bg"
                data-setbg={youtubeImg2}
              >
                <a
                  href="https://www.youtube.com/watch?v=K4DyBUG242c?autoplay=1"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
              <div className="youtube__item__text">
                <h4>Martin Garrix (Full live-set) | SLAM!Koningsdag</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="youtube__item">
              <div
                className="youtube__item__pic set-bg"
                data-setbg={youtubeImg3}
              >
                <a
                  href="https://www.youtube.com/watch?v=S19UcWdOA-I?autoplay=1"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
              <div className="youtube__item__text">
                <h4>Dimitri Vegas, Steve Aoki & Like Mike’s “3 Are Legend”</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
