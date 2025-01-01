import { useRef } from "react";
import { useState } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum Contenttype {
  Youtube = "Youtube",
  Twitter = "Twitter",
}

export function CreateContentModal({ open, onClose }) {
  const titleref = useRef<HTMLInputElement>();
  const linkref = useRef<HTMLInputElement>();
  const [type, settype] = useState(Contenttype.Youtube);

  async function addContent() {
    const title = titleref.current?.value;
    const link = linkref.current?.value;
    const response = await axios.post(
      `${BACKEND_URL}api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (response) {
      alert("Contents Added Successfully");
    } else {
      alert("contents not found");
    }
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-blue-100 fixed top-0 left-0 opacity-60 flex justify-center items-center ">
          <div className="flex flex-col justify-center bg-yellow-300">
            <span className="bg-white opacity-100 p-4 rounded ">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
                <div>
                  <Input reference={titleref} placeholder={"Title"}></Input>
                  <Input reference={linkref} placeholder={"Link"}></Input>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4">
                <Button
                  text="Youtube"
                  variant={
                    type === Contenttype.Youtube ? "primary" : "secondary"
                  }
                  onClick={() => {
                    settype(Contenttype.Youtube);
                  }}
                ></Button>

                <Button
                  text="Twitter"
                  variant={
                    type === Contenttype.Twitter ? "primary" : "secondary"
                  }
                  onClick={() => {
                    settype(Contenttype.Twitter);
                  }}
                ></Button>
              </div>

              <div className="flex justify-center items-center p-2 ">
                <Button onClick={addContent} variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
