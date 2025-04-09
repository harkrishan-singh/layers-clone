const Tag = ({ value }) => {
  return (
    <div className=" inline-flex px-3 py-1 text-lime-400 uppercase gap-2 border border-lime-400 rounded-full ">
      <span className=" hover:rotate-10 transition-all " >&#10038;</span>
      <span>{value}</span>
    </div>
  );
};

export default Tag;
