import { MessageCircle, Twitter, Facebook, Instagram } from "lucide-react";
import faviconLogo from "../assets/logos/FAVICON.png";

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/redciudadana", icon: Twitter },
  { label: "Facebook", href: "https://facebook.com/redciudadana", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/redciudadana", icon: Instagram },
];

export default function TopBar() {
  return (
    <div className="bg-white border-b border-blue-900 text-xs text-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          <div className="flex items-center gap-2">
            <img
              src={faviconLogo}
              alt="Red Ciudadana"
              className="h-4 w-4 object-contain"
            />
            <span className="hidden sm:block text-gray-900">
              Sitio oficial de la{" "}
              <span className="text-gray-900 font-medium">Asociación Civil Red Ciudadana</span>
            </span>
            <span className="sm:hidden text-gray-900 text-xs">Asociación Civil Red Ciudadana</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/50246818166"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-900 hover:text-blue-500 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={14} />
              <span className="sr-only">WhatsApp</span>
            </a>
            <span className="text-gray-900">|</span>
            {SOCIAL_LINKS.map((s, i) => (
              <span key={s.label} className="flex items-center gap-2">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-500 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={14} />
                </a>
                {i < SOCIAL_LINKS.length - 1 && (
                  <span className="text-gray-900">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
