import CrossIcon from "../../../assets/svgIcons/CrossIcon";



const Settings = ({ onOpen, onClose }: {
    onOpen: boolean;
    onClose: (open: boolean) => void;
}) => {

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
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Settings;