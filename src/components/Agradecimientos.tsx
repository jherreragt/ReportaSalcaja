export default function Agradecimientos() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
          Con el apoyo de
        </p>
        <h2 className="text-2xl font-black text-slate-800 mb-10">
          Esta iniciativa es posible gracias a
        </h2>

        <div className="flex flex-col items-center gap-6 mb-10">
          <img
            src="https://desafios.redciudadana.org/images/posts/dise%C3%B1o-pnud-sin-gobierno-.png"
            alt="Logos de la Unión Europea, Joint SDG Fund y PNUD"
            className="h-45 sm:h-45 w-auto object-contain"
          />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Implementado por
          </span>
        </div>

        <p className="text-slate-700 text-base leading-relaxed mb-2">
          Esta iniciativa se desarrolla en el marco del programa conjunto:
        </p>
        <p className="text-slate-900 font-bold text-lg leading-snug max-w-3xl mx-auto">
          "Habilitando la transformación digital y mejorando la prestación de servicios públicos a gran escala en Guatemala"
        </p>

        {/* <div className="flex flex-wrap justify-center gap-3 mt-6">
          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-full">
            Financiado por la Unión Europea
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-full">
            Joint SDG Fund
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-full">
            Implementado por PNUD
          </span>
        </div> */}
      </div>
    </section>
  );
}
