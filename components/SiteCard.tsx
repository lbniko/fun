import { useRouter } from "next/navigation"

interface SiteCardProps {
	title: string
	description: string
	imageUrl: string
	link: string
}

export function SiteCard({
	title,
	description,
	imageUrl,
	link,
}: SiteCardProps) {
	const router = useRouter()

	const handleClick = () => {
		router.push(link)
	}

	return (
		<div
			className="cursor-custom-pointer w-80 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 overflow-hidden shadow-lg bg-neutral-900 transition duration-300 hover:-translate-y-1"
			onClick={handleClick}
		>
			<img className="w-full" src={imageUrl} alt={title} />
			<div className="px-6 py-4">
				<h2 className="text-xl font-bold mb-2">{title}</h2>
				<p className="text-gray-300">{description}</p>
			</div>
		</div>
	)
}
