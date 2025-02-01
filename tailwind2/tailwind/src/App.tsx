import { useState } from "react";
import { Sidebartoggle } from "./Components/Sidebartoggle";
import { useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  console.error(isDesktop);

  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isDesktop]);
  const [sidebaropen, SetsidebarOpen] = useState(true);
  return (
    <div className="flex">
      <Sidebar sidebaropen={sidebaropen} SetsidebarOpen={SetsidebarOpen} />
      <MainContent sidebaropen={sidebaropen} SetsidebarOpen={SetsidebarOpen} />
    </div>
  );
}

interface props {
  sidebaropen: boolean;
  SetsidebarOpen: ({}: boolean) => {};
}

function Sidebar({ sidebaropen, SetsidebarOpen }: props) {
  if (!sidebaropen) {
    return (
      <div className="fixed top-0 left-0 bg-green-300">
        <div
          className="cursor-pointer"
          onClick={() => {
            SetsidebarOpen(!sidebaropen);
          }}
        >
          <Sidebartoggle />
        </div>
      </div>
    );
  }

  return (
    <div className="w-96 h-screen ">
      <div
        className="cursor-pointer hover:bg-purple-400"
        onClick={() => {
          SetsidebarOpen(!sidebaropen);
        }}
      >
        <Sidebartoggle />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="w-full">
      <div className="h-72 bg-black text-white"></div>
      <div className="grid grid-cols-11 gap-7 p-8 ">
        <div className="h-96 rounded-2xl  bg-red-400 md:col-span-2 col-span-11 -translate-y-12 shadow-lg hidden md:block absolute">
          translate-y-12 upside
        </div>
        <div className="h-96 rounded-2xl  bg-yellow-200 md:col-span-6 col-span-11 shadow-lg">
          6col span
        </div>
        <div className="h-96 rounded-2xl  bg-yellow-200 md:col-span-3 col-span-11 shadow-lg">
          6col span
        </div>
      </div>
    </div>
  );
}

export default App;
