"use client";

import { useEffect, useRef, useState } from "react";

type Dict = {
  badge: string;
  headline: string;
  subheadline: string;
  q1: string;
  a1: string;
  q2: string;
  a2: string;
  q3: string;
  a3: string;
  q4: string;
  a4: string;
  q5: string;
  a5: string;
  q6: string;
  a6: string;
  cta: string;
};

type Props = {
  dict: Dict;
};

export default function FAQ({ dict }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(1); // first item open by default

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = Array.from({ length: 6 }, (_, i) => ({
    key: i + 1,
    q: dict[`q${i + 1}` as keyof Dict],
    a: dict[`a${i + 1}` as keyof Dict],
  }));

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
            {dict.badge}
          </span>
          <h2
            className="text-3xl sm:text-4xl text-gray-900 leading-snug mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {dict.headline}
          </h2>
          <p className="text-gray-500">{dict.subheadline}</p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-100 border-y border-gray-100">
          {items.map((item, i) => {
            const isOpen = open === item.key;
            return (
              <div
                key={item.key}
                className={`transition-all duration-500 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: visible ? `${100 + i * 60}ms` : "0ms" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.key)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  {/* Question number + text */}
                  <div className="flex items-start gap-3 min-w-0">
                    <span
                      className={`shrink-0 text-xs font-bold mt-0.5 transition-colors duration-200 ${
                        isOpen ? "text-teal-600" : "text-gray-300"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-medium text-sm sm:text-base transition-colors duration-200 ${
                        isOpen
                          ? "text-teal-700"
                          : "text-gray-800 group-hover:text-teal-700"
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>

                  {/* Rotating chevron */}
                  <svg
                    className={`shrink-0 w-5 h-5 mt-0.5 text-teal-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer — animated via max-height */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-10 text-center transition-all duration-700 delay-500 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-500 transition-colors text-sm"
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
      </div>
    </section>
  );
}
