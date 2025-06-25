import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { MarketItem } from "../../Opportunities/components/MarketList.types";

export const TradeDynamicCard = ({
  item,

  onItemClick,
}: {
  item: MarketItem;

  onItemClick?: (item: MarketItem) => void;
}) => {
  return (
    <div
      className="flex gap-2 items-center justify-between cursor-pointer py-1.5 transition-all duration-300 bg-white
     rounded-full px-3 "
    >
      <div
        className="flex gap-2 items-center"
        onClick={() => onItemClick?.(item)}
      >
        <img
          src={item.iconUrl?.src}
          alt={item.name}
          className="size-5 lg:size-10"
        />
        <div className="text-black text-sm lg:text-xl">
          <span>{item.symbol}</span>
        </div>
      </div>
      <div
        className={`flex gap-2 items-center  ${
          item.isAscending ? "text-[#0FB395]" : "text-[#E63766]"
        }`}
      >
        <span className="text-sm lg:text-base">
          {item.isAscending ? "LONG TRADE" : "SHORT TRADE"}
        </span>
        {item.isAscending ? (
          <FaArrowTrendUp size={15} />
        ) : (
          <FaArrowTrendDown size={15} />
        )}
      </div>
    </div>
  );
};
