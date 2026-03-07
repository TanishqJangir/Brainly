interface InputProps {
  placeholder?: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

const defaultStyle = "w-full px-4 py-2 text-black border border-gray-500 rounded-xl text-sm focus:outline-none transition";

export function Input({ placeholder, type = "text", value, onChange, className, required }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${defaultStyle} ${className}`}
    />
  );
}
