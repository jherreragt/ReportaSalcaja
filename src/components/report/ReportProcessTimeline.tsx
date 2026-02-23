import {
  MessageCircle,
  ClipboardCheck,
  Send,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { PROCESS_STEPS } from "../../config/categories";
import { Report } from "../../types";

const STEP_ICONS = {
  MessageCircle,
  ClipboardCheck,
  Send,
  Wrench,
  CheckCircle2,
};

const STATUS_ACTIVE_STEP: Record<string, number> = {
  Pendiente: 2,
  "En proceso": 4,
  Resuelto: 5,
};

interface Props {
  report?: Report;
}

export default function ReportProcessTimeline({ report }: Props) {
  const activeStep = report ? STATUS_ACTIVE_STEP[report.status] ?? 1 : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6">Proceso de atención</h3>
      <div className="relative">
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-slate-200" />
        <div className="space-y-6">
          {PROCESS_STEPS.map((step) => {
            const Icon = STEP_ICONS[step.icon as keyof typeof STEP_ICONS];
            const isDone = activeStep >= step.step;
            const isActive = activeStep === step.step;
            return (
              <div key={step.step} className="relative flex gap-4">
                <div
                  className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    isDone
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "bg-white border-slate-200 text-slate-400"
                  } ${isActive ? "ring-4 ring-emerald-100" : ""}`}
                >
                  <Icon size={16} />
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className={`text-sm font-semibold ${
                        isDone ? "text-slate-800" : "text-slate-400"
                      }`}
                    >
                      {step.title}
                    </span>
                    {isActive && report && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">
                        Actual
                      </span>
                    )}
                  </div>
                  <p className={`text-xs leading-relaxed ${isDone ? "text-slate-500" : "text-slate-400"}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
