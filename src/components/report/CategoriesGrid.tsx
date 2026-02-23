import { CATEGORY_CONFIG } from "../../config/categories";
import { Clock, Building2, CheckCircle2 } from "lucide-react";

interface Props {
  onSelectCategory?: (category: string) => void;
  activeCategory?: string;
}

export default function CategoriesGrid({ onSelectCategory, activeCategory }: Props) {
  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <CheckCircle2 size={14} />
          Categorías de reporte
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-3">
          ¿Qué tipo de problema puedo reportar?
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
          Cada reporte es asignado a la dirección municipal responsable según su categoría.
          Conoce los tiempos de atención esperados.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Object.values(CATEGORY_CONFIG).map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory?.(cat.name)}
              className={`group text-left rounded-2xl border p-5 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                isActive
                  ? `${cat.bgColor} ${cat.borderColor} shadow-md`
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${
                  isActive ? `${cat.bgColor}` : "bg-slate-50 group-hover:bg-slate-100"
                }`}
              >
                <Icon size={20} className={cat.color} />
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">{cat.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
                {cat.description}
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock size={10} />
                  <span>{cat.sla}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Building2 size={10} />
                  <span className="truncate">{cat.department}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
