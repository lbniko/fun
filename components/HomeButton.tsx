import { House } from "lucide-react"

interface HomeBtnProps {
	text: String
}

export function HomeButton({ text }: HomeBtnProps) {
	return (
		<a
			className="absolute top-4 right-4 inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-neutral-800 to-neutral-950 px-4 py-2 sm:px-6 sm:py-3 text-md sm:text-xl outline-none text-white hover:bg-gradient-to-r hover:from-neutral-700 hover:to-neutral-800 hover:-translate-y-0.5 transition duration-400"
			href="/"
		>
			<House className="size-3 sm:size-5" strokeWidth={2} /> {text}
		</a>
	)
}
