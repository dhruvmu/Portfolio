import { User, Code, Users, Lightbulb, GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function AboutSection() {
  const highlights = [
    { icon: Code, label: "Clean Code" },
    { icon: Users, label: "Team Work" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: GraduationCap, label: "Learning" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Get to know me better and discover my journey in web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-3xl">
            {/* Profile image placeholder with modern frame */}
            <div className="w-80 h-80 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <User className="h-24 w-24 text-muted-foreground" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Alex Johnson</h3>
              <p className="text-accent font-semibold mb-4">Full Stack Developer</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="text-2xl hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="#" 
                  className="text-2xl hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="#" 
                  className="text-2xl hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-accent">My Journey</h3>
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with a love for creating innovative web solutions. 
                Currently pursuing my degree in Computer Science while building real-world applications 
                that solve meaningful problems.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise spans the entire web development stack - from crafting intuitive user 
                interfaces with React to building robust backends with Node.js and managing data 
                with MongoDB. I believe in clean code, user-centric design, and continuous learning.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-accent">What I Love</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-primary" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
