import Tag from "../components/Tag";

const Introduction = () => {
  return (
    <section className=" px-8 lg:px-12 py-28 lg:py-40 flex flex-col items-center justify-center gap-10 ">
      {/* Tag */}
      <div className=" flex items-center justify-center ">
        <Tag value="Introducing Layers"/>
      </div>
      {/* Paragraph */}
      <div className=" text-4xl md:text-6xl lg:text-7xl font-medium text-center text-white ">
        <span>Your creative process deserves better.</span>{" "}
        <span className=" text-white/15 ">
          You're racing to create exceptional work, but traditional design tools
          slow you down with unnecessary complexity and steep learning curves.
        </span>
        <span className=" block text-lime-400 ">
          That&apos;s why we built Layers.
        </span>
      </div> 
    </section>
  );
};

export default Introduction;
