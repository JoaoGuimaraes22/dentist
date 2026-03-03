"use client";

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
};

type Props = {
  dict: Dict;
};

export default function About({ dict }: Props) {
  const stats = [
    { value: dict.stat_years, label: dict.stat_years_label },
    { value: dict.stat_patients, label: dict.stat_patients_label },
    { value: dict.stat_specialists, label: dict.stat_specialists_label },
    { value: dict.stat_rating, label: dict.stat_rating_label },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
              {dict.badge}
            </span>
            <h2
              className="text-3xl sm:text-4xl text-gray-900 leading-snug mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {dict.headline}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{dict.body}</p>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3
                className="text-lg text-gray-800 mb-3"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {dict.mission_headline}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {dict.mission_body}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-gray-200 text-center"
              >
                <p
                  className="text-4xl text-teal-700 mb-2"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
