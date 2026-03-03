"use client";

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
};

type Props = {
  dict: Dict;
};

export default function Technology({ dict }: Props) {
  const techs = Array.from({ length: 6 }, (_, i) => ({
    key: i + 1,
    title: dict[`tech_${i + 1}_title` as keyof Dict],
    desc: dict[`tech_${i + 1}_desc` as keyof Dict],
  }));

  return (
    <section id="tecnologia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
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

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((tech) => (
            <div
              key={tech.key}
              className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                <span className="text-teal-600 text-lg">⬡</span>
              </div>
              <div>
                <h3
                  className="text-base text-gray-800 mb-1"
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
    </section>
  );
}
