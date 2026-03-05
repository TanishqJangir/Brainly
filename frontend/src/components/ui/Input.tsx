interface InputProps {
  label?: string;
  placeholder?: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const defaultStyle = "w-full px-4 py-2 text-black border border-gray-500 rounded-xl text-sm focus:outline-none transition";

export function Input({ label, placeholder, type = "text", value, onChange, className }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${defaultStyle} ${className}`}
      />
    </div>
  );
}
