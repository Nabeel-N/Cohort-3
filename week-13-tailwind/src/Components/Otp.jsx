import { useRef } from "react";

export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <div className="flex-justify-center">
      <Subotpbox
        reference={ref1}
        onDone={() => {
          ref2.current.focus();
        }}
        goBack={() => {}}
      />
      <Subotpbox
        reference={ref2}
        onDone={() => {
          ref3.current.focus();
        }}
        goBack={() => {}}
      />

      <Subotpbox
        reference={ref3}
        onDone={() => {
          ref4.current.focus();
        }}
      />
      <Subotpbox
        reference={ref4}
        onDone={() => {
          ref5.current.focus();
        }}
      />
      <Subotpbox
        reference={ref5}
        onDone={() => {
          ref6.current.focus();
        }}
      />

      <Subotpbox
        reference={ref6}
        onDone={() => {
          ref6.focus();
        }}
      />
    </div>
  );
}

function Subotpbox({ reference, onDone }) {
  return (
    <div>
      <input ref={reference} onChange={(e) => {
          onDone();
        }}
        type="text"
        className="m-2 w-[40px] h-[50px] rounded 2xl bg-blue-500 outline-none">
        </input>
    </div>
  );
}
