const CallToAction = () => {
  return (
    <section className=" py-24 ">
      {/* Heading Line Container */}
      <div className=" px-6 lg:px-8 flex items-start justify-start gap-16 overflow-x-clip ">
        {Array.from({ length: 10 }).map((_, key) => (
          /* Heading Line  */
          <div
            key={key}
            className=" flex flex-none items-center justify-center gap-16 text-7xl md:text-8xl "
          >
            <span className=" text-7xl text-lime-400 ">&#10038;</span>
            <h1>Try it for free</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CallToAction;
