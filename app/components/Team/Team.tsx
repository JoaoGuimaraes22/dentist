"use client";

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
};

type Props = {
  dict: Dict;
};

export default function Team({ dict }: Props) {
  const doctors = [
    {
      name: dict.doctor_1_name,
      specialty: dict.doctor_1_specialty,
      omd: dict.doctor_1_omd,
    },
    {
      name: dict.doctor_2_name,
      specialty: dict.doctor_2_specialty,
      omd: dict.doctor_2_omd,
    },
    {
      name: dict.doctor_3_name,
      specialty: dict.doctor_3_specialty,
      omd: dict.doctor_3_omd,
    },
    {
      name: dict.doctor_4_name,
      specialty: dict.doctor_4_specialty,
      omd: dict.doctor_4_omd,
    },
  ];

  return (
    <section id="equipa" className="py-20 bg-gray-50">
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

        {/* Doctor cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              {/* Photo placeholder */}
              <div className="h-56 bg-gradient-to-br from-teal-50 to-sky-50 flex items-center justify-center">
                <span className="text-6xl text-teal-200">👤</span>
              </div>
              <div className="p-5">
                <h3
                  className="text-lg text-gray-800 mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {doctor.name}
                </h3>
                <p className="text-sm text-teal-600 mb-3">{doctor.specialty}</p>
                <p className="text-xs text-gray-400">{doctor.omd}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
