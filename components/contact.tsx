import { Github, Linkedin, Mail} from "lucide-react"

export default function Contact() {
  return (
    <footer id="contact" className="bg-slate-900/50 py-20 border-t border-blue-700/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">Me</span>
        </h2>

        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          I am always interested in learning and connecting so feel free to reach out!
        </p>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, label: "Email", value: "afonso.manata.cruz@gmail.com", href: "mailto:afonso.manata.cruz@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/afonso-manata", href: "https://www.linkedin.com/in/afonso-manata" },
            { icon: Github, label: "GitHub", value: "github.com/AfonsoManata", href: "https://github.com/AfonsoManata" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="group">
              <div className="bg-slate-800 border border-blue-700/30 rounded-lg p-6 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-700/20 transition-all hover:scale-105">
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300" />
                <h3 className="font-semibold mb-1">{label}</h3>
                <p className="text-slate-400 text-sm">{value}</p>
              </div>
            </a>
          ))}
        </div>


        <div className="border-t border-blue-700/20 pt-8">
          <p className="text-slate-700 text-sm text-white">© 2025 | Afonso Manata</p>
        </div>
      </div>
    </footer>
  )
}
