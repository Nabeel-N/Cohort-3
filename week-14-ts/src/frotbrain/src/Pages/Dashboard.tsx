import { Button } from "../Components/Button";
import { PlusIcon } from "../Icons/PlusIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { Card } from "../Components/Card";
import { CreateContentModal } from "../Components/CreatecontentModal";
import { useEffect, useState } from "react";
import { Sidebar } from "../Components/Sidebar";
import { SidebarItem } from "../Components/SidebaItem";
import { useContent } from "../Hooks/UseContent";

function Dashboard() {
  const [modalOpen, setModalopen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <Sidebar />

      <div className="p-2 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalopen(false);
          }}
        />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalopen(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<ShareIcon />}
          ></Button>
          <Button
            variant="secondary"
            text="Share"
            startIcon={<PlusIcon />}
          ></Button>
        </div>
        <div className="flex gap-4">
          {contents.map(({ _id, title, link, type }) => (
            <Card key={_id} type={title} link={link} title={type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
