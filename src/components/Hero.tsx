import { useEffect, useRef } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { MUNICIPIO_CONFIG } from "../config/municipio";

export default function Hero() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    let map: any;
    const initMap = async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      if (!mapRef.current || mapRef.current.dataset.initialized) return;
      mapRef.current.dataset.initialized = "true";
      map = L.map(mapRef.current, {
        center: MUNICIPIO_CONFIG.coordinates,
        zoom: MUNICIPIO_CONFIG.zoom,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        attributionControl: false,
      });
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
      }).addTo(map);
      const pulseIcon = L.divIcon({
        className: "",
        html: `<div style="position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center">
          <div style="position:absolute;width:24px;height:24px;background:#10b981;border-radius:50%;opacity:0.3;animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite"></div>
          <div style="width:12px;height:12px;background:#10b981;border-radius:50%;border:2px solid white"></div>
        </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });
      L.marker(MUNICIPIO_CONFIG.coordinates, { icon: pulseIcon }).addTo(map);
    };
    initMap();
    return () => { if (map) map.remove(); };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div ref={mapRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950/92 via-blue-900/80 to-teal-900/70" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-950 via-transparent to-transparent" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Salcajá, Quetzaltenango
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            ¿Ves un problema
            <span className="block text-emerald-400">en tu colonia?</span>
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed mb-3">
            Repórtalo por WhatsApp.<br />
            <span className="text-white font-semibold">La municipalidad lo atiende.</span>
          </p>

          <p className="text-blue-200 text-base mb-10">
            Sin apps. Sin formularios. Solo un mensaje y seguimiento público en tiempo real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={MUNICIPIO_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-black px-8 py-5 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 active:translate-y-0"
            >
              <MessageCircle size={22} />
              Reportar por WhatsApp
            </a>
            <a
              href="#reporta"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-4 rounded-2xl text-base transition-all backdrop-blur-sm"
            >
              Ver reportes del municipio
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            {[
              "Gratis para el ciudadano",
              "Sin descargar apps",
              "Seguimiento público",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-blue-200">
                <span className="text-emerald-400 font-bold">✓</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#como-reportar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-blue-400 hover:text-blue-200 transition-colors"
      >
        <span className="text-xs">¿Cómo funciona?</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
