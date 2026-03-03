import { Report } from "../../types";
import { STATUS_COLORS } from "../../config/municipio";
import { CATEGORY_CONFIG } from "../../config/categories";
import { Calendar, MapPin } from "lucide-react";

interface Props {
  report: Report;
  compact?: boolean;
  onClick?: () => void;
}

export default function ReportCard({ report, compact, onClick }: Props) {
  const catConfig = CATEGORY_CONFIG[report.category] ?? CATEGORY_CONFIG["Otro"];
  const Icon = catConfig.icon;
  const statusColor = STATUS_COLORS[report.status] ?? "#64748b";

  return (
    <button
      onClick={onClick}
      className={`w-full text-left bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all p-4 ${
        compact ? "py-3" : "p-5"
      }`}
    >
      <div className="flex gap-3">
        <div
          className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${catConfig.bgColor}`}
        >
          <Icon size={16} className={catConfig.color} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
              style={{ background: statusColor }}
            >
              {report.status}
            </span>
            <span className="text-xs text-slate-400 truncate">{report.category}</span>
          </div>
          <p className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug">
            {report.description}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar size={10} />
              {new Date(report.date).toLocaleDateString("es-GT", {
                day: "2-digit",
                month: "short",
              })}
            </span>
            {report.zone && (
              <span className="flex items-center gap-1">
                <MapPin size={10} />
                {report.zone}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
