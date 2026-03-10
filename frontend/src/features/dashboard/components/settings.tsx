import { useState } from "react";
import CrossIcon from "../../../assets/svgIcons/CrossIcon";
import MoonIcon from "../../../assets/svgIcons/MoonIcon";
import SunIcon from "../../../assets/svgIcons/SunIcon";
import { toggleTheme, isDarkMode } from "../../../utils/toggleTheme";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/Button";


const Settings = ({ onOpen, onClose }: {
    onOpen: boolean;
    onClose: (open: boolean) => void;
}) => {

    const [isDark, setIsDark] = useState(() => isDarkMode());
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success("Logged out successfully!");
        navigate("/login");

    }

    if (!onOpen) return null;
    return (
        <div className="fixed z-10 left-0 top-0 flex h-screen w-full bg-gray-50/55 dark:bg-[#080808]/55 backdrop-blur-sm items-center justify-center">
            <div className="relative m-auto w-full max-w-lg rounded-2xl bg-white dark:bg-[#111111] dark:text-white px-6 py-8 shadow-lg ">
                <CrossIcon
                    onClick={() => onClose(false)}
                    className="size-5 absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white transition cursor-pointer rounded-md"
                />
                <div>
                    <h2 className="text-xl font-bold">Settings</h2>
                    <p className="text-gray-600">Here you can adjust your dashbord settings.</p>
                </div>
                <div>
                    <button
                    onClick={(e) => {
                        toggleTheme(e.currentTarget);
                        setIsDark(prev => !prev);
                    }}
                    className="cursor-pointer transition-all duration-300 hover:scale-110 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20"
                    aria-label="Toggle theme"
                >
                    {isDark
                        ? <SunIcon className="size-5 text-gray-200" />
                        : <MoonIcon className="size-5 text-gray-700" />
                    }
                </button>

                <Button 
                    variant="delete"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default Settings;