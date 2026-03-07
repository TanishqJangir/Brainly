import { useState } from "react"
import Sidebar from "../../common/sidebar"
import { EntityHeader, EntityContainer } from "../components/entity-Components"
import SidebarIcon from "../../../assets/svgIcons/SidebarIcon"


const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-[#080808]">
            <div className="relative shrink-0">
                <Sidebar collapsed={collapsed} />
                <button
                    onClick={() => setCollapsed(prev => !prev)}
                    title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                    className="cursor-pointer absolute -right-3.5 top-5 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white shadow-sm transition-colors duration-150"
                >
                    <SidebarIcon className="size-4" />
                </button>
            </div>
            <main className="flex-1 overflow-y-auto p-6">
                <EntityHeader />
                <EntityContainer />
            </main>
        </div>
    )
}

export default Dashboard