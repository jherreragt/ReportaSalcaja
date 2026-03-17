import { MessageCircle, Twitter, Facebook, Instagram } from "lucide-react";
import redLogo from "../assets/logos/RED.png";
import muniLogo from "../assets/logos/MUNISAL.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={redLogo} alt="Red Ciudadana" className="h-14 w-auto object-contain" />
              <img src={muniLogo} alt="Municipalidad de Salcajá" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Proyecto de innovación pública municipal para fortalecer el diálogo entre ciudadanía y gobierno local a través de
              tecnología accesible y transparente.
            </p>

            <div>
              <p className="text-sm font-semibold mb-3">Síguenos</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/redciudadana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-10 h-10 rounded-md bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:text-blue-500 transition-colors"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://facebook.com/redciudadana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-md bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:text-blue-500 transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://instagram.com/redciudadana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-md bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:text-blue-500 transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://wa.me/50246818166"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-md bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:text-blue-500 transition-colors"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Mantente informado sobre las últimas actualizaciones
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {[
                ["Salcajá Reporta", "#reporta"],
                ["Dashboard", "#dashboard"],
                ["Cómo funciona", "#como-reportar"],
                ["Módulos futuros", "#plataforma"],
                ["Tecnología", "#tecnologia"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-blue-500 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5">Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Municipalidad de Salcajá</li>
              <li>Quetzaltenango, Guatemala</li>
              <li>+502 4681 8166</li>
              <li>info@conectamunicipio.gt</li>
            </ul>

            <div className="mt-6">
              <a
                href="https://wa.me/50246818166?text=Quiero%20reportar%20un%20problema%20en%20mi%20municipio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-white hover:text-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all"
              >
                <MessageCircle size={16} />
                Reportar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
