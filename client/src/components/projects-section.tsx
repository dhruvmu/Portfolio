import { ExternalLink, Github, ShoppingCart, CheckSquare, Cloud, Share2, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaUtensils } from "react-icons/fa";


export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
      icon: ShoppingCart,
      gradient: "from-blue-500 to-purple-600",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Krishna kathiyaaawadi Restaurant",
      description: "A restaurant website showcasing menu items, image gallery, and hotel details with interactive UI using HTML, CSS, and JavaScript.",
      icon: FaUtensils,
      gradient: "from-green-500 to-teal-600",
      techStack: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://krishnakathiyawadi-git-main-dhruv-munjparas-projects.vercel.app/",
      codeLink: "https://github.com/dhruvmu/Restaurant_Website/tree/main/krishna%20kathiyawadi%20hotel",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      icon: Cloud,
      gradient: "from-orange-500 to-red-600",
      techStack: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with real-time metrics, post scheduling, and engagement tracking.",
      icon: Share2,
      gradient: "from-pink-500 to-rose-600",
      techStack: ["React", "Node.js", "D3.js", "Redis"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, comment system, user authentication, and SEO optimization.",
      icon: BookOpen,
      gradient: "from-indigo-500 to-purple-600",
      techStack: ["Next.js", "Express", "MongoDB", "Markdown"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Real-time Chat App",
      description: "A real-time chat application with private messaging, group chats, file sharing, and emoji support.",
      icon: MessageCircle,
      gradient: "from-cyan-500 to-blue-600",
      techStack: ["React", "Socket.io", "MongoDB", "JWT"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const techStackColors: Record<string, string> = {
    "React": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "MongoDB": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Express": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    "Socket.io": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Stripe": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Next.js": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    "Chart.js": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "D3.js": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Redis": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "JWT": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "Leaflet": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "OpenWeather API": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Markdown": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch grid-equal-rows">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card p-6 rounded-3xl h-full flex flex-col">
              <div className={`mb-6 h-44 md:h-48 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center`}>
                <project.icon className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-xs font-mono ${techStackColors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex space-x-3">
                <Button
                  size="sm"
                  className="flex-1 btn-gradient text-white hover:opacity-90"
                  asChild
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
