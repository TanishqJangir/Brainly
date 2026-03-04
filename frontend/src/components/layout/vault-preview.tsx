import RightArrow from "../../assets/svgIcons/RightArrow";
import { Button } from "../ui/Button";

const fixedCards = [
    {
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop",
        tag: "Notion",
        time: "3 days ago",
        title: "Q4 Strategy: Product Roadmap & Growth",
    },
    {
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop",
        tag: "YouTube",
        time: "1 week ago",
        title: "How to Build a Second Brain — Full Tutorial",
    },
    {
        image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop",
        tag: "Twitter",
        time: "2 days ago",
        title: "Thread: 10 mental models every founder should know",
    },
    {
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop",
        tag: "Article",
        time: "Today",
        title: "The Science of Deep Work and Flow States",
    },
];

const VaultPreview = () => {
    return (
        <div className="w-full h-screen flex flex-col px-6 sm:px-12 lg:px-24 py-8 gap-12 border border-gray-200 dark:border-white/10">
            <div className="flex justify-between items-center mt-15">
                <h1 className="text-2xl sm:text-4xl font-bold dark:text-white text-black select-none">The Vault Preview</h1>
                <Button varient="ghost" className="flex gap-2 justify-center rounded-full! font-semibold p-0! text-sm md:text-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-transparent dark:hover:text-gray-300">
                    View More
                    <RightArrow className="md:size-7 size-4 mt-1" />
                </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-8">
                {fixedCards.map((card, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden flex flex-col dark:bg-[#13152a] bg-white border dark:border-white/10 border-gray-200 hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer shadow-sm"
                    >
                        <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden shrink-0">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded dark:bg-white/10 bg-gray-100 dark:text-gray-300 text-gray-500">
                                    {card.tag}
                                </span>
                                <span className="text-xs text-gray-400 dark:text-gray-500">{card.time}</span>
                            </div>
                            <h3 className="text-sm sm:text-base font-bold dark:text-white text-gray-900 leading-snug">
                                {card.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VaultPreview;

