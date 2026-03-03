"use client";

import { useEffect, useRef, useState } from "react";

type Dict = {
  badge: string;
  headline: string;
  subheadline: string;
  form_name: string;
  form_name_placeholder: string;
  form_email: string;
  form_email_placeholder: string;
  form_phone: string;
  form_phone_placeholder: string;
  form_service: string;
  form_service_placeholder: string;
  form_message: string;
  form_message_placeholder: string;
  form_submit: string;
  form_note: string;
  form_success: string;
  info_address: string;
  info_phone: string;
  info_mobile: string;
  info_email: string;
  info_hours_title: string;
  info_hours_weekday: string;
  info_hours_saturday: string;
  info_hours_sunday: string;
  whatsapp_cta: string;
  form_opt_1: string;
  form_opt_2: string;
  form_opt_3: string;
  form_opt_4: string;
  form_opt_5: string;
  form_opt_6: string;
  form_opt_7: string;
  form_opt_8: string;
  form_opt_9: string;
};

type Props = {
  dict: Dict;
};

const FIELD_CLASS =
  "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-100 transition-colors bg-white";

function InfoRow({
  iconPath,
  children,
}: {
  iconPath: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3.5 items-start">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mt-0.5">
        <svg
          className="w-4.5 h-4.5 text-teal-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Contact({ dict }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const whatsappNumber = dict.info_mobile.replace(/\D/g, "");

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-gray-50">
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

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div
            className={`bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-700 delay-100 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p
                  className="text-lg text-gray-800"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {dict.form_success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    {dict.form_name}
                  </label>
                  <input
                    type="text"
                    placeholder={dict.form_name_placeholder}
                    required
                    className={FIELD_CLASS}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      {dict.form_email}
                    </label>
                    <input
                      type="email"
                      placeholder={dict.form_email_placeholder}
                      required
                      className={FIELD_CLASS}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      {dict.form_phone}
                    </label>
                    <input
                      type="tel"
                      placeholder={dict.form_phone_placeholder}
                      className={FIELD_CLASS}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    {dict.form_service}
                  </label>
                  <select className={FIELD_CLASS}>
                    <option value="">{dict.form_service_placeholder}</option>
                    <option>{dict.form_opt_1}</option>
                    <option>{dict.form_opt_2}</option>
                    <option>{dict.form_opt_3}</option>
                    <option>{dict.form_opt_4}</option>
                    <option>{dict.form_opt_5}</option>
                    <option>{dict.form_opt_6}</option>
                    <option>{dict.form_opt_7}</option>
                    <option>{dict.form_opt_8}</option>
                    <option>{dict.form_opt_9}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    {dict.form_message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={dict.form_message_placeholder}
                    className={`${FIELD_CLASS} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  {dict.form_submit}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  {dict.form_note}
                </p>
              </form>
            )}
          </div>

          {/* Info column */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            {/* Address */}
            <InfoRow iconPath="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z">
              {dict.info_address}
            </InfoRow>

            {/* Phone */}
            <InfoRow iconPath="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
              <a
                href={`tel:${dict.info_phone.replace(/\s/g, "")}`}
                className="block hover:text-teal-600 transition-colors"
              >
                {dict.info_phone}
              </a>
              <a
                href={`tel:${dict.info_mobile.replace(/\s/g, "")}`}
                className="block hover:text-teal-600 transition-colors"
              >
                {dict.info_mobile}
              </a>
            </InfoRow>

            {/* Email */}
            <InfoRow iconPath="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
              <a
                href={`mailto:${dict.info_email}`}
                className="hover:text-teal-600 transition-colors"
              >
                {dict.info_email}
              </a>
            </InfoRow>

            {/* Hours */}
            <InfoRow iconPath="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z">
              <p className="font-semibold text-gray-800 mb-1">
                {dict.info_hours_title}
              </p>
              <p>{dict.info_hours_weekday}</p>
              <p>{dict.info_hours_saturday}</p>
              <p className="text-gray-400">{dict.info_hours_sunday}</p>
            </InfoRow>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors self-start"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {dict.whatsapp_cta}
            </a>

            {/* Map placeholder */}
            <div className="flex-1 min-h-44 rounded-2xl bg-gray-100 border border-gray-200 relative overflow-hidden flex flex-col items-center justify-center gap-2 text-gray-400">
              <svg
                className="w-8 h-8 text-teal-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="text-xs">Carcavelos · 38.6883, -9.3350</p>
              <a
                href="https://maps.google.com/?q=38.6883,-9.3350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-teal-600 hover:underline"
              >
                Abrir no Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
