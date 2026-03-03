"use client";

import { useEffect, useState } from "react";

type Dict = {
  badge: string;
  headline: string;
  subheadline: string;
  cta_book: string;
  cta_call: string;
  trust_years: string;
  trust_years_label: string;
  trust_patients: string;
  trust_patients_label: string;
  trust_specialists: string;
  trust_specialists_label: string;
  trust_insurance: string;
  trust_insurance_label: string;
};

type Props = {
  dict: Dict;
};

export default function HeroContent({ dict }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const trustBadges = [
    { value: dict.trust_years, label: dict.trust_years_label },
    { value: dict.trust_patients, label: dict.trust_patients_label },
    { value: dict.trust_specialists, label: dict.trust_specialists_label },
    { value: dict.trust_insurance, label: dict.trust_insurance_label },
  ];

  return (
    <section id="inicio" className="relative bg-white overflow-hidden">
      {/* Right-side teal panel — desktop only */}
      <div className="absolute inset-y-0 right-0 w-5/12 bg-teal-50 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2">
          {/* Left — text */}
          <div className="flex flex-col justify-center py-20 sm:py-24 lg:py-28 lg:pr-12">
            {/* Badge */}
            <div
              className={`transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-7 border border-teal-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block" />
                {dict.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-[3.25rem] text-gray-900 leading-tight mb-5 transition-all duration-700 delay-100 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {dict.headline}
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-gray-600 leading-relaxed mb-8 max-w-md transition-all duration-700 delay-200 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {dict.subheadline}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                {dict.cta_book}
              </a>
              <a
                href="tel:+351214567890"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 bg-white text-gray-800 font-medium px-7 py-3.5 rounded-full transition-colors"
              >
                <svg
                  className="w-4 h-4 text-teal-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                  />
                </svg>
                {dict.cta_call}
              </a>
            </div>
          </div>

          {/* Right — image placeholder */}
          <div
            className={`hidden lg:flex items-center py-12 pl-10 transition-all duration-1000 delay-200 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Photo placeholder */}
              <div className="w-full h-[520px] rounded-3xl bg-white border border-gray-200 shadow-md flex flex-col items-center justify-center text-gray-300">
                <svg
                  className="w-14 h-14 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm">Foto da clínica</p>
                <p className="text-xs mt-1 opacity-60">800 × 1040</p>
              </div>

              {/* Floating — rating */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                  <span className="text-teal-600">★</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-none mb-0.5">
                    4.9 / 5
                  </p>
                  <p className="text-xs text-gray-400">247 avaliações</p>
                </div>
              </div>

              {/* Floating — years */}
              <div className="absolute -top-5 -right-5 bg-teal-700 rounded-2xl shadow-lg px-4 py-3 text-center">
                <p
                  className="text-2xl text-white leading-none"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  20+
                </p>
                <p className="text-xs text-teal-200 mt-0.5">anos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className={`border-t border-gray-100 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {trustBadges.map((badge, i) => (
            <div
              key={badge.label}
              className={
                i < trustBadges.length - 1
                  ? "sm:border-r sm:border-gray-100 sm:pr-6"
                  : ""
              }
            >
              <p
                className="text-3xl text-teal-700 leading-none mb-1"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {badge.value}
              </p>
              <p className="text-sm text-gray-500">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
