import Hero from "@/common/module/Hero/Hero";
import Faq from "@/common/module/Faq/Faq";
import AboutUs from "@/common/module/About Us/AboutUs";
import Feature from "@/common/module/Feature/Feature";
import News from "@/common/module/Faq/slidenews";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden justify-center items-center">
    <Hero />
    <AboutUs />
    {/* <Project /> */}
    <News/>
    <Faq />
    </div>
  );
}
