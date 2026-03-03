"use client";

import { useEffect, useRef, useState } from "react";

type Dict = {
  badge: string;
  headline: string;
  subheadline: string;
  review_1_name: string;
  review_1_location: string;
  review_1_text: string;
  review_2_name: string;
  review_2_location: string;
  review_2_text: string;
  review_3_name: string;
  review_3_location: string;
  review_3_text: string;
  review_4_name: string;
  review_4_location: string;
  review_4_text: string;
  rating_value: string;
  rating_label: string;
  total_reviews: string;
  total_label: string;
};

type Props = {
  dict: Dict;
};

// Avatar colors cycling through brand palette
const AVATAR_COLORS = [
  "bg-teal-700 text-white",
  "bg-sky-500 text-white",
  "bg-teal-500 text-white",
  "bg-gray-700 text-white",
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Reviews({ dict }: Props) {
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

  const reviews = [
    { name: dict.review_1_name, location: dict.review_1_location, text: dict.review_1_text },
    { name: dict.review_2_name, location: dict.review_2_location, text: dict.review_2_text },
    { name: dict.review_3_name, location: dict.review_3_location, text: dict.review_3_text },
    { name: dict.review_4_name, location: dict.review_4_location, text: dict.review_4_text },
  ];

  return (
    <section id="testemunhos" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ease-out ${
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

        {/* Overall rating summary */}
        <div
          className={`flex items-center justify-center gap-5 mb-14 transition-all duration-700 delay-100 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span
            className="text-5xl text-teal-700 leading-none"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {dict.rating_value}
          </span>
          <div>
            <div className="flex gap-0.5 text-yellow-400 text-xl mb-1">
              ★★★★★
            </div>
            <p className="text-sm text-gray-500">
              {dict.rating_label} · {dict.total_reviews} {dict.total_label}
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionProperty: "opacity, transform, box-shadow",
                transitionDuration: visible ? "500ms" : "300ms",
                transitionDelay: visible ? `${200 + i * 80}ms` : "0ms",
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-yellow-400 text-sm mb-3">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${AVATAR_COLORS[i]}`}
                >
                  {initials(review.name)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-800 leading-tight truncate">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
