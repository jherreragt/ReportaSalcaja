export const MUNICIPIO_CONFIG = {
  name: "Salcajá",
  department: "Quetzaltenango",
  coordinates: [14.8769, -91.4487] as [number, number],
  zoom: 14,
  whatsappNumber: "50246818166",
  whatsappLink: "https://wa.me/50246818166?text=Quiero%20reportar%20un%20problema%20en%20mi%20municipio",
};

export const CATEGORIES = [
  "Todos",
  "Baches y calles",
  "Alumbrado público",
  "Agua y drenajes",
  "Basura y limpieza",
  "Parques y áreas verdes",
  "Seguridad",
  "Otro",
];

export const STATUS_COLORS: Record<string, string> = {
  Pendiente: "#F59E0B",
  "En proceso": "#3B82F6",
  Resuelto: "#10B981",
};
