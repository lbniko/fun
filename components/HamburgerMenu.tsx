import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="group p-2 rounded-lg cursor-pointer"
      >
        <div className="w-6 h-0.5 bg-white mb-1 transition-colors group-hover:bg-gray-400" />
        <div className="w-6 h-0.5 bg-white mb-1 transition-colors group-hover:bg-gray-400" />
        <div className="w-6 h-0.5 bg-white transition-colors group-hover:bg-gray-400" />
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 rounded-xl border border-gray-700 bg-neutral-900 shadow-lg transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <a
          href="/"
          className="block px-4 py-2 text-white hover:bg-neutral-800 rounded-t-xl"
        >
          Home
        </a>
        <p className="block px-4 py-2 text-white cursor-not-allowed opacity-50 select-none">
          Váltás Magyarra
        </p>
      </div>
    </div>
  );
}
