import LinkIcon from "../../../assets/svgIcons/LinkIcon";

interface CardProps {
    title: string;
    description?: string;
    type: "youtube" | "twitter" | "notion" | "linkedin" | "instagram" | "github" | "link";
    url: string;
    tags?: string[];
    date?: string;
}

const typeStyles: Record<CardProps["type"], { label: string; color: string }> = {
    youtube:   { label: "YouTube",   color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" },
    twitter:   { label: "X / Twitter", color: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400" },
    notion:    { label: "Notion",    color: "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300" },
    linkedin:  { label: "LinkedIn",  color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    instagram: { label: "Instagram", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" },
    github:    { label: "GitHub",    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    link:      { label: "Link",      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
};

export const Card = ({ title, description, type, url, tags = [], date }: CardProps) => {
    const { label, color } = typeStyles[type];

    return (
        <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${color}`}>{label}</span>
                {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors shrink-0">
                        <LinkIcon className="size-4" />
                    </a>
                )}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug">{title}</h3>

            {/* Description */}
            {description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">{description}</p>
            )}

            {/* Tags */}
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Date */}
            {date && (
                <p className="text-xs text-gray-400 dark:text-gray-600 mt-auto">{date}</p>
            )}
        </div>
    );
};
