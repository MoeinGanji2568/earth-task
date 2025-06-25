import { generateMockMarketItems } from "@/core/lib/marketData";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { MarketItem } from "../../Opportunities/components/MarketList.types";

const opacityMap = [
  { initial: 0.7, exit: 0.4 },
  { initial: 0.9, exit: 0.7 },
  { initial: 1.1, exit: 0.9 },
];
const getOpacityByIndex = (index: number): number => {
  return opacityMap[index].exit ?? Math.max(0.1, 1 - index * 0.3);
};

const TradeDynamicList = ({
  onItemClick,
}: {
  onItemClick?: (item: MarketItem) => void;
}) => {
  const UPDATE_INTERVAL = 5500;
  const LOADING_DELAY = 2000;
  const DISPLAYED_ITEM_COUNT = 3;

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<MarketItem[]>([]);

  const initialItems = useMemo(() => generateMockMarketItems(5), []);

  useEffect(() => {
    setItems(initialItems);

    const loadingTimer = setTimeout(() => setIsLoading(false), LOADING_DELAY);
    const updateInterval = setInterval(() => {
      const isRandom = true;
      const updatedItems = generateMockMarketItems(1, isRandom).sort(
        () => Math.random() - 0.5
      );
      setItems((prev) => [...prev, ...updatedItems]);
    }, UPDATE_INTERVAL);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(updateInterval);
    };
  }, [initialItems]);

  return (
    <div className="flex flex-col-reverse gap-3 absolute top-30 lg:top-60 z-[5000] left-1/2 -translate-x-1/2 transition-all duration-300 w-[270px] lg:w-[400px]">
      <AnimatePresence initial={false}>
        {items
          .slice(items.length - DISPLAYED_ITEM_COUNT, items.length)
          .map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: getOpacityByIndex(index), y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                scale: [0.9, 0.95, 1][index],
              }}
              key={item.id}
            >
              <TradeCard item={item} onItemClick={onItemClick} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default TradeDynamicList;

const TradeCard = ({
  item,

  onItemClick,
}: {
  item: MarketItem;

  onItemClick?: (item: MarketItem) => void;
}) => {
  return (
    <div
      className="flex gap-2 items-center cursor-pointer py-1.5 transition-all duration-300 bg-white text-foreground rounded-full px-3"
      onClick={() => onItemClick?.(item)}
    >
      <img
        src={item.iconUrl?.src}
        alt={item.name}
        className="size-5 lg:size-10"
      />
      <div className="text-black text-xl">
        <span>{item.symbol}</span>
      </div>
    </div>
    /* <div
  className={`flex gap-2 items-center px-2 ${
    item.isAscending ? "text-[#0FB395]" : "text-[#E63766]"
  }`}
>
  <span>{item.isAscending ? "LONG TRADE" : "SHORT TRADE"}</span>
  {item.isAscending ? (
    <FaArrowTrendUp size={15} />
  ) : (
    <FaArrowTrendDown size={15} />
  )}
</div> */
  );
};
