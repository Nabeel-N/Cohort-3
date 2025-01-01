import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  networkAtom,
  jobsAtom,
  messagingAtom,
  notificationAtom,
} from "./atoms.js";
import { totalnotificationSelector } from "./atoms.js";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const netowrknotificationCount = useRecoilValue(networkAtom);
  const jobsAtomcount = useRecoilValue(jobsAtom);
  const notificatiionCount = useRecoilValue(notificationAtom);
  const messagingCount = useRecoilState(messagingAtom);
  const totalnotificationCount = useRecoilValue(totalnotificationSelector);
  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {netowrknotificationCount >= 100 ? "99+" : netowrknotificationCount})
      </button>
      <button>jobs({jobsAtomcount})</button>
      <button>Messaging({messagingCount})</button>
      <button>Notifications({notificatiionCount})</button>

      <button>Me({totalnotificationCount})</button>
    </>
  );
}
export default App;
