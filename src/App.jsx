import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import LogoSlider from "./sections/LogoSlider";
import Introduction from "./sections/Introduction";
import Features from "./sections/Features";
import Integrations from "./sections/Integrations";
import Faqs from "./sections/Faqs";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className=" min-h-screen h-full w-full text-white overflow-x-clip ">
      <Navbar />
      <Hero />
      <LogoSlider />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer/>
    </div>
  );
}

export default App;
