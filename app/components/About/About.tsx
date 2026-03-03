"use client";

import { useEffect, useRef, useState } from "react";

type Dict = {
  badge: string;
  headline: string;
  body: string;
  mission_headline: string;
  mission_body: string;
  stat_years: string;
  stat_years_label: string;
  stat_patients: string;
  stat_patients_label: string;
  stat_specialists: string;
  stat_specialists_label: string;
  stat_rating: string;
  stat_rating_label: string;
  ers_badge: string;
};

type Props = {
  dict: Dict;
};

// Animate a number from 0 to its target value, formatting it like the original string
function CountUp({ value, active }: { value: string; active: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;

    const suffix = value.replace(/[\d.,]/g, "");
    const numStr = value.replace(/[^\d.,]/g, "");
    // "8.500" uses dot as thousands sep; "4.9" uses dot as decimal
    const isThousands = /\d\.\d{3}$/.test(numStr);
    const target = isThousands
      ? parseInt(numStr.replace(".", ""), 10)
      : parseFloat(numStr.replace(",", "."));
    const isDecimal = !isThousands && numStr.includes(".");

    const duration = 1600;
    let startTime: number | null = null;

    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      let formatted: string;
      if (isDecimal) {
        formatted = current.toFixed(1);
      } else if (isThousands) {
        const n = Math.floor(current);
        formatted = n >= 1000 ? Math.floor(n / 1000) + "." + String(n % 1000).padStart(3, "0") : String(n);
      } else {
        formatted = Math.floor(current).toString();
      }

      setDisplay(formatted + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [active, value]);

  return <>{display}</>;
}

export default function About({ dict }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Fade in section on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Trigger counters when stats strip enters view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: dict.stat_years, label: dict.stat_years_label },
    { value: dict.stat_patients, label: dict.stat_patients_label },
    { value: dict.stat_specialists, label: dict.stat_specialists_label },
    { value: dict.stat_rating, label: dict.stat_rating_label },
  ];

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column: text left, photo right */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
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
            <p className="text-gray-600 leading-relaxed mb-7">{dict.body}</p>

            {/* Mission card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 border-l-4 border-l-teal-400">
              <h3
                className="text-base text-gray-800 mb-2"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {dict.mission_headline}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {dict.mission_body}
              </p>
            </div>
          </div>

          {/* Right — photo placeholder */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="w-full h-96 lg:h-115 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center text-gray-300">
                <svg
                  className="w-12 h-12 mb-2"
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
                <p className="text-sm">Interior da clínica</p>
                <p className="text-xs mt-1 opacity-60">900 × 700</p>
              </div>

              {/* Floating — ERS badge */}
              <div className="absolute bottom-5 right-5 bg-white rounded-xl shadow-md border border-gray-100 px-3 py-2 text-center">
                <p className="text-xs font-semibold text-gray-700">{dict.ers_badge}</p>
                <p className="text-xs text-gray-400 mt-0.5">E000000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          ref={statsRef}
          className={`bg-white rounded-2xl border border-gray-200 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100 transition-all duration-700 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="px-8 py-6 text-center">
              <p
                className={`text-4xl text-teal-700 leading-none mb-1 tabular-nums transition-all duration-500 ${
                  statsActive ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <CountUp value={stat.value} active={statsActive} />
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
