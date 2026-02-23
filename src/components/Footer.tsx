import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-300 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">CM</span>
              </div>
              <div>
                <div className="text-white font-black text-lg leading-tight">
                  Conecta: <span className="text-emerald-400">Salcajá</span>
                </div>
                <div className="text-blue-400 text-xs">Plataforma Integral de Participación Digital Local</div>
              </div>
            </div>
            <p className="text-blue-400 text-sm leading-relaxed max-w-xs">
              Proyecto de innovación pública municipal para fortalecer el diálogo
              entre ciudadanía y gobierno local a través de tecnología accesible y transparente.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/50246818166"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-white" />
              </a>
              {["X", "FB", "IG"].map((social) => (
                <div key={social} className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center text-xs font-bold text-blue-400">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Plataforma</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Conecta Reporta", "#reporta"],
                ["Dashboard", "#dashboard"],
                ["Cómo funciona", "#como-funciona"],
                ["Módulos futuros", "#plataforma"],
                ["Tecnología", "#tecnologia"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 text-emerald-500 flex-shrink-0" />
                <span>Municipalidad de Salcajá<br />Quetzaltenango, Guatemala</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-emerald-500 flex-shrink-0" />
                <a href="tel:+50246818166" className="hover:text-white transition-colors">+502 4681 8166</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-emerald-500 flex-shrink-0" />
                <a href="mailto:info@conectamunicipio.gt" className="hover:text-white transition-colors">
                  info@conectamunicipio.gt
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://wa.me/50246818166?text=Quiero%20reportar%20un%20problema%20en%20mi%20municipio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-all"
              >
                <MessageCircle size={15} />
                Reportar ahora
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 flex flex-col items-center gap-3 text-xs text-center">
          <p className="text-blue-700">
            &copy; 2025 Red Ciudadana &mdash; Asociación Civil Red Ciudadana
          </p>
          <p className="text-blue-700">
            Desarrollado con <span className="text-blue-500 font-medium">Conecta: Municipio</span> (software de código abierto) de Red Ciudadana
          </p>
        </div>
      </div>
    </footer>
  );
}
