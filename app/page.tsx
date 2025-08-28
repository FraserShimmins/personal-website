import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#00140d]">
     
     <div className="mt-20 mx-10 sm:mx-15">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
      </div>
    
    </main>
  );
}
