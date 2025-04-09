const IntegrationsList = ({ integrations, className }) => {
  return (
    <div
      className={` flex flex-col items-center justify-center gap-4 ${className}`}
    >
      {integrations.map((integration, key) => (
        <div
          className=" w-full p-6 flex flex-col items-center justify-center gap-3 border border-white/15 rounded-2xl bg-neutral-900 "
          key={key}
        >
          <img
            src={integration.icon}
            alt={`${integration.name} Icon`}
            className=" size-22 "
          />
          <h3 className=" text-2xl text-center ">{integration.name}</h3>
          <p className=" text-lg text-center text-white/50 ">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IntegrationsList;
