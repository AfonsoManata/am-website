import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
					<div className="mb-8 flex justify-center">
						<div className="relative w-32 h-32 md:w-40 md:h-40">
							{/* Optional blurred background */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-600 rounded-full opacity-20 blur-xl"></div>

							{/* Profile image */}
							<div className="absolute inset-0 rounded-full overflow-hidden">
								<img
									src="/img/FotoPerfil.jpg"
									alt="Profile"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3 font-sans">
            {" "}
            <span className="bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent font-medium">
              Afonso Manata
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-light text-slate-400 mb-8 tracking-wide font-sans">
            Computer Engineering Student @ IST 
					</h2>

          <p className="text-base md:text-lg text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-sans">
            I am passionate about building scalable, reliable systems that create real-world impact. I love tackling challenges, turning ideas into solutions, and learning along the way. I’m seeking opportunities and collaborations where I can grow, contribute, and make a difference!
					</p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-10 justify-center">
            {[
              { icon: Github, href: "https://github.com/AfonsoManata", label: "GitHub" },
              { icon: Linkedin, href:"https://www.linkedin.com/in/afonso-manata", label: "LinkedIn" },
              { icon: Mail, href:"mailto:afonso.manata.cruz@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+351917761213", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full border-2 border-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-slate-950 transition-all hover:shadow-lg hover:shadow-blue-700/50 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
						href="/img/cv.pdf"
						download
						className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold rounded-md hover:shadow-lg hover:shadow-blue-700/50 hover:scale-105 transition-all font-sans"
					>
						Download CV
					</a>
        </div>
      </div>
    </section>
  )
}
