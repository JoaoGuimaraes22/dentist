"use client";

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

export default function Reviews({ dict }: Props) {
  const reviews = [
    {
      name: dict.review_1_name,
      location: dict.review_1_location,
      text: dict.review_1_text,
    },
    {
      name: dict.review_2_name,
      location: dict.review_2_location,
      text: dict.review_2_text,
    },
    {
      name: dict.review_3_name,
      location: dict.review_3_location,
      text: dict.review_3_text,
    },
    {
      name: dict.review_4_name,
      location: dict.review_4_location,
      text: dict.review_4_text,
    },
  ];

  return (
    <section id="testemunhos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
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

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className="text-4xl text-teal-700"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {dict.rating_value}
          </span>
          <div>
            <div className="flex gap-0.5 text-yellow-400 text-lg">★★★★★</div>
            <p className="text-xs text-gray-400">
              {dict.total_reviews} {dict.total_label}
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex gap-0.5 text-yellow-400 text-sm mb-4">
                ★★★★★
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {review.name}
                </p>
                <p className="text-xs text-gray-400">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
