
interface SiteCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function SiteCard({ title, description, imageUrl, link }: SiteCardProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-900 border border-gray-700">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4"> 
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    );
}