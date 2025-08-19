import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaAws, FaGoogle, FaGithub,FaChartLine,FaHtml5  } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Button } from "@/components/ui/button";
import certi1 from "../assets/certi1.jpg";
import certi2 from "../assets/certi2.jpg";
import certi3 from "../assets/certi3.jpg";



export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.cert-card')) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const certifications = [
    {
      title: "Google AI Essentials",
      icon: FaGoogle,
      iconColor: "text-blue-500",
      issuer: "Google",
      date: "August 2025",
      credentialId: "0TRM8UAVE95C",
      url: certi1,
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      icon: FaChartLine,
      iconColor: "text-green-500",
      issuer: "IBM via Coursera",
      date: "Jun 2025",
      credentialId: "XH8JLRRHG3AG",
      // Example: maybe an external link
      url: certi3,
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      icon: FaHtml5 ,
      iconColor: "text-green-600",
      issuer: "IBM via Coursera",
      date: "December 2024",
      credentialId: "WUATI2H3IGZS",
      url:certi2,
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Certifications
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch grid-equal-rows">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card fade-in-up glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300 h-full flex flex-col"
            >
              <div className="text-center mb-6">
                <cert.icon className={`text-4xl ${cert.iconColor} mx-auto mb-4`} />
                <h3 className="text-xl font-bold">{cert.title}</h3>
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold">Issuer:</span>
                  <span className="text-accent">{cert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Date:</span>
                  <span>{cert.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Credential ID:</span>
                  <span className="text-sm">{cert.credentialId}</span>
                </div>
              </div>

              <div className="mt-6">
                {/* If url is an image → open in new tab */}
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full ${cert.bgColor} text-white ${cert.hoverColor} transition-colors`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
