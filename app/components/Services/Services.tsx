"use client";

type Dict = {
  badge: string;
  headline: string;
  subheadline: string;
  service_1_title: string;
  service_1_desc: string;
  service_2_title: string;
  service_2_desc: string;
  service_3_title: string;
  service_3_desc: string;
  service_4_title: string;
  service_4_desc: string;
  service_5_title: string;
  service_5_desc: string;
  service_6_title: string;
  service_6_desc: string;
  service_7_title: string;
  service_7_desc: string;
  service_8_title: string;
  service_8_desc: string;
  service_9_title: string;
  service_9_desc: string;
  cta: string;
};

type Props = {
  dict: Dict;
};

const ICONS: Record<number, string> = {
  1: "✦",
  2: "⬡",
  3: "◎",
  4: "✂",
  5: "❋",
  6: "☺",
  7: "⊕",
  8: "◈",
  9: "✿",
};

export default function Services({ dict }: Props) {
  const services = Array.from({ length: 9 }, (_, i) => ({
    key: i + 1,
    title: dict[`service_${i + 1}_title` as keyof Dict],
    desc: dict[`service_${i + 1}_desc` as keyof Dict],
    icon: ICONS[i + 1],
  }));

  return (
    <section id="servicos" className="py-20 bg-white">
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.key}
              className="group bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-teal-200 rounded-2xl p-6 transition-all duration-200 cursor-pointer"
            >
              <span className="text-2xl text-teal-400 mb-4 block">
                {service.icon}
              </span>
              <h3
                className="text-lg text-gray-800 mb-2"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
