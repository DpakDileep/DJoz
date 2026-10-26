import Header from "../components/Header";
import Footer from "../components/Footer";
import DiscographySection from "../components/discography/DiscographySection";

export default function Discography() {
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
                <span>Discography</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DiscographySection />
      <Footer />
    </>
  );
}
