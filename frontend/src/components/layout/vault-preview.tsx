import RightArrow from "../../assets/svgIcons/RightArrow";
import { Button } from "../ui/Button";

const fixedCards = [
    {
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop",
        tag: "Notion",
        time: "3 days ago",
        title: "Q4 Strategy: Product Roadmap & Growth",
        tagColor: "bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300",
    },
    {
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop",
        tag: "YouTube",
        tagColor: "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400",
        time: "1 week ago",
        title: "How to Build a Second Brain — Full Tutorial",
    },
    {
        image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop",
        tag: "Twitter",
        tagColor: "bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400",
        time: "2 days ago",
        title: "Thread: 10 mental models every founder should know",
    },

];

const VaultPreview = () => {
    return (
        <div className="w-full h-screen dark:bg-[#080808] flex flex-col px-6 sm:px-12 lg:px-24 py-8 gap-8 border border-gray-200 dark:border-white/10">
            <div className="flex justify-between items-start mt-15">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl md:text-4xl font-bold dark:text-white text-black select-none" style={{ fontFamily: 'Inter, sans-serif' }}>The Vault Preview</h1>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Sneak peak at how your knowledge is organized.
                    </p>
                </div>
                <Button
                    varient="ghost"
                    className="group/btn flex gap-2 rounded-full! font-semibold p-0! text-sm md:text-lg transition-all duration-300 ease-in-out hover:bg-transparent dark:hover:text-gray-300"
                    onClick={() => { }} //TODO: Add functionality to navigate to the vault page
                >
                    View All
                    <RightArrow className="md:size-7 size-4 mt-1 transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1.5" />
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
                {fixedCards.map((card, index) => (
                    <div
                        key={index}
                        className="group rounded-2xl overflow-hidden flex flex-col dark:bg-[#151515] bg-white border dark:border-white/10 border-gray-200 hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)]"
                    >
                        <div className="w-full h-48 md:h-64 overflow-hidden shrink-0">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1">
                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded ${card.tagColor}`}>
                                    {card.tag}
                                </span>
                                <span className="text-xs text-gray-400 dark:text-gray-500">{card.time}</span>
                            </div>
                            <h3 className="md:text-lg text-base font-bold dark:text-white text-gray-900 leading-snug group-hover:text-brand" style={{ fontFamily: 'Inter, sans-serif' }}>
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

