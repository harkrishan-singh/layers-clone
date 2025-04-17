import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

import Button from "../components/Button";
import Pointer from "../components/Pointer";
import DesignImg1 from "../assets/images/design-example-1.png";
import DesignImg2 from "../assets/images/design-example-2.png";

const Hero = () => {
  const [leftDesignImageScope, leftDesignImageAnimate] = useAnimate();
  const [rightDesignImageScope, rightDesignImageAnimate] = useAnimate();
  const [leftCursorScope, leftCursorAnimate] = useAnimate();
  const [rightCursorScope, rightCursorAnimate] = useAnimate();

  useEffect(() => {
    leftDesignImageAnimate([
      [leftDesignImageScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignImageScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    leftCursorAnimate([
      [leftCursorScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftCursorScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
      [
        leftCursorScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignImageAnimate([
      [
        rightDesignImageScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightDesignImageScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightCursorAnimate([
      [rightCursorScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightCursorScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightCursorScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5 }],
    ]);
  }, []);

  return (
    <section
      className=" relative mx-auto px-8 lg:px-12 py-24 flex flex-col items-center justify-center gap-6 "
      style={{
        cursor: `url(src/assets/images/cursor-you.svg), auto`,
      }}
    >
      {/* Banner */}
      <div className=" px-3 py-1 inline-flex text-md font-semibold text-neutral-950 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 hover:scale-[97%] hover:rotate-1 transition duration-300  ">
        ✨ $7.5M seed round raised
      </div>
      {/* Heading */}
      <h1 className=" max-w-3xl lg:max-w-4xl text-6xl md:text-7xl lg:text-8xl font-medium text-center text-white ">
        Impactful design, created effortlessly
      </h1>
      {/* Paragraph */}
      <p className=" max-w-2xl  text-xl font-medium text-center text-white/50 ">
        Design tools shouldn&apos;t slow you down. Layers combines powerful
        features with an intuitive interface that keeps you in your creative
        flow.
      </p>
      {/* Form */}
      <form className=" sm:w-full max-w-lg p-2 flex items-center justify-between border border-white/15 rounded-full bg-neutral-950 ">
        <input
          placeholder=" Enter your email "
          className=" px-4 text-white bg-transparent appearance-none outline-none "
        ></input>
        <Button type="submit" variant="primary" size="sm">
          Sign Up
        </Button>
      </form>
      {/* Cursor Images */}
      <motion.div
        className=" absolute hidden md:block  bottom-2/12 left-1/12 lg:bottom-30 lg:left-45 z-10  "
        ref={leftCursorScope}
        initial={{ opacity: 0, x: -200, y: 100 }}
      >
        <Pointer label="Harry" color="blue"></Pointer>
      </motion.div>
      <motion.div
        className=" absolute hidden md:block top-2/12 right-2/12 lg:top-20 lg:right-75 z-10 "
        ref={rightCursorScope}
        initial={{ opacity: 0, x: 275, y: 100 }}
      >
        <Pointer label="Piyush" color="red"></Pointer>
      </motion.div>
      {/* Design Example Images */}
      <motion.div
        className=" absolute hidden lg:block top-32 -left-40 "
        ref={leftDesignImageScope}
        initial={{ opacity: 0, x: -100, y: 100 }}
        drag
      >
        <img src={DesignImg1} alt="Design Image 1" draggable="false"></img>
      </motion.div>
      <motion.div
        className=" absolute hidden lg:block top-10 -right-70 "
        ref={rightDesignImageScope}
        initial={{ opacity: 0, x: 100, y: 100 }}
        drag
      >
        <img src={DesignImg2} alt="Design Image 2" draggable="false"></img>
      </motion.div>
    </section>
  );
};

export default Hero;
