export const Button = ({ disabled, onClick, Children }) => {
  return (
    <div
      onClick={onClick}
      className={`px-32 py-38 text-white cursor-pointer ${
        disabled ? "bg-blue-200" : "bg-green-400"
      }`}
    >
      {Children}
    </div>
  );
};
