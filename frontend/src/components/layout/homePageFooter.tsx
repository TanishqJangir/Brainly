import logo from "../../assets/logos/logo.svg";
import GithubIcon from "../../assets/svgIcons/GithubIcon";
import InstagramIcon from "../../assets/svgIcons/InstagramIcon";
import LinkdinIcon from "../../assets/svgIcons/LinkdinIcon";
import TwitterIcon from "../../assets/svgIcons/TwitterIcon";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import Link from "../ui/Link";

const HomePageFooter = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-gray-500 py-10 dark:bg-[#0d0c16] bg-gray-200">
            <div className="grid grid-cols-4 w-[86%] md:gap-10 gap-10 my-6">
                <div className="flex flex-col justify-between items-start md:gap-6 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-black dark:text-white">
                            <div className="flex items-center justify-center w-7 h-7 md:h-6 md:w-6 bg-brand rounded-full">
                                <img src={logo} alt="Brainly Logo" className="md:size-4" />
                            </div>
                            <h1 className="md:text-xl text-lg font-bold">Brainly</h1>
                        </div>

                        <p>The only bookmarking tool you'll ever need. Built for the modern web and the curious minds that explore it.</p>
                    </div>
                    <div className="flex md:gap-4 gap-2 mt-2">
                        <div className="group p-2 bg-brand hover:bg-[#5137e8] hover:scale-[1.1] rounded-2xl cursor-pointer transition duration-300">
                            <GithubIcon className="text-white" />
                        </div>
                        <div className="group p-2 bg-brand hover:bg-[#5137e8] hover:scale-[1.1] rounded-2xl cursor-pointer transition duration-300">
                            <InstagramIcon className="text-white" />
                        </div>
                        <div className="group p-2 bg-brand hover:bg-[#5137e8] hover:scale-[1.1] rounded-2xl cursor-pointer transition duration-300">
                            <LinkdinIcon className="text-white" />
                        </div>
                        <div className="group p-2 bg-brand hover:bg-[#5137e8] hover:scale-[1.1] rounded-2xl cursor-pointer transition duration-300">
                            <TwitterIcon className="text-white" />
                        </div>
                    </div>
                </div>



                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-black dark:text-white">
                            <h1 className="md:text-xl text-lg font-bold">Product</h1>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <Link href="#" className="hover:text-brand transition-colors duration-300 cursor-pointer">
                                Changelog
                            </Link>
                            <Link href="#" className="hover:text-brand transition-colors duration-300 cursor-pointer">
                                Browser Extension
                            </Link>
                            <Link href="#" className="hover:text-brand transition-colors duration-300 cursor-pointer">
                                Integrations
                            </Link>
                            <Link href="#" className="hover:text-brand transition-colors duration-300 cursor-pointer">
                                Desktop App
                            </Link>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-black dark:text-white">
                            <h1 className="md:text-xl text-lg font-bold">Support</h1>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <Link href="#" className="hover:text-brand transition-colors duration-300 cursor-pointer">
                                Documentation
                            </Link>
                            <Link href="#" className="hover:text-brand transition-colors duration-300 cursor-pointer">
                                Contact Us
                            </Link>
                            <Link href="#" className="hover:text-brand transition-colors duration-300 cursor-pointer">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-brand transition-colors duration-300 cursor-pointer">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-black dark:text-white">
                            <h1 className="md:text-xl text-lg font-bold">Stay Updated</h1>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>Get the latest news and updates from our team.</p>
                            <div className="flex gap-2">
                                <Input type="text" placeholder="Enter your email" className="active:outline-none dark:text-gray-300 text-black placeholder-gray-600" />
                                <Button
                                    varient="primary"
                                    onClick={() => { }} //TODO: Add functionality to handle email subscription
                                >Join</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[86%] flex justify-between items-center border-t border-gray-400 dark:border-white/10 pt-6">
                <p className="text-center text-sm text-gray-500">
                    © 2023 Your Company. All rights reserved.
                </p>
                <p className="text-center text-sm text-gray-500 ">
                    Designed with precision for your digital brain.
                </p>
            </div>
        </div>
    )
}

export default HomePageFooter;