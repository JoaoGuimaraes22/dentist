"use client";

import { useState } from "react";

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
  const [open, setOpen] = useState<number | null>(null);

  const items = Array.from({ length: 6 }, (_, i) => ({
    key: i + 1,
    q: dict[`q${i + 1}` as keyof Dict],
    a: dict[`a${i + 1}` as keyof Dict],
  }));

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {items.map((item) => (
            <div key={item.key}>
              <button
                onClick={() => setOpen(open === item.key ? null : item.key)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left text-gray-800 hover:text-teal-700 transition-colors"
              >
                <span className="font-medium">{item.q}</span>
                <span className="flex-shrink-0 text-teal-500 text-lg leading-none">
                  {open === item.key ? "−" : "+"}
                </span>
              </button>
              {open === item.key && (
                <p className="pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-500 transition-colors"
          >
            {dict.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
