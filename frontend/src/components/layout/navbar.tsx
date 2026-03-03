import { Button } from "../ui/Button";
import logo from "../../assets/logos/logo.svg";
import Link from "../ui/Link";
import LightDarkToggle from "../../assets/svgIcons/LightDarkToggleIcon";

const Navbar = () => {
    return (
        <div className="w-full h-17 bg-white/60 backdrop-blur-sm dark:bg-black/20 dark:backdrop-blur-sm flex justify-between items-center dark:text-white px-4 sm:px-8 md:px-12 lg:px-20 text-black border-b dark:border-gray-700 border-gray-300">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
                <div className="flex items-center justify-center w-7 h-7 md:h-9 md:w-9 bg-[#4c2dee] rounded-full">
                    <img src={logo} alt="Brainly Logo" className="md:size-6 size-4" />
                </div>
                <h1 className="md:text-2xl text-xl font-bold">Brainly</h1>
            </Link>
            <div className="hidden sm:flex lg:gap-15 gap-5 justify-center items-center text-sm md:text-base lg:text-lg">
                <Link href="#" className="dark:text-gray-300 font-medium dark:hover:text-white hover:text-[#4c2dee] transition">Home</Link>
                <Link href="#" className="dark:text-gray-300 font-medium dark:hover:text-white hover:text-[#4c2dee] transition">Preview</Link>
                <Link href="#" className="hidden md:inline dark:text-gray-300 font-medium dark:hover:text-white hover:text-[#4c2dee] transition">Features</Link>
                <Link href="#" className="hidden md:inline dark:text-gray-300 font-medium dark:hover:text-white hover:text-[#4c2dee] transition">Contact</Link>
            </div>
            <div className="flex gap-4 justify-center items-center">
            <button
                onClick={(e) => {
                    const btn = e.currentTarget;
                    btn.classList.add('animate-spin-once');
                    document.documentElement.classList.toggle('dark');
                    setTimeout(() => btn.classList.remove('animate-spin-once'), 600);
                }}
                className="cursor-pointer transition-all duration-300 hover:scale-110 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20"
            >
                <LightDarkToggle 
                    className="size-5 text-gray-700 dark:text-gray-200" 
                />
            </button>
            <Button varient="primary" className="lg:px-6 md:px-4 px-3 rounded-2xl! text-sm md:text-base lg:text-lg">Get Started</Button>
            </div>
        </div>
    );
};


export default Navbar;