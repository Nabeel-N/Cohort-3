import { ReactElement } from "react";

interface Buttonprops {
  variant: "primary" | "secondary";
  text: string;
  startIcon: ReactElement;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-400",
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex justify-center items-center gap-2";

export function Button({ variant, text, startIcon }: Buttonprops) {
  return (
    <button className={`${variantClasses[variant]} ${defaultStyles}`}>
      {startIcon}
      <span>{text}</span>
    </button>
  );
}
