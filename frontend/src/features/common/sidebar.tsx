import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logos/logo.svg";
import XIcon from "../../assets/svgIcons/XIcon";
import LinkdinIcon from "../../assets/svgIcons/LinkdinIcon";
import InstagramIcon from "../../assets/svgIcons/InstagramIcon";
import GithubIcon from "../../assets/svgIcons/GithubIcon";
import PlayCircleIcon from "../../assets/svgIcons/PlayCircleIcon";
import LinkIcon from "../../assets/svgIcons/LinkIcon";
import AllIcon from "../../assets/svgIcons/AllIcon";
import NotionIcon from "../../assets/svgIcons/NotionIcon";
import SettingsIcon from "../../assets/svgIcons/SettingsIcon";
import Settings from "../dashboard/components/settings";

const navItems = [
    {
        label: "All",
        to: "/dashboard",
        icon: <AllIcon className="size-5.5" />,
    },
    {
        label: "YouTube",
        to: "/dashboard/youtube",
        icon: <PlayCircleIcon className="size-5.5" />,
    },
    {
        label: "X (Twitter)",
        to: "/dashboard/twitter",
        icon: <XIcon className="size-5.5" />,
    },
    {
        label: "Notion",
        to: "/dashboard/notion",
        icon: <NotionIcon className="size-5.5" />,
    },
    {
        label: "LinkedIn",
        to: "/dashboard/linkedin",
        icon: <LinkdinIcon className="size-5.5" />,
    },
    {
        label: "Instagram",
        to: "/dashboard/instagram",
        icon: <InstagramIcon className="size-5.5" />,
    },
    {
        label: "GitHub",
        to: "/dashboard/github",
        icon: <GithubIcon className="size-5.5" />,
    },
    {
        label: "Other Links",
        to: "/dashboard/links",
        icon: <LinkIcon className="size-5.5" />,
    },
];

interface SidebarProps {
    collapsed?: boolean;
}

const Sidebar = ({ collapsed = false }: SidebarProps) => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const [settingsModal, setSettingsModal] = useState(false);

    const clickSettings = () => {
        setActive("/dashboard/settings");
        setSettingsModal(true);
    }

    return (
        <>
        {settingsModal && <Settings onOpen={settingsModal} onClose={setSettingsModal} />}
        <aside className={`h-screen flex flex-col bg-white dark:bg-[#111111] border-r border-gray-200 dark:border-white/10 select-none shrink-0 transition-all duration-300 overflow-hidden ${collapsed ? "w-16" : "w-60"}`}>

            {/* Logo + workspace */}
            <div className={`flex items-center gap-3 px-3 py-5 border-b border-gray-100 dark:border-white/10 ${collapsed ? "justify-center" : "px-5"}`}>
                <div className="flex items-center justify-center w-9 h-9 bg-brand rounded-xl shrink-0">
                    <img src={logo} alt="Brainly" className="size-5" />
                </div>
                {!collapsed && (
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Brainly</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">Personal Workspace</span>
                    </div>
                )}
            </div>

            {/* Nav */}
            <nav className="flex-1 flex flex-col gap-1 px-3 pt-5 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = active === item.to;
                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setActive(item.to)}
                            title={collapsed ? item.label : undefined}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${collapsed ? "justify-center" : ""} ${
                                isActive
                                    ? "bg-brand text-white"
                                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/8 hover:text-gray-900 dark:hover:text-white"
                            }`}
                        >
                            {item.icon}
                            {!collapsed && item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="px-3 pb-4 flex flex-col gap-1 border-t border-gray-100 dark:border-white/10 pt-3">
                <Link
                    to="/dashboard/settings"
                    onClick={clickSettings}
                    title={collapsed ? "Settings" : undefined}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${collapsed ? "justify-center" : ""} ${
                        active === "/dashboard/settings"
                            ? "bg-brand text-white"
                            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/8 hover:text-gray-900 dark:hover:text-white"
                    }`}
                >
                    <SettingsIcon className="size-6" />
                    {!collapsed && "Settings"}
                </Link>

                {/* User profile */}
                <div className={`flex items-center gap-3 px-3 py-2.5 mt-1 rounded-xl bg-gray-100 dark:bg-white/5 ${collapsed ? "justify-center" : ""}`}>
                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold shrink-0">
                        U
                    </div>
                    {!collapsed && (
                        <div className="flex flex-col leading-tight overflow-hidden">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">User</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500 truncate">user@brainly.app</span>
                        </div>
                    )}
                </div>
            </div>
        </aside>
        </>
    );
};

export default Sidebar;
