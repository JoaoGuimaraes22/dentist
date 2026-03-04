"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Dict = {
  badge: string;
  headline: string;
  subheadline: string;
  doctor_1_name: string;
  doctor_1_specialty: string;
  doctor_1_omd: string;
  doctor_2_name: string;
  doctor_2_specialty: string;
  doctor_2_omd: string;
  doctor_3_name: string;
  doctor_3_specialty: string;
  doctor_3_omd: string;
  doctor_4_name: string;
  doctor_4_specialty: string;
  doctor_4_omd: string;
  omd_label: string;
  director_badge: string;
};

type Props = {
  dict: Dict;
};


export default function Team({ dict }: Props) {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const doctors = [
    {
      name: dict.doctor_1_name,
      specialty: dict.doctor_1_specialty,
      omd: dict.doctor_1_omd,
      isDirector: true,
      image: "/team-1.jpg",
    },
    {
      name: dict.doctor_2_name,
      specialty: dict.doctor_2_specialty,
      omd: dict.doctor_2_omd,
      isDirector: false,
      image: "/team-2.jpg",
    },
    {
      name: dict.doctor_3_name,
      specialty: dict.doctor_3_specialty,
      omd: dict.doctor_3_omd,
      isDirector: false,
      image: "/team-3.jpg",
    },
    {
      name: dict.doctor_4_name,
      specialty: dict.doctor_4_specialty,
      omd: dict.doctor_4_omd,
      isDirector: false,
      image: "/team-4.jpg",
    },
  ];

  return (
    <section id="equipa" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ease-out ${
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

        {/* Doctor cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, i) => (
            <div
              key={doctor.name}
              className={`group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionProperty: "opacity, transform, box-shadow",
                transitionDuration: visible ? "500ms" : "300ms",
                transitionDelay: visible ? `${150 + i * 80}ms` : "0ms",
              }}
            >
              {/* Photo area */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                />
                {/* Director badge */}
                {doctor.isDirector && (
                  <span className="absolute top-3 left-3 bg-teal-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    {dict.director_badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-lg text-gray-900 mb-1 group-hover:text-teal-800 transition-colors duration-200"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {doctor.name}
                </h3>
                <p className="text-sm text-teal-600 leading-snug mb-4">
                  {doctor.specialty}
                </p>

                {/* OMD badge */}
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <span className="text-xs text-gray-400">{doctor.omd}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OMD note */}
        <p
          className={`text-center text-xs text-gray-400 mt-8 transition-all duration-700 delay-700 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {dict.omd_label}
        </p>
      </div>
    </section>
  );
}
