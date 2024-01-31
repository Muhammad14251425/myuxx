import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <div className="px-5 lg:container mx-auto lg:px-20">
      <Features />
      </div>
      <div className="px-5 lg:container mx-auto lg:px-20 py-[48px] lg:pt-[120px] pb-[60px]">
      <Faq />
      </div>
      <div className="pt-[48px] lg:pt-[60px] px-5 lg:container mx-auto ">
      <Pricing />
      </div>
      <div className="pt-[48px] lg:pt-[60px] px-5 lg:container mx-auto">
      <Cta />
      </div>
      <div className="px-5 lg:container mx-auto pb-4">
      <Footer/>
      </div>
    </>
  );
}
