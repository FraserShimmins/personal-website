import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#00140d]">
     
      <div className="pt-20 mx-10 sm:mx-15">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
      </div>
    
    </main>
  );
}
