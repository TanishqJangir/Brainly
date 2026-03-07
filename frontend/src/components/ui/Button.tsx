interface ButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    varient: "primary" | "secondary" | "ghost" | "outline";
    type?: "button" | "submit" | "reset";
}

const varientStyles: Record<NonNullable<ButtonProps["varient"]>, string> = {
    primary: "bg-brand hover:bg-[#5a5dda] text-white font-semibold py-2 px-4 rounded-2xl transition flex items-center justify-center",
    secondary: "bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-brand/10 border-2 border-brand font-semibold py-2 px-4 rounded-2xl transition flex items-center justify-center",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-white/10 text-brand font-semibold py-2 px-4 rounded-2xl transition flex items-center justify-center",
    outline: "bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-2xl transition flex items-center justify-center",
}

export const Button = ({ children, onClick, className, disabled, varient = "primary", type = "button" }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${varientStyles[varient]} ${className} cursor-pointer`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};