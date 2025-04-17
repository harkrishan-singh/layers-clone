import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "motion/react";

import Tag from "../components/Tag";

const Introduction = () => {
  const paragraph =
    "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.";

  // Split the paragraph into individual words for word-by-word highlighting
  const words = paragraph.split(" ");

  // Create a ref to track the scrollable container
  const scrollTarget = useRef();

  // Track scroll progress within the target element
  // - "start end" means animation starts when element bottom hits viewport bottom
  // - "end end" means animation ends when element bottom hits viewport bottom
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  // State to track which words should be highlighted
  const [currentWord, setCurrentWord] = useState(0);

  // Transform scroll progress (0-1) to word index range (0 to total words)
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  // Effect to update currentWord when scroll progresses
  useEffect(() => {
    // Subscribe to wordIndex changes
    const subscription = wordIndex.on("change", (latest) => {
      // Update currentWord with the latest index
      setCurrentWord(latest);
    });

    // Cleanup function to prevent memory leaks
    return () => subscription();
  }, [wordIndex]);

  return (
    <section className=" px-8 lg:px-12 py-28 lg:py-40  ">
      <div className=" sticky top-36 md:top-40 flex flex-col items-center justify-center gap-10 ">
        {/* Tag */}
        <div className=" flex items-center justify-center ">
          <Tag value="Introducing Layers" />
        </div>
        {/* Paragraph */}
        <div className=" text-4xl md:text-6xl lg:text-7xl font-medium text-center text-white ">
          <span>Your creative process deserves better.</span>{" "}
          {/* Render the words with highlighting effect */}
          <span className=" text-white/15 ">
            {words.map((word, index) => (
              <span
                key={index}
                className={` ${
                  index < currentWord ? " text-white " : ""
                } transition duration-500 `}
              >{`${word} `}</span>
            ))}
          </span>
          <span className=" block text-lime-400 ">
            That&apos;s why we built Layers.
          </span>
        </div>
      </div>
      {/* Scrollable spacer (150% viewport height) for tracking scroll progress */}
      <div ref={scrollTarget} className=" h-[150vh] "></div>
    </section>
  );
};

export default Introduction;
