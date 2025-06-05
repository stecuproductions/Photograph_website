import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeader from "../../UI/SectionHeader";
import ImagesGrid from "../../components/ImagesGrid";
import Breadcrumbs from "../../components/Breadcrumbs";
import { metadata } from "./metadata";

export { metadata };
export default function Home() {
  return (
    <div className="bg-[url('/images/bg.png')] bg-repeat lg:px-8 ">
      <div className="w-100% mx-auto text-secondary py-8 lg:py-8 bg-transparent px-2 lg:max-w-[1200px] lg:px-0 min-h-screen flex flex-col gap-8 md:gap-16">
        <Navbar/>
        <Breadcrumbs />
        <SectionHeader className="text-center">Portfolio</SectionHeader>
        <ImagesGrid/>
        <Footer/>
      </div>
    </div>
  );
}