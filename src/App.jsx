import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Discography from "./pages/Discography";
import Tours from "./pages/Tours";
import Videos from "./pages/Videos";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "/js/main.js";

    const script2 = document.createElement("script");
    script2.src = "/js/jplayerInit.js";

    script1.onload = () => {
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      script1.remove();
      script2.remove();
    };
  }, [location.pathname]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
