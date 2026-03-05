import { Button } from "../ui/Button";


const ReadyHomeCard = () => {
    return (
        <div className="flex h-screen w-full justify-center items-center border-b border-gray-200 dark:border-white/10">
            <div className="bg-[#4e34e6] h-[60%] w-[80%] rounded-3xl flex flex-col justify-center items-center gap-6 text-white px-10 text-center select-none">
                <h1 className="md:text-5xl text-3xl w-[50%] font-extrabold">Ready to build your second brain?</h1>
                <p className="text-lg md:text-xl text-gray-200 w-[50%]">Organize, capture, and retrieve your thoughts instantly with our intelligent note-taking platform.</p>
                <div className="flex md:gap-5 gap-2">
                    <Button
                    varient="primary" 
                    className="bg-white text-[#4e34e6]! md:font-bold md:text-xl font-semibold md:px-6 md:py-4 px-3 py-2 rounded-3xl! hover:bg-gray-200 transition-all duration-300 hover:scale-[1.03]"
                    onClick={() => {}} //TODO: Add functionality to navigate to the sign up page
                    >
                        Get Started for Free
                    </Button>

                    <Button
                    varient="primary" 
                    className=" bg-[#735bfa]! dark:bg-[#735bfa] text-white! md:font-bold md:text-xl font-semibold md:px-6 md:py-4 px-3 py-2 rounded-3xl! transition-all duration-300 hover:bg-[#6650e9]! "
                    onClick={() => {}} //TODO: Add functionality to navigate to the about page
                    >
                        Learn More
                    </Button>
                </div>    
            </div>
        </div>
    )
}

export default ReadyHomeCard;