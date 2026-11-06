import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Audiology from "@/components/Audiology";
import Gallery from "@/components/Gallery";
import Certificates from "@/components/Certificates";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Audiology />
        <Certificates />
        <Gallery />
        <Process />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
