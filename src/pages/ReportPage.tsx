import { useState } from "react";
import { ArrowLeft, Search, Filter, SlidersHorizontal } from "lucide-react";
import { useReports } from "../hooks/useReports";
import { CATEGORIES, STATUS_COLORS } from "../config/municipio";
import { Report } from "../types";
import ReportCard from "../components/report/ReportCard";
import ReportDetailPanel from "../components/report/ReportDetailPanel";
import CategoriesGrid from "../components/report/CategoriesGrid";
import ReportProcessTimeline from "../components/report/ReportProcessTimeline";

interface Props {
  onBack: () => void;
  initialReportId?: string;
}

type Tab = "reports" | "categories" | "process";

const STATUS_LIST = ["Todos", "Pendiente", "En proceso", "Resuelto"];

export default function ReportPage({ onBack, initialReportId }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("reports");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [categoryFilter, setCategoryFilter] = useState("Todos");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | undefined>();

  const { reports, loading } = useReports(categoryFilter);

  const filtered = reports.filter((r) => {
    const matchesStatus = statusFilter === "Todos" || r.status === statusFilter;
    const matchesSearch =
      !search ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase()) ||
      (r.zone ?? "").toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const TABS: { id: Tab; label: string }[] = [
    { id: "reports", label: "Reportes" },
    { id: "categories", label: "Categorías" },
    { id: "process", label: "Proceso" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-14">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Inicio</span>
            </button>
            <div className="h-4 w-px bg-slate-200" />
            <span className="font-bold text-slate-800 text-sm">Salcajá Reporta</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-2">
            Salcajá <span className="text-blue-600">Reporta</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
            Consulta los reportes ciudadanos registrados, explora las categorías de atención y conoce
            el proceso de resolución municipal.
          </p>
        </div>

        <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-white text-slate-800 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "reports" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar reporte..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-slate-700"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter size={13} className="text-slate-400 flex-shrink-0" />
                  <div className="flex flex-wrap gap-1.5">
                    {STATUS_LIST.map((s) => {
                      const color = s !== "Todos" ? STATUS_COLORS[s] : undefined;
                      return (
                        <button
                          key={s}
                          onClick={() => setStatusFilter(s)}
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-all ${
                            statusFilter === s
                              ? "text-white border-transparent"
                              : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                          }`}
                          style={statusFilter === s ? { background: color ?? "#1e3a5f" } : {}}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="ml-auto text-xs border border-slate-200 rounded-lg px-2 py-1 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <SlidersHorizontal size={10} />
                  <span>{filtered.length} resultado{filtered.length !== 1 ? "s" : ""}</span>
                </div>
              </div>

              <div className="space-y-2 max-h-[calc(100vh-22rem)] overflow-y-auto pr-1">
                {loading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-slate-200 p-4 animate-pulse">
                      <div className="flex gap-3">
                        <div className="w-9 h-9 bg-slate-100 rounded-xl" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-slate-100 rounded w-2/3" />
                          <div className="h-2.5 bg-slate-100 rounded w-full" />
                          <div className="h-2 bg-slate-100 rounded w-1/3" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : filtered.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-400 text-sm">
                    No se encontraron reportes con los filtros seleccionados.
                  </div>
                ) : (
                  filtered.map((r) => (
                    <ReportCard
                      key={r.id}
                      report={r}
                      compact
                      onClick={() => setSelectedReport(r)}
                    />
                  ))
                )}
              </div>
            </div>

            <div className="lg:col-span-3">
              <ReportDetailPanel report={selectedReport} loading={loading && !selectedReport} />
            </div>
          </div>
        )}

        {activeTab === "categories" && (
          <CategoriesGrid
            activeCategory={activeCategory}
            onSelectCategory={(cat) => {
              setActiveCategory(cat === activeCategory ? undefined : cat);
              setCategoryFilter(cat);
              setActiveTab("reports");
            }}
          />
        )}

        {activeTab === "process" && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                ¿Cómo funciona el proceso?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Cuando un ciudadano envía un reporte, sigue un proceso estructurado de 5 pasos que
                garantiza la trazabilidad y resolución de cada problema reportado en el municipio.
              </p>
            </div>
            <ReportProcessTimeline />
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: "Tiempo mínimo", value: "1–2 días", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                { label: "Tiempo promedio", value: "3–5 días", color: "bg-blue-50 text-blue-700 border-blue-200" },
                { label: "Tiempo máximo", value: "15 días", color: "bg-amber-50 text-amber-700 border-amber-200" },
              ].map(({ label, value, color }) => (
                <div key={label} className={`rounded-xl border p-4 text-center ${color}`}>
                  <div className="text-xs font-medium opacity-70 mb-1">{label}</div>
                  <div className="text-xl font-black">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
