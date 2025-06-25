import { Variants } from "framer-motion";

export const blockVariant: Variants = {
  hidden: { opacity: 0.1, y: 18, filter: "blur(10px)" },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 12 },
  },
};

export const wordVariant: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: i * 0.05,
    },
  }),
};
