const FeatureBox = ({ featureTitle, featureDesc, children, className }) => {
  return (
    <div
      className={` px-6 py-8 flex flex-col items-start justify-center border border-white/10 rounded-3xl bg-neutral-900 ${className} `}
    >
      <div className=" w-full aspect-video ">{children}</div>
      <div className=" flex flex-col gap-2 ">
        <h3 className=" text-3xl font-medium ">{featureTitle}</h3>
        <p className=" text-lg text-white/50 ">{featureDesc}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
