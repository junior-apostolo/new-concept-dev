import React, { useState, SelectHTMLAttributes } from "react";

type Option = {
  value: string;
  label: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

// type SelectProps = {
//   options: Option[];
// };

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <select
      {...props}
      className="border border-zinc-200 shadow-sm rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
