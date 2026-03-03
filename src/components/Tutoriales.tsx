import { useState } from "react";
import { Play, BookOpen, CheckCircle2, ChevronRight } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  tag: string;
  tagColor: string;
  embedUrl: string;
}

const VIDEOS: Video[] = [
  {
    id: "1",
    title: "¿Cómo hacer un reporte exitoso?",
    description: "Aprende los pasos clave para enviar un reporte claro y completo que tenga más probabilidades de ser atendido rápidamente.",
    duration: "3:45",
    thumbnail: "https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&w=800",
    tag: "Básico",
    tagColor: "bg-emerald-500",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Cómo tomar fotos para tu reporte",
    description: "Una buena foto acelera la atención. En este tutorial te enseñamos ángulos, iluminación y qué incluir en la imagen.",
    duration: "2:30",
    thumbnail: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Básico",
    tagColor: "bg-emerald-500",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Cómo compartir tu ubicación exacta",
    description: "La ubicación precisa es fundamental. Mira cómo enviar coordenadas o un pin desde WhatsApp para que el municipio llegue al lugar correcto.",
    duration: "2:00",
    thumbnail: "https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Básico",
    tagColor: "bg-emerald-500",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Seguimiento de tu reporte en el mapa",
    description: "Una vez enviado tu reporte, descubre cómo encontrarlo en el mapa público y entender cada estado del proceso.",
    duration: "4:10",
    thumbnail: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Seguimiento",
    tagColor: "bg-blue-500",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Categorías de reporte: ¿cuál elegir?",
    description: "Conoce cada categoría disponible (calles, agua, alumbrado, etc.) y cómo elegir la correcta para que tu caso llegue al área municipal adecuada.",
    duration: "3:00",
    thumbnail: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Avanzado",
    tagColor: "bg-amber-500",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "¿Qué pasa después de reportar?",
    description: "Entiende el proceso interno: validación, asignación, atención en campo y cierre. Transparencia total del ciclo de un reporte ciudadano.",
    duration: "5:20",
    thumbnail: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Proceso",
    tagColor: "bg-teal-500",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const TIPS = [
  "Sé específico en la descripción del problema",
  "Incluye una foto clara del problema",
  "Comparte tu ubicación exacta por WhatsApp",
  "Indica la calle o referencia más cercana",
  "Menciona hace cuánto tiempo ocurre el problema",
];

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video bg-slate-900">
          <iframe
            className="w-full h-full"
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white ${video.tagColor} mr-2`}>
                {video.tag}
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-2">{video.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{video.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-4 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-blue-950/30 group-hover:bg-blue-950/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play size={18} className="text-blue-800 ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-medium px-2 py-0.5 rounded-md">
          {video.duration}
        </div>
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white ${video.tagColor}`}>
            {video.tag}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
          {video.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
          {video.description}
        </p>
        <div className="flex items-center gap-1 mt-3 text-blue-600 text-xs font-semibold">
          <span>Ver tutorial</span>
          <ChevronRight size={12} />
        </div>
      </div>
    </button>
  );
}

export default function Tutoriales() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <section id="tutoriales" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <BookOpen size={14} />
            Aprende a reportar mejor
          </div>
          <h2 className="text-4xl font-black text-slate-800 mb-4">
            Tutoriales <span className="text-blue-600">en video</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Guías rápidas para que tus reportes sean atendidos de forma más rápida y efectiva por el municipio de Salcajá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VIDEOS.map((video) => (
                <VideoCard key={video.id} video={video} onClick={() => setActiveVideo(video)} />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">
                Consejos para un buen reporte
              </h3>
              <ul className="space-y-3">
                {TIPS.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-800 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">¿Listo para reportar?</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                Aplica lo aprendido y envía tu primer reporte ahora mismo vía WhatsApp.
              </p>
              <a
                href="https://wa.me/50246818166?text=Quiero%20reportar%20un%20problema%20en%20mi%20municipio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm"
              >
                Reportar ahora
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
