import { useState } from "react"
import Link from "next/link"
import { Globe, House } from "lucide-react"

export default function HamburgerMenu() {
	const [open, setOpen] = useState(false)

	return (
		<div className="absolute top-4 right-4">
			<button onClick={() => setOpen(!open)} className="group p-2 rounded-lg">
				<div className="w-6 h-0.5 bg-white mb-1 transition-colors group-hover:bg-gray-400" />
				<div className="w-6 h-0.5 bg-white mb-1 transition-colors group-hover:bg-gray-400" />
				<div className="w-6 h-0.5 bg-white transition-colors group-hover:bg-gray-400" />
			</button>

			<div
				className={`absolute right-0 mt-2 w-45 rounded-xl border border-gray-700 bg-neutral-900 shadow-lg transition-all duration-200 ${
					open
						? "opacity-100 translate-y-0 pointer-events-auto"
						: "opacity-0 -translate-y-2 pointer-events-none"
				}`}
			>
				<a
					href="/"
					className="block w-full px-4 py-2 inline-flex items-center gap-2 text-white transition hover:bg-neutral-800 rounded-t-xl"
				>
					<House size="16" strokeWidth="1.75" /> Home
				</a>
				<p className="block w-full px-4 py-2 inline-flex items-center gap-2 text-white cursor-c-disabled opacity-50 select-none">
					<Globe size="16" strokeWidth="1.75" /> Váltás Magyarra
				</p>
			</div>
		</div>
	)
}
