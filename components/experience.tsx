export default function Experience() {
  const experiences = [
    {
      date: "Sep 2025 - Dec 2025",
      title: "Software Engineer Intern, Infrastructure",
			img: "/img/promptly.png",
      company: "Promptly Health",
      description:
        "Automated deployments using AWS, Kubernetes, and Crossplane in a distributed, multi-tiered environment.",
      skills: ["Kubernetes", "Aws", "Crossplane", "Site Reliability Engineering"],
    },
    {
      date: "July 2025 - Sep 2025",
      title: "Software Engineer Intern",
      company: "Noesis",
			img: "/img/noesis.jpg",
      description:
        "Engineered a N8N Workflow with Python/JavaScript scripts that generate cybersecurity reports, saving 2+ weeks annually for 15+ engineers.",
      skills: ["Python", "JavaScript", "N8N", "Cybersecurity"],
    },
    {
      date: "Feb 2025 - Sep 2025",
      title: "Software Engineer",
			img: "/img/junitec.png",
      company: "Junitec",
      description:
        "Engineered a full-stack inventory management with a React.js interface and a Go backend, containerizing the entire project with Docker, which streamlined operations for a non-profit supporting 40+ abandoned children annually.",
      skills: ["Go", "Docker", "WebSockets", "React"],
    },
    {
      date: "Sep 2024 - June 2027",
      title: "Computer Engineering Degree",
			img: "/img/tecnico.png",
      company: "Instituto Superior Técnico",
      description: "Started my Bachelors degree in Computer Science and Engineering at Instituto Superior Técnico",
      skills: ["Data Structures and Algorithms", "Operating Systems", "Object-Oriented Programming"],
    },
		{
      date: "Nov 2023 - Jul 2024",
      title: "T@lentoDEI Program",
			img: "/img/uc.png",
      company: "University of Coimbra",
      description: "Built a Python system to control a Tello drone using real-time muscle signals, reducing manual input by 100%.",
      skills: ["Python", "Programming Fundamentals"],
    },
  ]

return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Experience</h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A timeline of my professional journey and key milestones in my career development.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-blue-500 to-slate-700 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
								<div className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

									{/* EMPTY SPACER COLUMN — keeps distance from center line */}
									<div className="hidden md:flex w-1/2 justify-center relative">
										<div className="absolute top-8 w-2 h-2 bg-gradient-to-br from-blue-700 to-blue-400 opacity-0"></div>
									</div>

									{/* CARD COLUMN */}
									<div className="w-full md:w-1/2">
										<div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border-l-4 border-blue-500 rounded-lg p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 h-full flex flex-col">

											<div className="flex items-start gap-4 mb-4">
												<div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-400/10 border border-blue-500/50 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
													<img
														src={exp.img || "/placeholder.svg"}
														alt={exp.company}
														className="w-full h-full object-cover"
													/>
												</div>

												<div className="flex flex-col gap-1 flex-grow">
													<span className="text-blue-500 font-bold text-sm uppercase tracking-wider">{exp.date}</span>
													<h3 className="text-2xl font-bold text-white">{exp.title}</h3>
													<p className="text-slate-300 font-medium">{exp.company}</p>
												</div>
											</div>

											<p className="text-slate-300 leading-relaxed mb-4 flex-grow">{exp.description}</p>

											<div className="flex flex-wrap gap-2 pt-4 border-t border-blue-500/30">
												{exp.skills.map((skill, idx) => (
													<span
														key={idx}
														className="inline-block bg-blue-500/10 border border-blue-500/50 text-blue-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-500/20 transition-colors"
													>
														{skill}
													</span>
												))}
											</div>

										</div>
									</div>

								</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
