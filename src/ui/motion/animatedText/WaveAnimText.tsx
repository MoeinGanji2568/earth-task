"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  duration?: number;
  isSentenceMode?: boolean;
  extraClass?: string;
}

export function WaveAnimatedText({
  text,
  delay = 0,
  duration = 0.4,
  isSentenceMode = false,
  extraClass,
}: AnimatedTextProps) {
  const items = isSentenceMode ? text.split(". ") : text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: duration / 2,
        delayChildren: delay + 0.2,
      },
    },
  };

  const blurFade = {
    hidden: { filter: "blur(50px)", opacity: 0.8 },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={blurFade}
      initial="hidden"
      animate="visible"
      className={`overflow-hidden ${extraClass}`}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-x-1 justify-center"
      >
        {items.map((word, index) => (
          <motion.p key={index} variants={item}>
            {word}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
