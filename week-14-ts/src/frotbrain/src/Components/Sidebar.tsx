import { Logo } from "../Icons/Logo";
import { TwitterIcon } from "../Icons/twitterIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";
import { SidebarItem } from "./SidebaItem";

export function Sidebar (){
  return <div className="h-screen bg-white border-r w-72 fixed  left-0 top-0 pl-6">
    <div className="flex text-2xl pt-4 items-center">
      <div className="pr-4 text-purple-600">
        <Logo/></div>
      Brainly
    </div>
    <div className="pt-4 ">
  <SidebarItem text ="Twitter" icon = {<TwitterIcon/>} />
  <SidebarItem text ="Youtube" icon = {<YoutubeIcon/>} />
    </div>
  </div>
}