import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";
import { ParticlesBackground } from "./particles-background";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Full Stack Developer", "React Enthusiast", "Node.js Expert", "Problem Solver"];

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, wordIndex, words]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const googleDriveUrl = "https://drive.google.com/file/d/1zyBaa__CH73altERkbfX02syyIpXcnwm/view?usp=drive_link";
    window.open(googleDriveUrl, "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <ParticlesBackground />
      
      <div className="content-overlay text-center px-6 max-w-4xl mx-auto text-foreground">
        <div className="mb-8">
          <h1 className="hero-title font-bold mb-6 animate-float">
            Hi, I'm <span className="text-gradient">Dhruv Munjpara</span>
          </h1>
          <p className="hero-subtitle typing-animation min-h-[2rem]">
            {typedText}
          </p>
          <p className="hero-paragraph mb-10 max-w-2xl mx-auto text-muted-foreground">
            Passionate about creating digital experiences that make a difference. 
            I build modern web applications using cutting-edge technologies.
          </p>
        </div>
        
        <div className="hero-actions flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={downloadCV}
            className="px-8 py-4 btn-gradient text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="px-8 py-4 border-2 border-primary text-foreground font-semibold hover:bg-secondary transition-transform duration-300 hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground h-8 w-8" />
      </div>
    </section>
  );
}