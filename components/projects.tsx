import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "JustAQuote",
      description:
        "Implemented a REST API in Spring Boot, backed by PostgreSQL DB and a Redis Cache, to deliver a daily motivational quote.",
      tags:  ["REST API", "Spring-Boot", "Redis", "PostgreSQL"],
      image: "/img/justaquote.png",
      links: { github: "https://github.com/AfonsoManata/JustAQuote" },
    },
    {
      title: "GemSolver",
      description:
    	"Engineered an AI-powered screenshot-to-answer tool with Node.js and Gemini API, reducing search time by 75\%.",      
	  tags: ["Node.js", "Gemini API", "Tesseract.js", "Async"],
      image: "/img/gemsolver.png",
      links: { github: "https://github.com/AfonsoManata/GemSolver"},
    },
    {
      title: "Vaccine Management System",
      description: "Built a Vaccine Management System delivers a fast, reliable, and highly efficient solution for managing vaccine inventories, using AVL trees in C.",
      tags: ["AVL Trees","Hash Maps", "C"],
      image: "/img/iaed_project.png",
      links: { github: "https://github.com/AfonsoManata/IAED-Project"},
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-blue-700/50 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-blue-700/20 to-blue-400/20 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-4xl font-bold text-slate-700">{index + 1}</div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-700/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
