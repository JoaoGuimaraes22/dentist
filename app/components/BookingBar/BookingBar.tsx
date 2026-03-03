"use client";

type Dict = {
  cta: string;
  call: string;
};

type Props = {
  dict: Dict;
};

export default function BookingBar({ dict }: Props) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] flex gap-3">
      {/* Call button */}
      <a
        href="tel:+351214567890"
        className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-medium text-sm py-2.5 rounded-xl transition-colors hover:border-teal-300 hover:text-teal-700"
      >
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
        {dict.call}
      </a>

      {/* Book button */}
      <a
        href="#contacto"
        className="flex-2 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-colors"
      >
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
        {dict.cta}
      </a>
    </div>
  );
}
