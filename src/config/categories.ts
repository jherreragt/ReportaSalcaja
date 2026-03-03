import {
  Construction,
  Lightbulb,
  Droplets,
  Trash2,
  Trees,
  Shield,
  HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CategoryConfig {
  name: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  sla: string;
  department: string;
}

export const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  "Baches y calles": {
    name: "Baches y calles",
    icon: Construction,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    description: "Daños en pavimento, baches, hundimientos y deterioro de calles y avenidas.",
    sla: "5–10 días hábiles",
    department: "Dirección de Infraestructura",
  },
  "Alumbrado público": {
    name: "Alumbrado público",
    icon: Lightbulb,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    description: "Luminarias apagadas, dañadas o con problemas en postes de luz.",
    sla: "3–5 días hábiles",
    department: "Dirección de Servicios Públicos",
  },
  "Agua y drenajes": {
    name: "Agua y drenajes",
    icon: Droplets,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "Fugas de agua, tuberías rotas, drenajes obstruidos o inundaciones.",
    sla: "1–3 días hábiles",
    department: "Dirección de Agua y Saneamiento",
  },
  "Basura y limpieza": {
    name: "Basura y limpieza",
    icon: Trash2,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    description: "Acumulación de basura, falta de recolección o limpieza en áreas públicas.",
    sla: "2–4 días hábiles",
    department: "Dirección de Medio Ambiente",
  },
  "Parques y áreas verdes": {
    name: "Parques y áreas verdes",
    icon: Trees,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description: "Mantenimiento de parques, jardines, árboles y espacios recreativos.",
    sla: "7–15 días hábiles",
    department: "Dirección de Medio Ambiente",
  },
  Seguridad: {
    name: "Seguridad",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    description: "Problemas de seguridad ciudadana, iluminación en zonas de riesgo.",
    sla: "1–2 días hábiles",
    department: "Dirección de Seguridad Municipal",
  },
  Otro: {
    name: "Otro",
    icon: HelpCircle,
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    description: "Cualquier otro tipo de problema o solicitud municipal.",
    sla: "5–10 días hábiles",
    department: "Oficina Municipal",
  },
};

export const PROCESS_STEPS = [
  {
    step: 1,
    icon: "MessageCircle",
    title: "Reporte recibido",
    description: "El ciudadano envía el reporte vía WhatsApp con descripción y ubicación.",
  },
  {
    step: 2,
    icon: "ClipboardCheck",
    title: "Registro y validación",
    description: "El equipo municipal valida el reporte y lo registra en el sistema público.",
  },
  {
    step: 3,
    icon: "Send",
    title: "Asignación",
    description: "Se asigna a la dirección municipal responsable según la categoría.",
  },
  {
    step: 4,
    icon: "Wrench",
    title: "Atención en campo",
    description: "El equipo técnico trabaja en la solución del problema reportado.",
  },
  {
    step: 5,
    icon: "CheckCircle2",
    title: "Cierre y verificación",
    description: "Se verifica la solución y el reporte se marca como Resuelto en el mapa.",
  },
];
