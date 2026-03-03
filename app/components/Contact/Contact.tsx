"use client";

import { useState } from "react";

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
};

type Props = {
  dict: Dict;
};

export default function Contact({ dict }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {submitted ? (
              <p className="text-teal-700 font-medium text-center py-8">
                {dict.form_success}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {dict.form_name}
                  </label>
                  <input
                    type="text"
                    placeholder={dict.form_name_placeholder}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {dict.form_email}
                    </label>
                    <input
                      type="email"
                      placeholder={dict.form_email_placeholder}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {dict.form_phone}
                    </label>
                    <input
                      type="tel"
                      placeholder={dict.form_phone_placeholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {dict.form_message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={dict.form_message_placeholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  {dict.form_submit}
                </button>
                <p className="text-xs text-gray-400 text-center">{dict.form_note}</p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">📍</p>
              <p className="text-gray-800">{dict.info_address}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">📞</p>
              <a
                href={`tel:${dict.info_phone.replace(/\s/g, "")}`}
                className="text-gray-800 hover:text-teal-600 transition-colors"
              >
                {dict.info_phone}
              </a>
              <br />
              <a
                href={`tel:${dict.info_mobile.replace(/\s/g, "")}`}
                className="text-gray-800 hover:text-teal-600 transition-colors"
              >
                {dict.info_mobile}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">✉</p>
              <a
                href={`mailto:${dict.info_email}`}
                className="text-gray-800 hover:text-teal-600 transition-colors"
              >
                {dict.info_email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                {dict.info_hours_title}
              </p>
              <p className="text-sm text-gray-600">{dict.info_hours_weekday}</p>
              <p className="text-sm text-gray-600">{dict.info_hours_saturday}</p>
              <p className="text-sm text-gray-400">{dict.info_hours_sunday}</p>
            </div>

            {/* Map placeholder */}
            <div className="h-48 bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Google Maps — 38.6883, -9.3350
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
