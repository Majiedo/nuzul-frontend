import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          "px-4 py-2 rounded-md border w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
