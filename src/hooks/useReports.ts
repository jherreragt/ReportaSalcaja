import { useState, useEffect } from "react";
import { Report, ReportStats } from "../types";

const DEMO_REPORTS: Report[] = [
  { id: "001", description: "Bache profundo frente a la farmacia central", category: "Baches y calles", status: "Resuelto", date: "2024-01-15", zone: "Zona 1", lat: 14.878, lng: -91.448, responseTime: 4 },
  { id: "002", description: "Luminaria apagada en calle principal", category: "Alumbrado público", status: "En proceso", date: "2024-01-20", zone: "Zona 2", lat: 14.876, lng: -91.450, responseTime: undefined },
  { id: "003", description: "Fuga de agua en tubería de la 3ra avenida", category: "Agua y drenajes", status: "Resuelto", date: "2024-01-22", zone: "Zona 1", lat: 14.875, lng: -91.447, responseTime: 2 },
  { id: "004", description: "Acumulación de basura en parque central", category: "Basura y limpieza", status: "Pendiente", date: "2024-02-01", zone: "Zona 3", lat: 14.877, lng: -91.449, responseTime: undefined },
  { id: "005", description: "Árbol caído bloqueando paso peatonal", category: "Parques y áreas verdes", status: "En proceso", date: "2024-02-05", zone: "Zona 2", lat: 14.879, lng: -91.451, responseTime: undefined },
  { id: "006", description: "Drenaje obstruido causando inundación", category: "Agua y drenajes", status: "Pendiente", date: "2024-02-10", zone: "Zona 1", lat: 14.874, lng: -91.446, responseTime: undefined },
  { id: "007", description: "Bache en esquina de mercado municipal", category: "Baches y calles", status: "Resuelto", date: "2024-02-12", zone: "Zona 3", lat: 14.878, lng: -91.452, responseTime: 6 },
  { id: "008", description: "Zona oscura sin alumbrado nocturno", category: "Alumbrado público", status: "Resuelto", date: "2024-02-15", zone: "Zona 2", lat: 14.876, lng: -91.448, responseTime: 3 },
];

function computeStats(reports: Report[]): ReportStats {
  const total = reports.length;
  const resolved = reports.filter((r) => r.status === "Resuelto").length;
  const inProgress = reports.filter((r) => r.status === "En proceso").length;
  const pending = reports.filter((r) => r.status === "Pendiente").length;
  const resolutionRate = total > 0 ? Math.round((resolved / total) * 100) : 0;

  const responseTimes = reports
    .filter((r) => r.responseTime !== undefined)
    .map((r) => r.responseTime as number);
  const avgResponseDays =
    responseTimes.length > 0
      ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length)
      : 0;

  const byCategory: Record<string, number> = {};
  const byZone: Record<string, number> = {};

  reports.forEach((r) => {
    byCategory[r.category] = (byCategory[r.category] ?? 0) + 1;
    if (r.zone) {
      byZone[r.zone] = (byZone[r.zone] ?? 0) + 1;
    }
  });

  return { total, resolved, inProgress, pending, resolutionRate, avgResponseDays, byCategory, byZone };
}

export function useReports(categoryFilter?: string) {
  const [reports, setReports] = useState<Report[]>([]);
  const [stats, setStats] = useState<ReportStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      try {
        const all = DEMO_REPORTS;
        const filtered =
          !categoryFilter || categoryFilter === "Todos"
            ? all
            : all.filter((r) => r.category === categoryFilter);

        setReports(filtered);
        setStats(computeStats(all));
      } catch {
        setError("No se pudieron cargar los reportes.");
      } finally {
        setLoading(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [categoryFilter]);

  return { reports, stats, loading, error };
}
