const Avatar = ({ imageUrl, altText, color, className }) => {
  return (
    <div className={` inline-flex border-4 ${color === "blue" ? "border-blue-500" : color === "indigo" ? "border-indigo-500" : color === "amber" ? "border-amber-500" : "border-green-500" } bg-purple-500 rounded-full ${className} `}>
      <img src={imageUrl} alt={altText} className=" border-3 border-neutral-900 rounded-full "></img>
    </div>
  );
};

export default Avatar;
