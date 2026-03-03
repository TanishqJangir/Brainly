interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    varient: "primary" | "secondary" | "ghost" | "outline";
}

const varientStyles: Record<NonNullable<ButtonProps["varient"]>, string> = {
    primary: "bg-[#4c2dee] hover:bg-[#5536f1] text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center",
    secondary: "bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#4c2dee]/10 border-2 border-[#4c2dee] font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center",
    ghost: "bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center",
    outline: "bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg transition flex items-center justify-center",
}

export const Button = ({ children, onClick, className, disabled, varient = "primary" }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${varientStyles[varient]} ${className} cursor-pointer`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};