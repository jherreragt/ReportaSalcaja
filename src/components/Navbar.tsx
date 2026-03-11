import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import redLogo from "../assets/logos/RED.png";
import muniLogo from "../assets/logos/MUNISAL.png";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Cómo reportar", href: "#como-reportar" },
  { label: "Reportes del municipio", href: "#reporta" },
  { label: "Estadísticas", href: "#dashboard" },
  { label: "Tutoriales", href: "#tutoriales" },
];

interface Props {
  onNavigateReports?: () => void;
}

export default function Navbar({ onNavigateReports }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 ${
        scrolled ? "bg-blue-950/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              <img
                src={redLogo}
                alt="Red Ciudadana"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
              <img
                src={muniLogo}
                alt="Municipalidad de Salcajá"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-blue-500 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onNavigateReports}
              className="flex items-center gap-1.5 text-white hover:text-blue-500 text-sm font-medium transition-colors"
            >
              Ver reportes
            </button>
            <a
              href="https://wa.me/50246818166?text=Quiero%20reportar%20un%20problema%20en%20mi%20municipio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:shadow-blue-500/25 hover:shadow-lg"
            >
              Reportar ahora
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-blue-950/98 backdrop-blur-sm border-t border-blue-900">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); onNavigateReports?.(); }}
              className="flex items-center gap-1.5 text-blue-200 hover:text-white py-2 text-sm font-medium transition-colors w-full"
            >
              <FileText size={14} />
              Ver reportes
            </button>
            <a
              href="https://wa.me/50246818166?text=Quiero%20reportar%20un%20problema%20en%20mi%20municipio"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center mt-3"
            >
              Reportar ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
