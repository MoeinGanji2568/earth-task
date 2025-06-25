"use client";

import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTextProps } from "./AnimatedText.type";
import { Typography } from "@/ui/Typography";
import { blockVariant, wordVariant } from "./animatedText.variants";

export const AnimatedText = ({
  text,
  children,
  className,
  animationMode = "block",
  ...props
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });

  if (animationMode === "words") {
    const words = text?.split(" ") ?? [];

    return (
      <div
        ref={ref}
        className={classNames("flex flex-wrap justify-center", className)}
      >
        {words.map((word, index) => (
          <motion.span
            whileInView={isVisible ? "visible" : "hidden"}
            key={index}
            custom={index}
            variants={wordVariant}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="pr-1"
          >
            <Typography {...props}>{word || "\u00A0"}</Typography>
          </motion.span>
        ))}
      </div>
    );
  }

  // block mode
  return (
    <motion.div
      ref={ref}
      whileInView={isVisible ? "visible" : "hidden"}
      variants={blockVariant}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={className}
    >
      <Typography {...props}>{children}</Typography>
    </motion.div>
  );
};
