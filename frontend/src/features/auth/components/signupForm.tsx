import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import GoogleIcon from "../../../assets/svgIcons/GoogleIcon";
import GithubIcon from "../../../assets/svgIcons/GithubIcon";
import EyeIcon from "../../../assets/svgIcons/EyeIcon";
import EyeSlashIcon from "../../../assets/svgIcons/EyeSlashIcon";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full max-w-md bg-white dark:bg-[#111118] border border-gray-100 dark:border-white/10 rounded-2xl shadow-md p-8 sm:p-10 select-none">
            {/* Header */}
            <div className="mb-7 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create Account</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Build your <span className="text-brand font-medium">Digital Brain</span> and never lose a link again.
                </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <Input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand/50"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <Input
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand/50"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                            className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand/50 pr-10!"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(p => !p)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
                        >
                            {showPassword ? <EyeSlashIcon className="size-4" /> : <EyeIcon className="size-4" />}
                        </button>
                    </div>
                    <p className="text-xs text-brand/80 dark:text-brand/70 mt-0.5">Must be at least 8 characters.</p>
                </div>

                <Button
                    varient="primary"
                    className="w-full py-2.5! rounded-xl! font-semibold text-base mt-1"
                    onClick={() => {}} //TODO: add signup functionality
                >
                    Create Account
                </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
                <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">or continue with</span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            </div>

            {/* Social buttons */}
            <div className="flex gap-3">
                <Button
                    varient="outline"
                    className="flex-1 py-2.5! rounded-xl! border-gray-200! dark:border-white/10 bg-white! dark:bg-white/5 hover:bg-gray-50! dark:hover:bg-white/10 text-sm! font-medium! text-gray-700! dark:text-gray-200 gap-3"
                    onClick={() => {}}
                >
                    <GoogleIcon />
                    Google
                </Button>
                <Button
                    varient="outline"
                    className="flex-1 py-2.5! rounded-xl! border-gray-200! dark:border-white/10 bg-white! dark:bg-white/5 hover:bg-gray-50! dark:hover:bg-white/10 text-sm! font-medium! text-gray-700! dark:text-gray-200 gap-3"
                    onClick={() => {}}
                >
                    <GithubIcon className="size-5 text-black!" />
                    GitHub
                </Button>
            </div>

            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-5">
                Already have an account?{" "}
                <Link to="/login" className="text-brand font-semibold hover:underline">Sign In</Link>
            </p>
        </div>
    );
};

export default SignupForm;
