const Pointer = ({ label, color }) => {
  return (
    <div className=" relative ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" feather feather-mouse-pointer text-white "
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div
        className={` absolute top-full left-full px-2 inline-flex text-xs font-semibold text-center text-white rounded-full rounded-tl-none ${
          color === "red"
            ? "bg-red-500"
            : color === "blue"
            ? "bg-blue-500"
            : "bg-green-500"
        } `}
      >
        {label}
      </div>
    </div>
  );
};

export default Pointer;
