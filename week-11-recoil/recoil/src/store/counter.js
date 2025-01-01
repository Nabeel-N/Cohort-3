import { atom } from "recoil";

export const counterAtom = atom({
  default: 3,
  key: "counter",
});

function name(){
  let name = nabeel;
  console.log(name)
}
name();
