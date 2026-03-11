import { CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "../../config/categories";
import { Report } from "../../types";
import stepIcon1 from "../../assets/iconos/SR-16.png";
import stepIcon2 from "../../assets/iconos/SR-17.png";
import stepIcon3 from "../../assets/iconos/SR-18.png";
import stepIcon4 from "../../assets/iconos/SR-19.png";

const STEP_IMAGE_ICONS: Record<number, string> = {
  1: stepIcon1,
  2: stepIcon2,
  3: stepIcon3,
  4: stepIcon4,
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
            const isDone = activeStep >= step.step;
            const isActive = activeStep === step.step;
            const stepImage = STEP_IMAGE_ICONS[step.step];
            return (
              <div key={step.step} className="relative flex gap-4">
                <div
                  className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step.step === 5
                      ? "bg-black border-black text-white"
                      : isDone
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "bg-white border-slate-200 text-slate-400"
                  } ${isActive ? "ring-4 ring-emerald-100" : ""}`}
                >
                  {step.step === 5 ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <img src={stepImage} alt={step.title} className="w-full h-full object-contain border-0 rounded-none" />
                  )}
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
                      <span className="text-[10px] bg-emerald-100 text-blue-500 px-2 py-0.5 rounded-full font-semibold">
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
