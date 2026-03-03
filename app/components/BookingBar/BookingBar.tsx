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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-3 flex gap-3">
      <a
        href="tel:+351214567890"
        className="flex-1 flex items-center justify-center border border-gray-200 text-gray-700 font-medium text-sm py-2.5 rounded-xl transition-colors hover:border-teal-300 hover:text-teal-700"
      >
        {dict.call}
      </a>
      <a
        href="#contacto"
        className="flex-2 flex items-center justify-center bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm py-2.5 px-6 rounded-xl transition-colors"
      >
        {dict.cta}
      </a>
    </div>
  );
}
