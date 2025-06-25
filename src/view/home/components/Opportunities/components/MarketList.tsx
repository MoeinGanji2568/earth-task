"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { CiStar } from "react-icons/ci";

import { generateMockMarketItems } from "@/core/lib/marketData";
import MarketCard from "./MarketCard";
import { MarketCardSkeleton } from "./MarketCardSkeleton";
import { MarketItem } from "./MarketList.types";

interface Props {
  title: string;
}

const SKELETON_COUNT = 5;
const UPDATE_INTERVAL = 5500;
const LOADING_DELAY = 2000;
const DISPLAYED_ITEM_COUNT = 5;

export default function MarketList({ title }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<MarketItem[]>([]);

  const initialItems = useMemo(() => generateMockMarketItems(5), []);

  useEffect(() => {
    setItems(initialItems);

    const loadingTimer = setTimeout(() => setIsLoading(false), LOADING_DELAY);
    const updateInterval = setInterval(() => {
      const updatedItems = generateMockMarketItems(5).sort(
        () => Math.random() - 0.5
      );
      setItems(updatedItems);
    }, UPDATE_INTERVAL);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(updateInterval);
    };
  }, [initialItems]);

  return (
    <div
      className="bg-[#12131C] rounded-2xl w-[350px] xl:w-[370px] h-[410px]
      relative border border-white/10 m-auto select-none"
    >
      <div className="p-2">
        <div
          className="py-1 px-2 bg-[#0B0C14]/50 flex items-center gap-1 text-[#ACA9FF] rounded-full
          opacity-85 w-fit relative top-3 left-1"
        >
          <CiStar size={17} />
          <span className="text-sm">{title}</span>
        </div>
      </div>
      <div className="h-[calc(100%-50px)] overflow-hidden">
        <div className="flex flex-col gap-3 py-3 mt-4 relative z-0 overflow-visible">
          <AnimatePresence initial={false}>
            {isLoading
              ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                  <motion.div
                    key={`skeleton-${index}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MarketCardSkeleton />
                  </motion.div>
                ))
              : items.slice(0, DISPLAYED_ITEM_COUNT).map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 27,
                      duration: 0.8,
                    }}
                  >
                    <MarketCard item={item} />
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
