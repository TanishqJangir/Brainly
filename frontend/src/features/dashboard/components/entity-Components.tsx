import axios from "axios";
import PlusIcon from "../../../assets/svgIcons/PlusIcon"
import { Button } from "../../../components/ui/Button"
import { Input } from "../../../components/ui/Input"
import { Card, type CardProps } from "./Card"
import { useEffect, useState } from "react";


export const EntityHeader = ({ setModalOpen }: { setModalOpen: (open: boolean) => void }) => {
    return (
        <div className="sticky top-0 left-0 w-full z-20 bg-white dark:bg-[#151515] flex items-center justify-between px-6 py-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Vault</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Manage and organize your digital assets</p>
            </div>
            <div className="flex items-center">
                <Input type="text" placeholder="Search your vault..." className="w-72! rounded-full! py-2.5 dark:text-white text-black " />
                <Button
                    variant="primary"
                    className="ml-4 rounded-full font-medium md:gap-2 gap-1 md:px-6 px-3 "
                    onClick={() => setModalOpen(true)}
                >
                    <PlusIcon className="size-5" />
                    Add Content
                </Button>
            </div>
        </div>
    );
};


export const EntityContainer = ({ onCardClick }: { onCardClick: (card: CardProps) => void }) => {

    const [contents, setContents] = useState<CardProps[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchContents() {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8000/api/v1/vault", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setContents(prev => [...prev, ...response.data.contents]);
        } catch (error) {
            console.error("Error fetching contents:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchContents();
    }, []);


    if(loading) {
        return <EntityLoadingState />
    }
    if(contents.length === 0) {
        return <EntityEmptyState /> 
    }


    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4">
            {contents.map((content: any) => (
                <Card
                    key={content.url}
                    contentId={content._id}
                    type={content.type}
                    title={content.title}
                    description={content.description}
                    url={content.url}
                    tags={content.tags}
                    customType={content.customType}
                    createdAt={content.createdAt}
                    onClick={() => {
                        console.log("Card clicked:", content);
                        onCardClick({...content, contentId : content._id})
                    }}
                />
            ))}

        </div>
    );
}

export const EntityEmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">No content found</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
                Get started by adding your first piece of content.
            </p>
        </div>
    );
};


export const EntityLoadingState = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand"></div>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Loading content...</p>
        </div>
    );
};

export const ButtonLoader = () => {
    return (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
    );
}