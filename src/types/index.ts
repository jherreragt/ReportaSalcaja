export interface Report {
  id: string;
  description: string;
  category: string;
  status: "Pendiente" | "En proceso" | "Resuelto";
  date: string;
  zone?: string;
  lat?: number;
  lng?: number;
  responseTime?: number;
}

export interface ReportStats {
  total: number;
  resolved: number;
  inProgress: number;
  pending: number;
  resolutionRate: number;
  avgResponseDays: number;
  byCategory: Record<string, number>;
  byZone: Record<string, number>;
}
