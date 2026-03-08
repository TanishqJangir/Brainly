import CrossIcon from "../../../assets/svgIcons/CrossIcon";
import { Button } from "../../../components/ui/Button";
import DeleteIcon from "../../../assets/svgIcons/DeleteIcon";
import { typeStyles } from "./Card";
import type { CardProps } from "./Card";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const CardModal = ({ title, description, url, type, tags, date, setModalOpen }: { setModalOpen: (open: boolean) => void } & CardProps) => {

    const { label, color } = typeStyles[type];
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    return (
        <>
            {<DeleteModal onOpen={deleteModalOpen} onClose={setDeleteModalOpen} />}
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm">
                <div className="relative flex flex-col gap-3 w-full max-w-[70vw] max-h-[90vh] overflow-y-auto bg-white dark:bg-[#111111] dark:text-white rounded-4xl shadow-2xl border border-gray-200 dark:border-white/10 px-8 py-8 mx-4 [&::-webkit-scrollbar]:w-0 [scrollbar-width:none]">
                    <CrossIcon
                        onClick={() => setModalOpen(false)}
                        className="size-5 absolute top-4 right-5 text-gray-400 hover:text-gray-700 dark:hover:text-white transition cursor-pointer rounded-md"
                    />
                    <div className="flex justify-between">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${color}`}>{label}</span>
                    </div>
                    <div className="flex">
                        <img src={`${url}`} alt="some image section" className="w-full h-auto object-cover rounded-xl mr-6" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-snug ">{title}</h3>
                                {description && (
                                    <div className="text-md text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mt-1">{description}</div>
                                )}
                                {tags && tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {tags!.map((tag, index) => (
                                            <span key={index} className="flex items-center text-sm px-4 py-1 rounded-full bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400 text-center">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-400 mt-4 start">{date}</p>
                                <div className="flex gap-2">
                                    <Button
                                        variant="open"
                                        onClick={() => window.open(url, "_blank")}
                                        className="rounded-xl!"
                                    >
                                        Open
                                    </Button>
                                    <Button
                                        variant="delete"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setDeleteModalOpen(true);
                                        }}
                                        className="rounded-xl!"
                                    >
                                        <DeleteIcon className="size-4" />
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CardModal;