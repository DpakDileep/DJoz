import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillSection from "../components/about/SkillSection";
import Introduction from "../components/about/Introduction";
import PhotoSection from "../components/about/PhotoSection";
import PlaySection from "../components/about/PlaySection";

export default function About() {
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
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SkillSection />
      <Introduction />
      <PhotoSection />
      <PlaySection />
      <Footer />
    </>
  );
}
