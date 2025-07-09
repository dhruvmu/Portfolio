import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes("#")) {
        e.preventDefault();
        const targetId = target.href.split("#")[1];
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
