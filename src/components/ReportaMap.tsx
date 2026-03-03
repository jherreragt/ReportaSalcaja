import { useEffect, useRef } from "react";
import { Report } from "../types";
import { STATUS_COLORS, MUNICIPIO_CONFIG } from "../config/municipio";

interface Props {
  reports: Report[];
}

export default function ReportaMap({ reports }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      if (!mapRef.current) return;

      const map = L.map(mapRef.current, {
        center: MUNICIPIO_CONFIG.coordinates,
        zoom: 14,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;

      reports.forEach((report) => {
        if (report.lat == null || report.lng == null) return;
        const color = STATUS_COLORS[report.status] ?? "#64748b";
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:14px;height:14px;background:${color};border-radius:50%;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3)"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });
        const marker = L.marker([report.lat, report.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-size:12px;line-height:1.4">
              <strong>#${report.id}</strong><br/>
              ${report.description}<br/>
              <span style="color:${color};font-weight:600">${report.status}</span>
            </div>`
          );
        markersRef.current.push(marker);
      });
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [reports]);

  return <div ref={mapRef} className="w-full h-full" />;
}
