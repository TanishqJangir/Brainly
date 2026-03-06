import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import GithubIcon from "../../../assets/svgIcons/GithubIcon";

const socialButtons = [
    {
        label: "Continue with GitHub",
        icon: <GithubIcon className="size-5" />,
        onClick: () => {},
    },
    {
        label: "Continue with Google",
        icon: (
            <svg className="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
        ),
        onClick: () => {},
    },
    {
        label: "Continue with Microsoft",
        icon: (
            <svg className="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022"/>
                <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00"/>
                <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF"/>
                <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900"/>
            </svg>
        ),
        onClick: () => {},
    },
];

const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full max-w-md mx-auto">
            {/* Header */}
            <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand/10 mb-4">
                    <div className="w-6 h-6 rounded-full bg-brand" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Welcome back</h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Sign in to your Brainly vault</p>
            </div>

            {/* Social buttons */}
            <div className="flex flex-col gap-3 mb-6">
                {socialButtons.map((btn) => (
                    <button
                        key={btn.label}
                        onClick={btn.onClick}
                        className="flex items-center justify-center gap-3 w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-200 cursor-pointer"
                    >
                        {btn.icon}
                        {btn.label}
                    </button>
                ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
                <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">or</span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            </div>

            {/* Email form */}
            <form className="flex flex-col gap-4">
                <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    labelClassName="text-gray-700 dark:text-gray-300"
                    className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand/50"
                />
                <div className="flex flex-col gap-1">
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        required
                        labelClassName="text-gray-700 dark:text-gray-300"
                        className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand/50"
                    />
                    <a href="#" className="text-xs text-brand hover:underline self-end mt-0.5">Forgot password?</a>
                </div>

                <Button
                    varient="primary"
                    className="w-full py-2.5! rounded-xl! font-semibold text-base mt-1"
                    onClick={() => {}} //TODO: add login functionality
                >
                    Sign in
                </Button>

                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => navigate("/signup")} className="text-brand font-semibold hover:underline cursor-pointer">Sign up for free</button>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;