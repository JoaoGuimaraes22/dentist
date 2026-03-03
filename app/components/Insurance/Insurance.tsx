"use client";

import { useEffect, useRef, useState } from "react";

type Dict = {
  badge: string;
  headline: string;
  subheadline: string;
  note: string;
  cta: string;
};

type Props = {
  dict: Dict;
};

const INSURERS = [
  "ADSE",
  "Multicare",
  "AdvanceCare",
  "Médis",
  "Allianz",
  "SAMS",
  "PT-ACS",
  "Medicare",
];

export default function Insurance({ dict }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="seguros" ref={sectionRef} className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <span className="inline-block text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
              {dict.badge}
            </span>
            <h2
              className="text-3xl sm:text-4xl text-gray-900 leading-snug mb-5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {dict.headline}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {dict.subheadline}
            </p>

            {/* Note */}
            <div className="flex gap-3 bg-white rounded-2xl border border-teal-100 p-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center mt-0.5">
                <svg
                  className="w-4 h-4 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {dict.note}
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-6 text-teal-700 font-medium text-sm hover:text-teal-600 transition-colors"
            >
              {dict.cta}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Right — insurer grid */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              {INSURERS.map((name, i) => (
                <div
                  key={name}
                  className={`flex items-center gap-3 bg-white border border-gray-200 hover:border-teal-300 rounded-xl px-4 py-3.5 transition-all duration-300 hover:shadow-sm ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: visible ? `${300 + i * 50}ms` : "0ms",
                  }}
                >
                  {/* Check icon */}
                  <div className="shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
