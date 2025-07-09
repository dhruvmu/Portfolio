import { ExternalLink } from "lucide-react";
import { FaReact, FaNodeJs, FaAws, FaGoogle, FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function CertificationsSection() {
  const certifications = [
    {
      title: "React Developer Certification",
      icon: FaReact,
      iconColor: "text-blue-500",
      issuer: "Meta",
      date: "March 2024",
      credentialId: "RCT-2024-001",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "Node.js Developer Certification",
      icon: FaNodeJs,
      iconColor: "text-green-500",
      issuer: "OpenJS Foundation",
      date: "February 2024",
      credentialId: "NJS-2024-002",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      title: "MongoDB Developer Certification",
      icon: SiMongodb,
      iconColor: "text-green-600",
      issuer: "MongoDB University",
      date: "January 2024",
      credentialId: "MDB-2024-003",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
    {
      title: "AWS Cloud Practitioner",
      icon: FaAws,
      iconColor: "text-orange-500",
      issuer: "Amazon Web Services",
      date: "December 2023",
      credentialId: "AWS-2023-004",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      title: "Google Analytics Certified",
      icon: FaGoogle,
      iconColor: "text-blue-600",
      issuer: "Google",
      date: "November 2023",
      credentialId: "GA-2023-005",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      title: "GitHub Actions Certification",
      icon: FaGithub,
      iconColor: "text-gray-600",
      issuer: "GitHub",
      date: "October 2023",
      credentialId: "GH-2023-006",
      bgColor: "bg-gray-600",
      hoverColor: "hover:bg-gray-700",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Certifications
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <cert.icon className={`text-4xl ${cert.iconColor} mx-auto mb-4`} />
                <h3 className="text-xl font-bold">{cert.title}</h3>
              </div>
              <div className="space-y-3">
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
                <Button 
                  className={`w-full ${cert.bgColor} text-white ${cert.hoverColor} transition-colors`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
