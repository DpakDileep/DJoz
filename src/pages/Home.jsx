import Navbar from "../components/home/Navbar";
import Footer from "../components/home/FootSection";
import HeroSection from "../components/home/HeroSection";
import EventSection from "../components/home/EventSection";
import AboutSection from "../components/home/AboutSection";
import ServiceSection from "../components/home/ServiceSection";
import TrackSection from "../components/home/TrackSection";
import YoutubeFeed from "../components/home/YoutubeFeed";
import CountdownSection from "../components/home/CountdownSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EventSection />
      <AboutSection />
      <ServiceSection />
      <TrackSection />
      <YoutubeFeed />
      <CountdownSection />
      <Footer />
    </>
  );
}
