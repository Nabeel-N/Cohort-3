import { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex  text-gray-700 py-2 cursor-pointer hover:bg-gray-200 items-center 
    rounded max-w-48 pl-4 transition-all duration-150">
      <div className="pr-2  ">
        {icon}        
      </div>
      <div className="pr-2  font-bold">
        {text}
        </div>
    </div>
  );
}
