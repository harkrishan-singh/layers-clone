import { motion } from "motion/react";

const IntegrationsList = ({ integrations, reveseEnabled, className }) => {
  return (
    <motion.div
      initial={{ y: reveseEnabled ? "-50%" : 0 }}
      animate={{ y: reveseEnabled ? 0 : "-50%" }}
      transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      className={` flex flex-col items-center justify-center gap-5 ${className}`}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={` flex flex-col items-center justify-center gap-5 ${className}`}
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
      ))}
    </motion.div>
  );
};

export default IntegrationsList;
