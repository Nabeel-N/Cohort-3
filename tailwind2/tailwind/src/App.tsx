import "./App.css";
import ComputerIcons from "./ComputerIcons";

function App() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <div className="flex justify-center items-center p-8 ">
        <ComputerIcons />
        <div className="text-teal-400 text-2xl">Webinar.gg</div>
      </div>
      <div className="text-white font-bold text-2xl flex justify-center items-center">
        Verify your age
      </div>
      <div className="text-gray-100 text-justify flex items-center justify-center">
        please confirm your birth year your data will not be stored
      </div>
      <span className="flex justify-center items-center text-center">
      <input className="bg-violet-50 font-sans text-center flex justify-center items-center " type="text"  placeholder="Your birth year" />
      </span>
      <span className="flex justify-center items-center text-center m-5 ">
      <input className="bg-violet-500 font-sans text-center font-semibold flex justify-center items-center
      bg-slate-400 " type="text"  placeholder="continue" />
      </span>
    </div>
  );
}

export default App;
