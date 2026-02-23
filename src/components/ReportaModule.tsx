import { useState } from "react";
import { MessageCircle, Filter, Loader2, AlertCircle } from "lucide-react";
import { useReports } from "../hooks/useReports";
import { CATEGORIES, STATUS_COLORS, MUNICIPIO_CONFIG } from "../config/municipio";
import ReportaMap from "./ReportaMap";

const STATUS_LIST = ["Todos", "Pendiente", "En proceso", "Resuelto"];

export default function ReportaModule() {
  const [categoryFilter, setCategoryFilter] = useState("Todos");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const { reports, stats, loading, error } = useReports(categoryFilter);

  const filtered =
    statusFilter === "Todos"
      ? reports
      : reports.filter((r) => r.status === statusFilter);

  return (
    <section id="reporta" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Módulo Activo
          </div>
          <h2 className="text-4xl font-black text-slate-800 mb-4">
            Conecta <span className="text-emerald-600">Reporta</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Sistema de reportes ciudadanos vía WhatsApp con visualización pública
            y seguimiento en tiempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Filter size={15} />
                  <span className="font-medium">Filtros:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {STATUS_LIST.map((s) => {
                    const color = s === "Todos" ? undefined : STATUS_COLORS[s];
                    return (
                      <button
                        key={s}
                        onClick={() => setStatusFilter(s)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                          statusFilter === s
                            ? "text-white border-transparent"
                            : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                        }`}
                        style={
                          statusFilter === s
                            ? { background: color ?? "#1e3a5f", borderColor: "transparent" }
                            : {}
                        }
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="ml-auto text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="relative" style={{ height: "420px" }}>
                {loading ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
                    <Loader2 className="animate-spin text-emerald-500 mb-2" size={28} />
                    <span className="text-sm text-slate-500">Cargando reportes...</span>
                  </div>
                ) : error ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 gap-2">
                    <AlertCircle className="text-amber-400" size={28} />
                    <span className="text-sm text-slate-500 text-center px-4">{error}</span>
                    <span className="text-xs text-slate-400">Mostrando datos de demostración</span>
                  </div>
                ) : (
                  <ReportaMap reports={filtered} />
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-500">
                {Object.entries(STATUS_COLORS).map(([status, color]) => (
                  <div key={status} className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full inline-block border border-white shadow-sm" style={{ background: color }} />
                    {status}
                  </div>
                ))}
                <span className="ml-auto font-medium text-slate-600">
                  {filtered.length} reporte{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {stats && (
              <>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Resumen</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Total reportes", value: stats.total, color: "bg-blue-800" },
                      { label: "Resueltos", value: stats.resolved, color: "bg-emerald-500" },
                      { label: "En proceso", value: stats.inProgress, color: "bg-blue-500" },
                      { label: "Pendientes", value: stats.pending, color: "bg-amber-400" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${color}`} />
                          <span className="text-sm text-slate-600">{label}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-800">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Tasa de resolución</span>
                      <span className="font-black text-emerald-600 text-lg">{stats.resolutionRate}%</span>
                    </div>
                    <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all"
                        style={{ width: `${stats.resolutionRate}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Por categoría</h3>
                  <div className="space-y-2">
                    {Object.entries(stats.byCategory)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 5)
                      .map(([cat, count]) => (
                        <div key={cat}>
                          <div className="flex justify-between text-xs text-slate-600 mb-0.5">
                            <span>{cat}</span>
                            <span className="font-semibold">{count}</span>
                          </div>
                          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                              style={{ width: `${(count / stats.total) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}

            <a
              href={MUNICIPIO_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Reportar por WhatsApp
            </a>
            <p className="text-center text-xs text-slate-400">+502 4681 8166</p>
          </div>
        </div>
      </div>
    </section>
  );
}
