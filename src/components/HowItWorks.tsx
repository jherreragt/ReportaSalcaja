import { MessageCircle } from "lucide-react";
import { MUNICIPIO_CONFIG } from "../config/municipio";
import celularImg from "../assets/imagenes/celular.png";
import stepIcon1 from "../assets/iconos/SR-01.png";
import stepIcon2 from "../assets/iconos/SR-02.png";
import stepIcon3 from "../assets/iconos/SR-03.png";
import stepIcon4 from "../assets/iconos/SR-04.png";

const STEPS = [
  {
    number: "1",
    icon: stepIcon1,
    title: "Escribe a este número",
    detail: "+502 4681 8166",
    description: "Abre WhatsApp y escríbenos. No necesitas descargar ninguna app ni crear una cuenta.",
    color: "bg-blue-500",
    light: "bg-blue-50 border-blue-100",
  },
  {
    number: "2",
    icon: stepIcon2,
    title: "Describe el problema",
    detail: "Texto + foto + ubicación",
    description: "Cuéntanos qué pasa, manda una foto si puedes y comparte tu ubicación. En dos minutos listo.",
    color: "bg-blue-500",
    light: "bg-blue-50 border-blue-100",
  },
  {
    number: "3",
    icon: stepIcon3,
    title: "Queda registrado públicamente",
    detail: "Visible en el mapa",
    description: "Tu reporte aparece en el mapa municipal con nombre de categoría, fecha y estado de atención.",
    color: "bg-blue-500",
    light: "bg-blue-50 border-blue-100",
  },
  {
    number: "4",
    icon: stepIcon4,
    title: "Seguimiento en tiempo real",
    detail: "Pendiente → En proceso → Resuelto",
    description: "Cualquier vecino puede ver el avance. La municipalidad actualiza el estado hasta cerrarlo.",
    color: "bg-blue-500",
    light: "bg-blue-50 border-blue-100",
  },
];
export default function HowItWorks() {
  return (
    <section id="como-reportar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-slate-800 mb-4">
            Reportar es <span className="text-blue-500">muy fácil</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Solo necesitas WhatsApp. El proceso completo toma menos de 2 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          <div className="space-y-4">
            {STEPS.map(({ number, icon, title, detail, description, color, light }) => (
              <div key={number} className={`flex gap-4 p-5 rounded-2xl border ${light}`}>
                <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                  <img src={icon} alt={`Paso ${number}`} className="w-12 h-12 object-contain" />
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

          <div className="flex justify-center h-full">
            <div className="bg-white rounded-3xl shadow-sm w-full h-full flex items-center justify-center">
              <img
                src={celularImg}
                alt="Celular con WhatsApp"
                className="w-full h-full object-contain p-6"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-500 rounded-3xl p-8 md:p-10 text-center text-white">
          <p className="text-2xl font-black mb-2">¿Listo para reportar?</p>
          <p className="text-white mb-6 text-base">
            Toca el botón, abre WhatsApp y cuéntanos qué está pasando en tu colonia.
          </p>
          <a
            href={MUNICIPIO_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white font-black px-8 py-4 rounded-2xl text-base transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle size={20} />
            Abrir WhatsApp ahora
          </a>
          <p className="text-white text-xs mt-3">+502 4681 8166 · Respuesta en horario municipal</p>
        </div>
      </div>
    </section>
  );
}
