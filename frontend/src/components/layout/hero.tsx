import hero from "../../assets/images/hero-image.png"
import PlayCircleIcon from "../../assets/svgIcons/PlayCircleIcon";
import { Button } from "../ui/Button";


const Hero = () => {
    return (
        <div className="relative w-full h-[calc(100vh-68px)] flex justify-center items-center text-center pl-23 bg-transparent dark:text-white text-black select-none border-b border-gray-200 dark:border-white/10">
            {/* Glow — light mode */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[55%] h-[80%] rounded-full bg-violet-300/30 blur-[80px] pointer-events-none dark:hidden" />
            {/* Glow — dark mode */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[55%] h-[80%] rounded-full bg-indigo-600/40 blur-[100px] pointer-events-none hidden dark:block" />
            <div className="flex flex-col justify-start items-start md:gap-5 gap-3">
                <p className="flex items-center gap-2 text-brand text-sm dark:border-brand border-gray-300 border-2 md:px-5 px-3 md:py-1 rounded-full font-bold bg-[#e6e3f9] dark:bg-[#1c1340]">
                    <span className="relative flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-brand opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                    </span>
                    V2.0 IS NOW LIVE
                </p>
                <h1 className="text-5xl md:text-8xl font-bold md:text-left text-center">Your Personal Digital <span className="text-brand">Brain</span></h1>
                <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 md:text-left text-center">Save, organize, and retrieve important links from YouTube, Twitter, Notion, and more in one secure vault.</p>
                <div className="flex md:gap-6 gap-4 md:justify-start justify-center items-center w-full">
                    <Button
                        varient="primary"
                        className="rounded-3xl! font-semibold md:py-3 md:px-6 md:mt-4 py-1 px-4 mt-2 text-lg md:text-2xl hover:scale-104 transition-transform duration-300 ease-in-out cursor-pointer"
                        onClick={() => { }} //TODO: Add functionality to navigate to the sign up page
                    >
                        Get Started for Free
                    </Button>
                    <Button
                        varient="secondary"
                        className="flex gap-2 rounded-3xl! font-semibold md:py-3 md:px-6 md:mt-4 py-1 px-4 mt-2 md:text-2xl text-lg hover:scale-104 transition-transform duration-300 ease-in-out cursor-pointer"
                        onClick={() => { }} //TODO: Add functionality to navigate to the vault page
                    >
                        <PlayCircleIcon className="md:size-7 size-5 text-brand" />
                        Vault Preview
                    </Button>
                </div>
            </div>
            <span className="hidden md:block">
                <img src={hero} alt="Hero Image" className="h-full object-contain relative z-10 rounded-lg" />
            </span>
        </div>
    );
};


export default Hero;