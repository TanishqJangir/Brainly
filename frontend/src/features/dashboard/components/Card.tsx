// import LinkIcon from "../../../assets/svgIcons/LinkIcon";
// import Logo from "../../../assets/images/hero-image.png";
import DeleteIcon from "../../../assets/svgIcons/DeleteIcon";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export interface CardProps {
    title: string;
    description?: string;
    type: "youtube" | "x" | "notion" | "linkedin" | "instagram" | "github" | "link" | "other";
    url: string;
    tags?: string[];
    date?: string;
    onClick?: () => void;
}

export const typeStyles: Record<CardProps["type"], { label: string; color: string }> = {
    youtube: { label: "YouTube", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" },
    x: { label: "X", color: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400 px-6" },
    notion: { label: "Notion", color: "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300" },
    linkedin: { label: "LinkedIn", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    instagram: { label: "Instagram", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" },
    github: { label: "GitHub", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    link: { label: "Link", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    other: { label: "Other", color: "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300" },
};

export const Card = ({ title, description, type, url, tags = [], date, onClick }: CardProps) => {
    const { label, color } = typeStyles[type];
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    return (
        <>
            <DeleteModal onOpen={deleteModalOpen} onClose={setDeleteModalOpen} />
            <div
                className="flex flex-col gap-3 p-2 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 shadow transition-transform duration-300 cursor-pointer hover:scale-105 hover:-rotate-x-2 hover:-rotate-y-1 hover:shadow-2xl "
                onClick={onClick}
            >

                <div className="relative">
                    <span className={`absolute top-2 left-2 text-xs font-semibold px-2.5 py-1 rounded-lg ${color}`}>{label}</span>
                    <img src={`${url}`} alt="some image section" className="w-full object-cover rounded-xl" />
                </div>

                <div className="flex flex-col justify-between h-full px-1">

                    <div>
                        <h3 className="text-md font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug ">{title}</h3>
                        {description && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mt-1">{description}</p>
                        )}

                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                    </div>
                    <div className="flex items-center justify-between mt-auto">
                        <p className="text-xs text-gray-400 dark:text-gray-600 mt-auto">{date}</p>
                        <DeleteIcon
                            onClick={e => {
                                e.stopPropagation();
                                setDeleteModalOpen(true);
                            }} //TODO: Add delete functionality
                            className="size-5 cursor-pointer text-gray-400 hover:text-red-500 "
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
