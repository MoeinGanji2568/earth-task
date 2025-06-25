"use client";
import { useSectionStore } from "@/store/useSectionStore";
import { AnimatedText } from "@/ui/motion/animatedText";
import { SectionBadge } from "@/ui/SectionBadge";
import { Typography } from "@/ui/Typography";
import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import { LiaKissWinkHeartSolid } from "react-icons/lia";
import { useMediaQuery } from "usehooks-ts";
import TrustCommentsSection from "./_components/TrustCommentsSection";

export const TrustedSection = () => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const testimonialsGridRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 1175px)");

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end 23%"],
    target: testimonialsGridRef,
  });

  const { scrollYProgress: scrollAreaProgress } = useScroll({
    offset: ["start start", "end 85%"],
    target: scrollAreaRef,
  });

  const slideShowOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9],
    [1, 1, 0]
  );
  const numberOfTradesOpacity = useTransform(
    scrollAreaProgress,
    [0, 0.5, 0.9],
    isMobile ? [0, 1, 1] : [1, 0.7, 0]
  );

  const setSectionPosition = useSectionStore(
    (state) => state.setSectionPosition
  );

  const handleScroll = useCallback(() => {
    if (scrollAreaRef.current) {
      const rect = scrollAreaRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = rect.bottom + window.scrollY;

      setSectionPosition({
        id: "trusted-section",
        top,
        bottom,
        ref: scrollAreaRef,
      });
    }
  }, [setSectionPosition]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <motion.div className="relative p-3" ref={scrollAreaRef}>
      <div className="flex flex-col items-center justify-center text-center overflow-hidden">
        <SectionBadge
          text="Real Success, Real Numbers"
          Icon={LiaKissWinkHeartSolid}
          size={20}
        />

        <AnimatedText variant="h3" className="mt-10 text-[#7570FF]">
          TRUSTED BY TRADERS <br />
          <span className="text-white">PROVEN BY RESULTS</span>
        </AnimatedText>

        <AnimatedText
          text="Join thousands of traders who trust Technance—backed by impressive stats and real user testimonials."
          animationMode="words"
          variant="p"
          className="mt-8 max-w-[305px] md:max-w-[600px] text-white/80 text-center"
        />

        <div ref={testimonialsGridRef} className="relative">
          <motion.div style={{ opacity: slideShowOpacity }}>
            <TrustCommentsSection />
          </motion.div>
        </div>
      </div>
      <motion.div
        style={{ opacity: numberOfTradesOpacity }}
        className="absolute top-2/3 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50 "
      >
        <motion.div className="absolute top-2 left-0 size-full bg-gray-950 rounded-full blur-[80px] scale-105" />
        <div className="text-center text-white relative -top-3 z-50">
          <Typography variant="h2" className="xl:text-7xl mb-2">
            3,267,634
          </Typography>
          <Typography variant="h4" className="font-light">
            NUMBER OF TRADES
          </Typography>

          <button className="rounded-xl py-2 px-4 bg-indigo-400 hover:bg-indigo-600 transition text-sm mt-4">
            SEE LIVE
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
