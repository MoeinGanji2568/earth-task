"use client";
import { useSectionStore } from "@/store/useSectionStore";
import { Typography } from "@/ui/Typography";
import { motion, useScroll, useTransform } from "motion/react";
import space from "public/space.jpg";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

export const LiveTradeSection = () => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const setSectionPosition = useSectionStore(
    (state) => state.setSectionPosition
  );

  const trustedSectionRef = useSectionStore((state) =>
    state.getSectionById("trusted-section")
  );

  const handleScroll = () => {
    if (scrollAreaRef.current) {
      const INITIAL_TOP = 250;
      const rect = scrollAreaRef.current.getBoundingClientRect();
      const top = rect.top - INITIAL_TOP;
      const bottom = rect.bottom;

      setSectionPosition({
        id: "live-trades",
        top,
        bottom,
      });
    }
  };

  useEffect(() => {
    handleScroll();
  }, [setSectionPosition]);

  const tradesStatisticsCard = [
    {
      label: "Long Trades",
      icon: <FaArrowTrendUp size={15} />,
      number: "1,234,876",
      ascending: true,
    },
    {
      label: "Short Trades",
      icon: <FaArrowTrendDown size={15} />,
      number: "1,234,876",
      ascending: false,
    },
  ];

  const { scrollYProgress: scrollAreaProgress } = useScroll({
    offset: ["start start", "end 10%"],
    target: trustedSectionRef?.ref,
  });

  const LiveTradeSectionTranslateY = useTransform(
    scrollAreaProgress,
    [0, 0.7, 0.8],
    ["800px", "800px", "0px"]
  );

  return (
    <motion.div
      className="relative w-full h-[700px]  overflow-hidden z-20"
      ref={scrollAreaRef}
      style={{
        backgroundImage: `url(${space.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        y: LiveTradeSectionTranslateY,
      }}
    >
      <div
        className="mt-[100px] lg:mt-[200px] flex flex-col justify-center md:justify-start items-center xl:items-start
       px-18 gap-8 text-2xl md:text-3xl lg:text-4xl font-bold"
      >
        <Typography
          variant="h2"
          className=" text-[#7570FF] text-center md:text-left"
        >
          LIVE TRADES
          <span className="text-white block">ON TECHNANCE</span>
        </Typography>
        <div className="flex items-center gap-4">
          <span className="rounded-full size-7 lg:size-12 flex items-center justify-center bg-gradient-to-r from-black/20 to-white/20">
            <span className="rounded-full size-4 lg:size-6 bg-white"></span>
          </span>
          <span className="text-3xl lg:text-6xl">
            <CountUp end={3267634} duration={3.5} />
          </span>
        </div>
        <div className="flex items-center gap-4 font-bold text-lg">
          {tradesStatisticsCard.map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-[#12131C]">
              <div
                className={`flex items-center gap-2 ${
                  item.ascending ? "text-[#0FB395]" : "text-[#E63766]"
                } py-1 whitespace-nowrap`}
              >
                <span className="text-xs md:text-base">{item.label}</span>
                {item.icon}
              </div>
              <span className="text-lg lg:text-2xl mt-2">{item.number}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
