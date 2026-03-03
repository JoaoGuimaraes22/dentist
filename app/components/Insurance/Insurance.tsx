"use client";

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
  return (
    <section id="seguros" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
            {dict.badge}
          </span>
          <h2
            className="text-3xl sm:text-4xl text-gray-900 leading-snug mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {dict.headline}
          </h2>
          <p className="text-gray-600">{dict.subheadline}</p>
        </div>

        {/* Insurer logos/badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {INSURERS.map((name) => (
            <div
              key={name}
              className="bg-white border border-gray-200 rounded-xl px-6 py-3 font-semibold text-gray-700 text-sm shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm max-w-xl mx-auto">
          {dict.note}
        </p>
      </div>
    </section>
  );
}
