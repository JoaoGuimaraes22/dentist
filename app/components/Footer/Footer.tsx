"use client";

type Dict = {
  logo: string;
  tagline: string;
  description: string;
  nav_services: string;
  nav_team: string;
  nav_technology: string;
  nav_insurance: string;
  nav_contact: string;
  nav_privacy: string;
  nav_terms: string;
  legal_ers: string;
  legal_reg: string;
  legal_omd: string;
  copyright: string;
  address: string;
  nav_col_heading: string;
  scroll_top: string;
};

type Props = {
  dict: Dict;
};

const NAV_LINKS = [
  { key: "nav_services", href: "#servicos" },
  { key: "nav_team", href: "#equipa" },
  { key: "nav_technology", href: "#tecnologia" },
  { key: "nav_insurance", href: "#seguros" },
  { key: "nav_contact", href: "#contacto" },
] as const;

export default function Footer({ dict }: Props) {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    // pb-20 md:pb-0 — clears the fixed BookingBar on mobile
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-baseline gap-2 mb-1 group"
            >
              <span
                className="text-xl text-white group-hover:text-teal-400 transition-colors"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {dict.logo}
              </span>
              <span className="text-xs text-gray-500 border-l border-gray-700 pl-2">
                {dict.tagline}
              </span>
            </button>

            <p className="text-sm leading-relaxed max-w-xs mt-3 mb-5">
              {dict.description}
            </p>

            {/* Quick contact */}
            <div className="space-y-1.5 text-sm">
              <a
                href="tel:+351214567890"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 text-teal-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +351 214 567 890
              </a>
              <a
                href="mailto:info@sorrisoplus.pt"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 text-teal-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                info@sorrisoplus.pt
              </a>
              <p className="flex items-center gap-2 text-gray-500">
                <svg
                  className="w-3.5 h-3.5 text-teal-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {dict.address}
              </p>
            </div>
          </div>

          {/* Nav col */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              {dict.nav_col_heading}
            </p>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {dict[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal col */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Legal
            </p>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  {dict.nav_privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  {dict.nav_terms}
                </a>
              </li>
            </ul>

            {/* Regulatory info */}
            <div className="border-t border-gray-800 pt-4 space-y-1.5">
              <p className="text-xs text-gray-600">{dict.legal_ers}</p>
              <p className="text-xs text-gray-600">{dict.legal_reg}</p>
              <p className="text-xs text-gray-600">{dict.legal_omd}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {year} {dict.copyright}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-teal-400 transition-colors group"
          >
            {dict.scroll_top}
            <svg
              className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
