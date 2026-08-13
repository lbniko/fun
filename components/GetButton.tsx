"use client";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: String;
  loadingText: String;
  disabled: boolean;
}

export function GetButton({
  onClick,
  text,
  loadingText,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-3xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-xl outline-none text-white ${disabled ? "" : "cursor-pointer"} ${!disabled && "hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 hover:-translate-y-0.5 transition duration-400"} `}
    >
      {disabled ? loadingText : text}
    </button>
  );
}
