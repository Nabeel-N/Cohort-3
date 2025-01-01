import { useEffect,  seState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost,
  );
  return (
    <div>  
      <button
        onClick={function () {
          return setCurrentPost(1);
        }}
      >
        Post 1
      </button>
      <button onClick={() => setCurrentPost(2)}>Post 2</button>
      <button onClick={() => setCurrentPost(3)}>Post 3</button>
      <button onClick={Makething}></button>
      <button onClick={Big}></button>
      <button onClick={Makething}></button>
      <div style={{ background: "grey" }}>{JSON.stringify(finalData)}</div>
      <button onClick={}></button>
      <button>Make</button>
    </div>
  );
}
export default App;
