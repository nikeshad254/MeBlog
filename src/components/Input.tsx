import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const inputId = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-1 text-sm font-semibold text-gray-600"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${className}`}
        type={type}
        ref={ref}
        {...props}
      />
    </div>
  );
});
export default Input;
