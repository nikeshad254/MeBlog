import React, { useId } from "react";

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[];
  label?: string;
}

function Select(
  { className = "", options, label, ...props }: SelectProps,
  ref: React.Ref<HTMLSelectElement>
) {
  const selectID = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={selectID}>{label}</label>}
      <select
        id={selectID}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
