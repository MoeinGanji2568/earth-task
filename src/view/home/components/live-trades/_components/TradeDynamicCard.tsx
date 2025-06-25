import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import { MarketItem } from "../../Opportunities/components/MarketList.types";

const OptimizedImage = ({
  src,
  alt,
  width = 40,
  height = 40,
  className,
}: {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  if (typeof src === "object" && "src" in src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src as string}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

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
        <OptimizedImage
          src={item.iconUrl}
          alt={item.name}
          width={40}
          height={40}
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
