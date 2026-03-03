import { MessageCircle, Camera, MapPin, Bell } from "lucide-react";
import { MUNICIPIO_CONFIG } from "../config/municipio";

const STEPS = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Escribe a este número",
    detail: "+502 4681 8166",
    description: "Abre WhatsApp y escríbenos. No necesitas descargar ninguna app ni crear una cuenta.",
    color: "bg-emerald-500",
    light: "bg-emerald-50 border-emerald-100",
  },
  {
    number: "2",
    icon: Camera,
    title: "Describe el problema",
    detail: "Texto + foto + ubicación",
    description: "Cuéntanos qué pasa, manda una foto si puedes y comparte tu ubicación. En dos minutos listo.",
    color: "bg-blue-500",
    light: "bg-blue-50 border-blue-100",
  },
  {
    number: "3",
    icon: MapPin,
    title: "Queda registrado públicamente",
    detail: "Visible en el mapa",
    description: "Tu reporte aparece en el mapa municipal con nombre de categoría, fecha y estado de atención.",
    color: "bg-sky-600",
    light: "bg-sky-50 border-sky-100",
  },
  {
    number: "4",
    icon: Bell,
    title: "Seguimiento en tiempo real",
    detail: "Pendiente → En proceso → Resuelto",
    description: "Cualquier vecino puede ver el avance. La municipalidad actualiza el estado hasta cerrarlo.",
    color: "bg-teal-500",
    light: "bg-teal-50 border-teal-100",
  },
];

const CHAT_MESSAGES = [
  { from: "user", text: "Hola, quiero reportar un bache en la 4ta calle zona 1 frente a la farmacia. Les mando la foto 📸" },
  { from: "bot", text: "¡Gracias! Recibimos tu reporte. ¿Puedes compartir tu ubicación para marcarlo en el mapa?" },
  { from: "user", text: "📍 Ubicación compartida" },
  { from: "bot", text: "✅ Reporte registrado: #112 — Baches y calles, Zona 1. Ya está visible en el mapa público. Te avisamos cuando sea atendido." },
];

export default function HowItWorks() {
  return (
    <section id="como-reportar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-slate-800 mb-4">
            Reportar es <span className="text-emerald-600">muy fácil</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Solo necesitas WhatsApp. El proceso completo toma menos de 2 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            {STEPS.map(({ number, icon: Icon, title, detail, description, color, light }) => (
              <div key={number} className={`flex gap-4 p-5 rounded-2xl border ${light}`}>
                <div className={`${color} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Paso {number}</span>
                  </div>
                  <div className="font-bold text-slate-900 text-base">{title}</div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{detail}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <div className="bg-blue-900 rounded-[28px] p-3 shadow-2xl">
                <div className="bg-white rounded-[20px] overflow-hidden">
                  <div className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Salcajá Reporta</div>
                      <div className="text-emerald-200 text-xs">en línea</div>
                    </div>
                  </div>

                  <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[300px]">
                    {CHAT_MESSAGES.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
                            msg.from === "user"
                              ? "bg-[#DCF8C6] text-slate-800 rounded-br-sm"
                              : "bg-white text-slate-800 rounded-bl-sm"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white px-3 py-2 flex items-center gap-2 border-t border-slate-100">
                    <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-xs text-slate-400">
                      Escribe un mensaje...
                    </div>
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <MessageCircle size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-400 mt-3">Conversación real de ejemplo</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-500 rounded-3xl p-8 md:p-10 text-center text-white">
          <p className="text-2xl font-black mb-2">¿Listo para reportar?</p>
          <p className="text-emerald-100 mb-6 text-base">
            Toca el botón, abre WhatsApp y cuéntanos qué está pasando en tu colonia.
          </p>
          <a
            href={MUNICIPIO_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-700 font-black px-8 py-4 rounded-2xl text-base transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle size={20} />
            Abrir WhatsApp ahora
          </a>
          <p className="text-emerald-200 text-xs mt-3">+502 4681 8166 · Respuesta en horario municipal</p>
        </div>
      </div>
    </section>
  );
}
