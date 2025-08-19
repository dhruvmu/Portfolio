import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4 text-gradient">
            Dhruv Munjpara
          </div>
          <p className="text-lg mb-6 opacity-80">
            Building digital experiences that matter
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-2xl hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon />
              </a>
            ))}
          </div>
          <p className="opacity-60">
            © {currentYear} Dhruv Munjpara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
