import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";

const CallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef();
  const [scope, animate] = useAnimate();

  // Regular Animation
  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 10, ease: "linear", repeat: Infinity }
    );
  }, []);

  // Hover Animation
  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className=" py-24 ">
      {/* Heading Line Container */}
      <div className=" flex overflow-x-clip ">
        <motion.div
          ref={scope}
          className=" flex flex-none items-start justify-start gap-16 pr-16 "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 6 }).map((_, key) => (
            /* Heading Line  */
            <div
              key={key}
              className=" flex flex-none items-center justify-start gap-16 text-7xl md:text-8xl cursor-pointer "
            >
              <span className=" text-7xl text-lime-400 ">&#10038;</span>
              <h1 className={` ${isHovered ? " text-lime-400 " : ""} `}>
                Try it for free
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
