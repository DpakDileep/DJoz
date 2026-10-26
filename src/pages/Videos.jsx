import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoSection from "../components/videos/VideoSection";

export default function Videos() {
  return (
    <>
      <Header />

      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/">
                  <i className="fa fa-home"></i> Home
                </a>
                <span>Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoSection />
      <Footer />
    </>
  );
}
