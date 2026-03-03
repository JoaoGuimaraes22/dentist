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
};

type Props = {
  dict: Dict;
};

export default function Footer({ dict }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p
              className="text-xl text-white mb-1"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {dict.logo}
            </p>
            <p className="text-xs text-gray-500 mb-4">{dict.tagline}</p>
            <p className="text-sm leading-relaxed max-w-xs">{dict.description}</p>
            <p className="text-sm mt-4">{dict.address}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Clínica</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">
                  {dict.nav_services}
                </a>
              </li>
              <li>
                <a href="#equipa" className="hover:text-teal-400 transition-colors">
                  {dict.nav_team}
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-teal-400 transition-colors">
                  {dict.nav_technology}
                </a>
              </li>
              <li>
                <a href="#seguros" className="hover:text-teal-400 transition-colors">
                  {dict.nav_insurance}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-teal-400 transition-colors">
                  {dict.nav_contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Legal</p>
            <ul className="space-y-2 text-sm">
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
              <li className="pt-2 text-xs text-gray-500">{dict.legal_ers}</li>
              <li className="text-xs text-gray-500">{dict.legal_reg}</li>
              <li className="text-xs text-gray-500">{dict.legal_omd}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-xs text-gray-600 text-center">
          © {year} {dict.copyright}
        </div>
      </div>
    </footer>
  );
}
