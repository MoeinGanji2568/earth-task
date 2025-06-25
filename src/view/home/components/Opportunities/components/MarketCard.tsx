import { formatSubZero } from "@/core/utils/formatSubZero";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { CgArrowRightO } from "react-icons/cg";

interface MarketItem {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  iconUrl: string | StaticImageData;
}

const OptimizedImage = ({
  src,
  alt,
  width = 36,
  height = 36,
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

type Props = {
  item: MarketItem;
};

export default function MarketCard({ item }: Props) {
  const changeColor = item.change >= 0 ? "text-green-400" : "text-red-400";
  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.5, ease: [0.26, 1, 0.36, 1] },
      }}
      className="px-5 py-2 rounded-sm flex items-center gap-4 hover:bg-[#0B0C14] hover:duration-300 relative group overflow-visible"
    >
      <OptimizedImage
        src={item.iconUrl}
        alt={item.symbol}
        width={36}
        height={36}
        className="size-9"
      />
      <div className="flex-1">
        <div className="text-sm">{item.symbol}</div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-sm text-white">{formatSubZero(item.price)}</div>
        <motion.div
          key={item.change}
          initial={{ y: -3 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className={`text-xs text-right ${changeColor}`}
        >
          {item.change >= 0 ? "+" : ""}
          {item.change.toFixed(2)}%
        </motion.div>
      </div>
      <div className="absolute z-20 right-[-0px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-[#ACA9FF] p-1 rounded-md shadow-md">
          <CgArrowRightO className="text-white w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
