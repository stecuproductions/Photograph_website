import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import References from "../components/References";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="bg-[url('/images/bg.png')] bg-repeat lg:px-8 ">
      <div className="w-100% mx-auto text-secondary py-8 lg:py-8 bg-transparent px-2 lg:max-w-[1200px] lg:px-0 min-h-screen flex flex-col gap-8 md:gap-16">
        <Navbar/>
        <Hero/>
        <References/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  );
}