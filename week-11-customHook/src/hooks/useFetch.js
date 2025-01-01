import { useEffect, useState } from "react";
import { c } from "vite/dist/node/types.d-aGj9QkWt";

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  }, [url]);
  return { finalData };
}
