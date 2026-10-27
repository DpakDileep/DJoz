import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Discography from "./pages/Discography";
import Tours from "./pages/Tours";
import Videos from "./pages/Videos";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function RouteScripts() {
  const location = useLocation();

  useLayoutEffect(() => {
    let cancelled = false;
    let script1;
    let script2;

    const cleanupNiceScroll = () => {
      const $ = window.jQuery;

      if (!$?.fn?.getNiceScroll) return;

      $(".nice-scroll").each(function () {
        const instance = $(this).getNiceScroll();

        if (instance && instance.length) {
          instance.remove();
        }
      });
    };

    script1 = document.createElement("script");
    script1.src = "/js/main.js";

    script1.onload = () => {
      if (cancelled) return;

      script2 = document.createElement("script");
      script2.src = "/js/jplayerInit.js";
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      cancelled = true;

      cleanupNiceScroll();

      script1?.remove();
      script2?.remove();
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteScripts />

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
