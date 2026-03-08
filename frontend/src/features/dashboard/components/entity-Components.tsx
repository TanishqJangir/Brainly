import PlusIcon from "../../../assets/svgIcons/PlusIcon"
import { Button } from "../../../components/ui/Button"
import { Input } from "../../../components/ui/Input"
import { Card, type CardProps } from "./Card"


export const EntityHeader = ({setModalOpen }: {setModalOpen: (open: boolean) => void }) => {
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
                    <PlusIcon className="size-5"/>
                    Add Content
                </Button>
            </div>
        </div>
    );
};


export const EntityContainer = ({onCardClick}: {onCardClick: (card: CardProps) => void}) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4">
            <Card
                type="youtube"
                title="How the Internet Works – Full Course"
                description="A deep dive into TCP/IP, DNS, HTTP and everything in between. Great for beginners and pros alike. Covers real-world examples and hands-on labs for each topic"
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["networking", "cs", "education", "video", "course"]}
                date="Mar 5, 2026"
                onClick={() => onCardClick({
                    type: "youtube",
                    title: "How the Internet Works – Full Course",
                    description: "A deep dive into TCP/IP, DNS, HTTP and everything in between. Great for beginners and pros alike. Covers real-world examples and hands-on labs for each topic",
                    url: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop",
                    tags: ["networking", "cs", "education", "video", "course"],
                    date: "Mar 5, 2026"
                })}
            />
            <Card
                type="x"
                title="Andrej Karpathy on scaling laws and the future of LLMs"
                description="A fascinating thread on why bigger models keep surprising us and where the ceiling might be."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["ai", "llm", "machine-learning", "deep-learning"]}
                date="Mar 6, 2026"
            />
            <Card
                type="notion"
                title="System Design Interview Prep Notes"
                description="Personal notes covering consistent hashing, CAP theorem, databases, and distributed caches."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["system-design", "interview", "notes", "preparation", "software-engineering"]}
                date="Feb 28, 2026"
            />
            <Card
                type="github"
                title="shadcn/ui – Beautifully designed components"
                description="Re-usable components built with Radix UI and Tailwind CSS. Copy, paste, and customise."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["react", "ui", "open-source"]}
                date="Mar 1, 2026"
            />
            <Card
                type="youtube"
                title="How the Internet Works – Full Course"
                description="A deep dive into TCP/IP, DNS, HTTP and everything in between. Great for beginners and pros alike."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["networking", "cs"]}
                date="Mar 5, 2026"
            />
            <Card
                type="x"
                title="Andrej Karpathy on scaling laws and the future of LLMs"
                description="A fascinating thread on why bigger models keep surprising us and where the ceiling might be."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["ai", "llm"]}
                date="Mar 6, 2026"
            />
            <Card
                type="notion"
                title="System Design Interview Prep Notes"
                description="Personal notes covering consistent hashing, CAP theorem, databases, and distributed caches."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["system-design", "interview"]}
                date="Feb 28, 2026"
            />
            <Card
                type="github"
                title="shadcn/ui – Beautifully designed components"
                description="Re-usable components built with Radix UI and Tailwind CSS. Copy, paste, and customise."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["react", "ui", "open-source"]}
                date="Mar 1, 2026"
            />
            <Card
                type="youtube"
                title="How the Internet Works – Full Course"
                description="A deep dive into TCP/IP, DNS, HTTP and everything in between. Great for beginners and pros alike."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["networking", "cs"]}
                date="Mar 5, 2026"
            />
            <Card
                type="x"
                title="Andrej Karpathy on scaling laws and the future of LLMs"
                description="A fascinating thread on why bigger models keep surprising us and where the ceiling might be."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["ai", "llm"]}
                date="Mar 6, 2026"
            />
            <Card
                type="notion"
                title="System Design Interview Prep Notes"
                description="Personal notes covering consistent hashing, CAP theorem, databases, and distributed caches."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["system-design", "interview"]}
                date="Feb 28, 2026"
            />
            <Card
                type="github"
                title="shadcn/ui – Beautifully designed components"
                description="Re-usable components built with Radix UI and Tailwind CSS. Copy, paste, and customise."
                url="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop"
                tags={["react", "ui", "open-source"]}
                date="Mar 1, 2026"
            />
        </div>
    );
}