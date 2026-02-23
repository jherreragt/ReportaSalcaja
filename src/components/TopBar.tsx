import { MessageCircle } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/redciudadana" },
  { label: "FB", href: "https://facebook.com/redciudadana" },
  { label: "IG", href: "https://instagram.com/redciudadana" },
];

export default function TopBar() {
  return (
    <div className="bg-blue-950 border-b border-blue-900 text-xs text-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          <span className="hidden sm:block text-blue-400">
            Sitio oficial de la{" "}
            <span className="text-blue-200 font-medium">Asociación Civil Red Ciudadana</span>
          </span>
          <span className="sm:hidden text-blue-400 text-xs">Asociación Civil Red Ciudadana</span>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/50246818166"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={12} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <span className="text-blue-800">|</span>
            {SOCIAL_LINKS.map((s, i) => (
              <span key={s.label} className="flex items-center gap-2">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {s.label}
                </a>
                {i < SOCIAL_LINKS.length - 1 && (
                  <span className="text-blue-800">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
