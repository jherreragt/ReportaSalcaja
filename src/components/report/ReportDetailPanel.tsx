import { MapPin, Calendar, Clock, Building2, Tag, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Report } from "../../types";
import { STATUS_COLORS } from "../../config/municipio";
import { CATEGORY_CONFIG } from "../../config/categories";
import ReportProcessTimeline from "./ReportProcessTimeline";

interface Props {
  report: Report | null;
  loading?: boolean;
}

export default function ReportDetailPanel({ report, loading }: Props) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-400 gap-3">
        <Loader2 className="animate-spin" size={28} />
        <span className="text-sm">Cargando reporte...</span>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-400 gap-3">
        <AlertCircle size={32} />
        <p className="text-sm text-center">Selecciona un reporte de la lista para ver su detalle.</p>
      </div>
    );
  }

  const catConfig = CATEGORY_CONFIG[report.category] ?? CATEGORY_CONFIG["Otro"];
  const Icon = catConfig.icon;
  const statusColor = STATUS_COLORS[report.status] ?? "#64748b";

  return (
    <div className="space-y-5">
      <div className={`rounded-2xl border p-6 ${catConfig.bgColor} ${catConfig.borderColor}`}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
            <Icon size={22} className={catConfig.color} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {report.category}
              </span>
              <span
                className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white"
                style={{ background: statusColor }}
              >
                {report.status}
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-800 leading-snug">{report.description}</h2>
            <p className="text-xs text-slate-400 mt-1">Reporte #{report.id}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          {[
            { icon: Calendar, label: "Fecha", value: new Date(report.date).toLocaleDateString("es-GT", { day: "2-digit", month: "long", year: "numeric" }) },
            { icon: MapPin, label: "Zona", value: report.zone ?? "No especificada" },
            { icon: Clock, label: "Tiempo de respuesta", value: report.responseTime ? `${report.responseTime} días` : "Pendiente" },
            { icon: Building2, label: "Dirección", value: catConfig.department },
          ].map(({ icon: FieldIcon, label, value }) => (
            <div key={label} className="bg-white/70 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-0.5">
                <FieldIcon size={11} />
                <span>{label}</span>
              </div>
              <span className="text-sm font-semibold text-slate-800 leading-tight block">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-white/70 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
            <Tag size={11} />
            <span>SLA estimado</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-500" />
            <span className="text-sm font-semibold text-slate-800">{catConfig.sla}</span>
          </div>
        </div>
      </div>

      <ReportProcessTimeline report={report} />
    </div>
  );
}
