import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Certifications } from "@/components/sections/Certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </>
  );
}
