import { useReports } from "../hooks/useReports";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { TrendingUp, CheckCircle2, Clock, FileText } from "lucide-react";

const PIE_COLORS = ["#F59E0B", "#3B82F6", "#10B981", "#64748b", "#06b6d4"];
const BAR_COLOR = "#3B82F6";

export default function Dashboard() {
  const { stats, loading } = useReports();

  if (loading || !stats) {
    return (
      <section id="dashboard" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-48">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  const categoryData = Object.entries(stats.byCategory).map(([name, value]) => ({ name, value }));
  const statusData = [
    { name: "Pendiente", value: stats.pending },
    { name: "En proceso", value: stats.inProgress },
    { name: "Resuelto", value: stats.resolved },
  ];
  const zoneData = Object.entries(stats.byZone).map(([name, value]) => ({ name, value }));

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <TrendingUp size={14} />
            Datos en tiempo real
          </div>
          <h2 className="text-4xl font-black text-slate-800 mb-4">
            Dashboard de <span className="text-blue-600">Transparencia</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Seguimiento público y abierto del estado de los reportes ciudadanos en Salcajá.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            {
              icon: FileText,
              label: "Total de reportes",
              value: stats.total,
              color: "bg-blue-800",
              textColor: "text-white",
              sub: "Desde el inicio",
            },
            {
              icon: CheckCircle2,
              label: "Tasa de resolución",
              value: `${stats.resolutionRate}%`,
              color: "bg-emerald-500",
              textColor: "text-white",
              sub: `${stats.resolved} resueltos`,
            },
            {
              icon: Clock,
              label: "Tiempo de respuesta",
              value: `${stats.avgResponseDays}d`,
              color: "bg-blue-600",
              textColor: "text-white",
              sub: "Promedio",
            },
            {
              icon: TrendingUp,
              label: "En seguimiento",
              value: stats.inProgress + stats.pending,
              color: "bg-amber-500",
              textColor: "text-white",
              sub: "Reportes activos",
            },
          ].map(({ icon: Icon, label, value, color, textColor, sub }) => (
            <div
              key={label}
              className={`${color} ${textColor} rounded-2xl p-5 flex flex-col gap-2`}
            >
              <div className="flex items-center gap-2 opacity-80">
                <Icon size={16} />
                <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
              </div>
              <div className="text-3xl font-black">{value}</div>
              <div className="text-xs opacity-70">{sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5">
              Reportes por categoría
            </h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={categoryData} margin={{ left: -20 }}>
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} />
                <YAxis tick={{ fontSize: 11, fill: "#64748b" }} />
                <Tooltip
                  contentStyle={{
                    background: "#1e3a5f",
                    border: "none",
                    borderRadius: "8px",
                    color: "#f0f9ff",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="value" fill={BAR_COLOR} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Estado actual
              </h3>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={statusData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value">
                    {statusData.map((_, idx) => (
                      <Cell key={idx} fill={PIE_COLORS[idx]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#1e293b",
                      border: "none",
                      borderRadius: "8px",
                      color: "#f8fafc",
                      fontSize: "12px",
                    }}
                  />
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "11px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {zoneData.length > 0 && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Por zona
                </h3>
                <div className="space-y-2">
                  {zoneData.sort((a, b) => b.value - a.value).map(({ name, value }) => (
                    <div key={name}>
                      <div className="flex justify-between text-xs text-slate-600 mb-0.5">
                        <span>{name}</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                          style={{ width: `${(value / stats.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          Datos actualizados automáticamente desde Google Sheets. Última actualización al cargar la página.
        </div>
      </div>
    </section>
  );
}
