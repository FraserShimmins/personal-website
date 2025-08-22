import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#00140d]">
      <NavBar/>

      <div className="mt-20 mx-10 sm:mx-15">
        <HeroSection/>
        <AboutSection/>
      </div>
    
    </main>
  );
}
