import logo from "../../assets/logos/logo.svg";
import GithubIcon from "../../assets/svgIcons/GithubIcon";
import InstagramIcon from "../../assets/svgIcons/InstagramIcon";
import LinkdinIcon from "../../assets/svgIcons/LinkdinIcon";
import TwitterIcon from "../../assets/svgIcons/TwitterIcon";
import Link from "../ui/Link";

const HomePageFooter = () => {
    return (
        <div className="w-full h-60 flex justify-center items-center text-gray-500 py-10">
            <div className="grid grid-cols-4 w-[86%] md:gap-20 gap-10">

                <div className="flex flex-col justify-between items-start gap-20">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-black dark:text-white">
                            <div className="flex items-center justify-center w-7 h-7 md:h-6 md:w-6 bg-[#4c2dee] rounded-full">
                                <img src={logo} alt="Brainly Logo" className="md:size-4" />
                            </div>
                            <h1 className="md:text-xl text-lg font-bold">Brainly</h1>
                        </div>
                        <p>The only bookmarking tool you'll ever need. Built for the modern web.</p>
                    </div>
                    <p className="text-xs">© 2023 Your Company. All rights reserved.</p>
                </div>



                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-black dark:text-white">
                            <h1 className="md:text-xl text-lg font-bold">Product</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer">
                                Changelog
                            </Link>
                            <Link href="#" className="hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer">
                                Browser Extension
                            </Link>
                            <Link href="#" className="hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer">
                                Integrations
                            </Link>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-black dark:text-white">
                            <h1 className="md:text-xl text-lg font-bold">Support</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer">
                                Documentation
                            </Link>
                            <Link href="#" className="hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer">
                                Contact Us
                            </Link>
                            <Link href="#" className="hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-black dark:text-white">
                            <h1 className="md:text-xl text-lg font-bold">Connect</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="flex gap-2 hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer group">
                                <TwitterIcon className="dark:text-gray-300 text-gray-500 group-hover:text-[#4c2dee] transition-colors duration-300"/>
                                Twitter
                            </Link>
                            <Link href="#" className="flex gap-2 hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer group">
                                <LinkdinIcon className="dark:text-gray-300 text-gray-500 group-hover:text-[#4c2dee] transition-colors duration-300"/>
                                LinkedIn
                            </Link>
                            <Link href="#" className="flex gap-2 hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer group">
                                <InstagramIcon className="dark:text-gray-300 text-gray-500 group-hover:text-[#4c2dee] transition-colors duration-300"/>
                                Instagram
                            </Link>
                            <Link href="#" className="flex gap-2 hover:text-[#4c2dee] transition-colors duration-300 cursor-pointer group">
                                <GithubIcon className="dark:text-gray-300 text-gray-500 group-hover:text-[#4c2dee] transition-colors duration-300"/>
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageFooter;