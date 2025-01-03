export function CreateContentModal({ open, onClose }) {
    return (
      <>
        {open && (
          <div
            className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 
              flex justify-center"
          >
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                  <CrossIcon />
                </div>
                <div>
                  <Input placeholder="Title" />
                  <Input placeholder="Link" />
                </div>
                <Button variant="primary" text="Submit" />
              </span>
            </div>
          </div>
        )}
      </>
    );
  }
 