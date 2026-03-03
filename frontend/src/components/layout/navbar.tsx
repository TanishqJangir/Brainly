import { Button } from "../ui/Button";
import logo from "../../assets/logos/logo.svg";
import Link from "../ui/Link";
import LightDarkToggle from "../../assets/svglogos/LightDarkToggle";

const Navbar = () => {
    return (
        <div className="w-full h-17 dark:bg-[#131024] bg-white flex justify-between items-center dark:text-white px-20 text-black border-b dark:border-gray-700 border-gray-300">
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="flex items-center justify-center w-9 h-9 bg-[#4c2dee] rounded-full">
                    <img src={logo} alt="Brainly Logo" className="size-6" />
                </div>
                <h1 className="text-2xl font-bold">Brainly</h1>
            </div>
            <div className="flex gap-15">
                <Link href="#" className="dark:text-gray-300 font-medium dark:hover:text-white hover:text-[#4c2dee] transition">Home</Link>
                <Link href="#" className="dark:text-gray-300 font-medium dark:hover:text-white hover:text-[#4c2dee] transition">About</Link>
                <Link href="#" className="dark:text-gray-300 font-medium dark:hover:text-white hover:text-[#4c2dee] transition">Contact</Link>
            </div>
            <div className="flex gap-4 justify-center items-center">
            <button 
                onClick={(e) => {
                    const btn = e.currentTarget;
                    btn.classList.add('animate-spin-once');
                    document.documentElement.classList.toggle('dark');
                    setTimeout(() => btn.classList.remove('animate-spin-once'), 400);
                }}
                className="cursor-pointer transition-all duration-300 hover:scale-110 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20"
            >
                <LightDarkToggle 
                    className="size-5 text-gray-700 dark:text-gray-200" 
                />
            </button>
            <Button varient="primary" className="px-6 rounded-xl! cursor-pointer">Get Started</Button>
            </div>
        </div>
    );
};


export default Navbar;