"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Dict = {
  badge: string;
  headline: string;
  subheadline: string;
  tech_1_title: string;
  tech_1_desc: string;
  tech_2_title: string;
  tech_2_desc: string;
  tech_3_title: string;
  tech_3_desc: string;
  tech_4_title: string;
  tech_4_desc: string;
  tech_5_title: string;
  tech_5_desc: string;
  tech_6_title: string;
  tech_6_desc: string;
  photo_badge: string;
};

type Props = {
  dict: Dict;
};

// Heroicons outline paths per technology
const ICON_PATHS: Record<number, string> = {
  1: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9", // cube / 3D
  2: "M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z", // scan
  3: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", // bolt / laser
  4: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3", // layers / CAD
  5: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z", // signal / X-ray
  6: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.641-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z", // camera
};

export default function Technology({ dict }: Props) {
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const techs = Array.from({ length: 6 }, (_, i) => ({
    key: i + 1,
    title: dict[`tech_${i + 1}_title` as keyof Dict],
    desc: dict[`tech_${i + 1}_desc` as keyof Dict],
    iconPath: ICON_PATHS[i + 1],
  }));

  return (
    <section id="tecnologia" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${
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

        {/* Two-column: photo left, tech list right */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — equipment photo placeholder */}
          <div
            className={`transition-all duration-700 delay-100 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative w-full h-96 lg:h-144 rounded-3xl overflow-hidden">
                <Image
                  src="/technology.jpg"
                  alt="Tecnologia clínica SorrisoPlus"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating label */}
              <div className="absolute top-5 right-5 bg-teal-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {dict.photo_badge}
              </div>
            </div>
          </div>

          {/* Right — tech list */}
          <div className="space-y-0 divide-y divide-gray-100">
            {techs.map((tech, i) => (
              <div
                key={tech.key}
                className={`flex gap-4 py-5 group transition-all duration-500 ease-out ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: visible ? `${200 + i * 80}ms` : "0ms",
                }}
              >
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-colors duration-200 mt-0.5">
                  <svg
                    className="w-5 h-5 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={tech.iconPath}
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3
                    className="text-base text-gray-800 mb-1 group-hover:text-teal-700 transition-colors duration-200"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {tech.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
