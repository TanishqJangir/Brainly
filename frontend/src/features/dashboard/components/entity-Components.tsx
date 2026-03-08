import PlusIcon from "../../../assets/svgIcons/PlusIcon"
import { Button } from "../../../components/ui/Button"
import { Input } from "../../../components/ui/Input"
import { Card } from "./Card"


export const EntityHeader = ({ modalOpen, setModalOpen }: { modalOpen: boolean; setModalOpen: (open: boolean) => void }) => {
    return (
        <div className="flex items-center justify-between px-6 pb-10">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Vault</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Manage and organize your digital assets</p>
            </div>
            <div className="flex items-center">
                <Input type="text" placeholder="Search your vault..." className="w-72! rounded-full! py-2.5 dark:text-white text-black " />
                <Button
                    varient="primary"
                    className="ml-4 rounded-full font-medium md:gap-2 gap-1 md:px-6 px-3 "
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    <PlusIcon className="size-5"/>
                    Add Content
                </Button>
            </div>
        </div>
    );
};


export const EntityContainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6">
            <Card
                type="youtube"
                title="How the Internet Works – Full Course"
                description="A deep dive into TCP/IP, DNS, HTTP and everything in between. Great for beginners and pros alike."
                url="https://youtube.com"
                tags={["networking", "cs"]}
                date="Mar 5, 2026"
            />
            <Card
                type="twitter"
                title="Andrej Karpathy on scaling laws and the future of LLMs"
                description="A fascinating thread on why bigger models keep surprising us and where the ceiling might be."
                url="https://x.com"
                tags={["ai", "llm"]}
                date="Mar 6, 2026"
            />
            <Card
                type="notion"
                title="System Design Interview Prep Notes"
                description="Personal notes covering consistent hashing, CAP theorem, databases, and distributed caches."
                url="https://notion.so"
                tags={["system-design", "interview"]}
                date="Feb 28, 2026"
            />
            <Card
                type="github"
                title="shadcn/ui – Beautifully designed components"
                description="Re-usable components built with Radix UI and Tailwind CSS. Copy, paste, and customise."
                url="https://github.com"
                tags={["react", "ui", "open-source"]}
                date="Mar 1, 2026"
            />
        </div>
    );
}