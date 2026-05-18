import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import About from "@/components/sections/About";
import Numbers from "@/components/sections/Numbers";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Quality from "@/components/sections/Quality";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Numbers />
      <Services />
      <Projects />
      <WhyUs />
      <Process />
      <Quality />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
