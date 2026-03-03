export default function Agradecimientos() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Con el apoyo de
          </p>
          <h2 className="text-2xl font-black text-slate-800">
            Esta iniciativa es posible gracias a
          </h2>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200 px-6 py-10 sm:px-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src="https://desafios.redciudadana.org/images/posts/dise%C3%B1o-pnud-sin-gobierno-.png"
              alt="Logos de la Unión Europea, Joint SDG Fund y PNUD"
              className="h-28 sm:h-36 w-auto object-contain"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-slate-700 text-base leading-relaxed">
              Esta iniciativa se desarrolla en el marco del programa conjunto:
            </p>
            <p className="text-slate-900 font-bold text-lg mt-2 leading-snug">
              "Habilitando la transformación digital y mejorando la prestación de servicios públicos a gran escala en Guatemala"
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-5">
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                Financiado por la Unión Europea
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                Joint SDG Fund
              </span>
              <span className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                Implementado por PNUD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
