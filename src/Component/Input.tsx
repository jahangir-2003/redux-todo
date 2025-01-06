import React from "react";

interface InputProps {
  placeholder: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onchange,
  value,
  type,
  label,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="ml-3 capitalize">
        {label}:-
      </label>
      <div className="border-2  w-full h-[50px] rounded-md shadow-sm border-slate-400">
        <input
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          type={type}
          className="focus:outline-none w-full h-full bg-transparent p-1 pl-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default Input;
