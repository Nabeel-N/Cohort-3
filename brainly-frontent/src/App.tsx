import { Button } from "./components/Button";
import { PlusIcons } from "./icons/Plusicons";
import { ShareIcon } from "./icons/Shareicon";
import { Card } from "./components/Card";
import { useState } from "react";
function App() {
  const [modelopen , setmodelopen] = useState(false);
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          text="Add content"
          startIcon={<PlusIcons />}
        />
        <Button
          variant="secondary"
          text="Share brain"
          startIcon={<ShareIcon />}
        />
      </div>

      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/kirat_tw/status/1633685473821425666"
          title="First tweet"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=0o3gsxiHxQY"
          title="First video"
        />
      </div>
    </div>
  );
}
export default App;
