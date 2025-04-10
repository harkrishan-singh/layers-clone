import { useState } from "react";
import Tag from "../components/Tag";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    index: 0,
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    index: 1,
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive: tutorials and comprehensive documentation to help you get started.",
  },
  {
    index: 2,
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    index: 3,
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    index: 4,
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

const Faqs = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(0);
  return (
    <section className=" px-8 lg:px-12 py-24 flex flex-col items-center justify-center gap-10 ">
      {/* Tag */}
      <div className=" flex tems-center justify-center ">
        <Tag value="FAQs" />
      </div>
      {/* Heading */}
      <div className=" text-5xl font-medium text-center ">
        <span>Questions? We've got</span>{" "}
        <span className=" lg:block text-lime-400 ">answers</span>
      </div>
      {/* Faqs List */}
      <div className=" flex flex-col items-center justify-center gap-6 ">
        {faqs.map((faq) => (
          /* Faq */
          <div
            key={faq.index}
            className=" w-full max-w-xl p-6 flex flex-col border border-white/15 rounded-2xl bg-neutral-900 "
          >
            <div className=" flex justify-between gap-1 ">
            {/* Faq Question */}
              <h3
                className=" font-medium cursor-pointer "
                onClick={() => setSelectedFaqIndex(faq.index)}
              >
                {faq.question}
              </h3>
              {/* Faq Open-Clone Button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={` feather feather-plus text-lime-400 shrink-0 ${
                  faq.index === selectedFaqIndex ? " rotate-45 " : ""
                } cursor-pointer transition duration-300 `}
                onClick={() => setSelectedFaqIndex(faq.index)}
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            {/* Open-Close Animation */}
            <AnimatePresence>
              {selectedFaqIndex === faq.index && (
                /* Faq Answer */
                <motion.div
                  initial={{ height: 0, marginTop: 0 }}
                  animate={{ height: "auto", marginTop: 12 }}
                  exit={{ height: 0, marginTop: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className=" mt-6  overflow-hidden "
                >
                  <p className=" text-white/50 ">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
