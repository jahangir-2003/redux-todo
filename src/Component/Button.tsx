import React from "react";

interface ButtonProps {
  title: React.ReactNode;
  onclick: () => void;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onclick, classname }) => {
  return (
    <button
      onClick={onclick}
      className={`w-[35px] h-[30px] md:w-[40px] flex items-center justify-center bg-blue-700 text-xl md:text-2xl text-white capitalize font-bold  hover:bg-blue-900 shadow-lg duration-700 text-[15px] ${classname}`}
    >
      {title}
    </button>
  );
};

export default Button;
