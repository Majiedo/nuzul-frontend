import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-500 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
