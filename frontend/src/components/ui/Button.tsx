interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    varient: "primary" | "secondary" | "ghost" | "outline";
}

const varientStyles: Record<NonNullable<ButtonProps["varient"]>, string> = {
    primary: "bg-[#4c2dee] hover:bg-[#3a20c8] text-white font-semibold py-2 px-4 rounded-lg transition",
    secondary: "bg-[#181936] hover:bg-[#2a1a5a] text-[#4c2dee] font-semibold py-2 px-4 rounded-lg transition",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg transition",
    outline: "bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg transition",
}

export const Button = ({ children, onClick, className, disabled, varient = "primary" }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${varientStyles[varient]} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};