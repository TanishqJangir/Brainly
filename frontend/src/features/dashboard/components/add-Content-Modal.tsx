import CrossIcon from "../../../assets/svgIcons/CrossIcon";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { useState } from "react";

interface ModalProps {
    setModalOpen: (open: boolean) => void;
}

const fieldClass = "w-full";
const labelClass = "block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300";
const selectClass =
    "w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#1a1a24] text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand transition";
const textareaClass =
    "w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#1a1a24] text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand transition resize-none";

const AddContentModal = ({ setModalOpen }: ModalProps) => {

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [contentType, setContentType] = useState("");
    const [customType, setCustomType] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [tagsInput, setTagsInput] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = () => {
        if (!title || !url || !contentType) {
            alert("Please fill in all required fields.");
            return;
        }

        setModalOpen(false);
    }


    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-[#111117] dark:text-white rounded-2xl shadow-2xl px-8 py-8 mx-4 [&::-webkit-scrollbar]:w-0 [scrollbar-width:none]">
                
                <CrossIcon
                    onClick={() => setModalOpen(false)}
                    className="size-5 absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white transition cursor-pointer rounded-md" />
                <div className="mb-6">
                    <h1 className="text-xl font-bold">Add New Content</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Save a link to your second brain.</p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-4">
                    <div className={fieldClass}>
                        <label className={labelClass}>Title <span className="text-red-400">*</span></label>
                        <Input
                            type="text"
                            maxLength={50}
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="dark:bg-[#1a1a24] dark:text-white border-gray-300! dark:border-gray-600!"
                            required
                        />
                        <p className={`text-xs text-gray-400 text-right mt-1 leading-none ${title.length === 50 ? "text-red-400" : ""}`}>
                            {title.length}/50
                        </p>
                    </div>


                    <div className={fieldClass}>
                        <label className={labelClass}>URL <span className="text-red-400">*</span></label>
                        <Input
                            type="url"
                            placeholder="https://example.com/..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="dark:bg-[#1a1a24] dark:text-white border-gray-300! dark:border-gray-600!"
                            required
                        />

                    </div>

                    <div className={fieldClass}>
                        <label className={labelClass}>Type <span className="text-red-400">*</span></label>
                        <select
                            className={selectClass}
                            defaultValue=""
                            value={contentType}
                            onChange={(e) => setContentType(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select type</option>
                            <option value="youtube">YouTube</option>
                            <option value="twitter">X (Twitter)</option>
                            <option value="notion">Notion</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="instagram">Instagram</option>
                            <option value="github">GitHub</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {contentType === "other" && (
                        <div className={fieldClass}>
                            <Input
                                type="text"
                                maxLength={15}
                                placeholder="Enter type"
                                value={customType}
                                onChange={(e) => setCustomType(e.target.value)}
                                className="dark:bg-[#1a1a24] dark:text-white border-gray-300! dark:border-gray-600!"
                                required
                            />
                            <p className={`text-xs text-gray-400 text-right mt-1 ${customType.length === 15 ? "text-red-400" : ""}`}>
                                {customType.length}/15
                            </p>
                        </div>
                    )}

                    <div className={fieldClass}>
                        <label className={labelClass}>Tags <span className="font-normal text-gray-400">(comma separated)</span></label>
                        <Input
                            type="text"
                            placeholder="e.g. design, react, productivity"
                            value={tagsInput}
                            onChange={(e) => {
                                const value = e.target.value;
                                const count = value ? value.split(",").map(tag => tag.trim()).filter(Boolean).length : 0;
                                if (count < 5 || (count === 5 && !value.endsWith(","))) {
                                    setTagsInput(value);
                                }
                            }}
                            onBlur={() => setTags(tagsInput.split(",").map(tag => tag.trim()).filter(Boolean))}
                            className="dark:bg-[#1a1a24] dark:text-white border-gray-300! dark:border-gray-600!"
                        />
                        <p className={`text-xs text-right mt-1 ${tagsInput.split(",").map(t => t.trim()).filter(Boolean).length >= 5 ? "text-red-400" : "text-gray-400"}`}>
                            {tagsInput ? tagsInput.split(",").map(t => t.trim()).filter(Boolean).length : 0}/5
                        </p>
                    </div>

                    <div className={fieldClass}>
                        <label className={labelClass}>Description <span className="font-normal text-gray-400">(optional)</span></label>
                        <textarea
                            rows={3}
                            maxLength={150}
                            placeholder="Add a short note..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={textareaClass} />
                        <p className={`text-xs text-gray-400 text-right mt-1 ${description.length === 150 ? "text-red-400" : ""}`}>
                            {description.length}/150
                        </p>
                    </div>

                    <div className="flex gap-3 mt-2">
                        <Button varient="outline" onClick={() => setModalOpen(false)} className="flex-1">
                            Cancel
                        </Button>
                        <Button varient="primary" onClick={handleSubmit} className="flex-1">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default AddContentModal;