import LoginForm from "../components/loginForm";

const Login = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0a] px-4">
            <div className="w-full max-w-md bg-white dark:bg-[#111118] border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-brand/5 p-8 select-none">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
