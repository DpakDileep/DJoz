import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/contact/ContactSection";

export default function Contact() {
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
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5524090066037!2d-71.10245469994108!3d42.47980730490846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3748250c43a43%3A0xe1b9879a5e9b6657!2sWinter%20Street%20Public%20Parking%20Lot!5e0!3m2!1sen!2sbd!4v1577299251173!5m2!1sen!2sbd"
            height="585"
            style={{ border:"0"}}
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
