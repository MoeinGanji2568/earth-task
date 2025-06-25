import { motion } from "motion/react";

export function GlobeRing() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 664 664"
      className="absolute z-10 w-[105%] h-[105%] -top-[3%] -left-[3%] pointer-events-none"
      style={{ transformOrigin: "center center" }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      fill="none"
    >
      <path
        d="M97.595 566.406A331.507 331.507 0 0 1 .5 332 331.505 331.505 0 0 1 97.595 97.594a331.5 331.5 0 1 1 0 468.812Z"
        stroke="url(#:Rdp9t7omkva:)"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="0.4023574561403509px 1px"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id=":Rdp9t7omkva:"
          x1="638.86"
          x2="444.401"
          y1="402.734"
          y2="689.532"
        >
          <stop stopColor="#6A86D7" stopOpacity="0" />
          <stop offset="0.501" stopColor="#6A86D7" />
          <stop offset="1" stopColor="#6A86D7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
