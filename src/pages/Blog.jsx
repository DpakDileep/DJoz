import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogSection from "../components/blog/BlogSection";

export default function Blog() {
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
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogSection />
      <Footer />
    </>
  );
}
