import { Slideshow } from "@/components/SlideShow";
import { SectionBadge } from "@/ui/SectionBadge";
import { motion } from "motion/react";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { useMediaQuery } from "usehooks-ts";
import MarketList from "./components/MarketList";
import { AnimatedText } from "@/ui/motion/animatedText";

export const Opportunities = () => {
  const isMobile = useMediaQuery("(max-width: 1175px)");
  return (
    <div className="mb-16 flex flex-col items-center justify-center relative h-[100vh]">
      <SectionBadge
        text="New opportunities"
        Icon={HiOutlineChartSquareBar}
        size={20}
      />

      <AnimatedText variant="h3" className="mt-10 text-center">
        <span className="text-[#7570FF]">TRADE</span> YOUR FAVORITE MARKETS
      </AnimatedText>
      <span className="absolute z-50  w-[200px] md:w-[420px] h-[290px] bg-white opacity-10 blur-3xl top-1/4 -translate-y-1/2  rounded-full"></span>
      <AnimatedText
        variant="p"
        animationMode="words"
        className="mt-10 text-white/50 max-w-[320px] md:max-w-[600px]"
        text="Want to buy Bitcoin outright or trade CFDs on Gold or EUR/USD? We've got you covered with access to 100+ global markets on one platform."
      />

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-10 px-10 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium"
      >
        View All coins →
      </motion.button>
      {!isMobile ? (
        <div className="mt-14 flex flex-col md:flex-row gap-6 justify-center">
          <MarketList title="Hot List" />
          <MarketList title="New Coins" />
          <MarketList title="Top Gainers" />
        </div>
      ) : (
        <div className="mt-10">
          <Slideshow duration={200}>
            {[
              <MarketList title="Hot List" key={1} />,
              <MarketList title="New Coins" key={2} />,
              <MarketList title="Top Gainers" key={3} />,
            ]}
          </Slideshow>
        </div>
      )}
    </div>
  );
};
