import { PlusIcon } from "../Icons/PlusIcon";
import { ShareIcon } from "../Icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="p-8 bg-white rounded-md  max-w-96 border-gray-300 border">
        <div className="flex justify-between bg-green-200">
          <div className="flex items-center text-md text-black-500">
            <div className="pr-2 text-black-500">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center pr-2">
            <div className="pr-2">
              <a href={link} target="_blank" />
              <ShareIcon />
            </div>
            <div className="pr-2">
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src="https://www.youtube.com/embed/45kgRfRMoXI?si=hzv7jltEMGZJEzN_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
           web-share"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href="https://twitter.com/username/status/807811447862468608"></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
