import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarketCard from "./MarketCard";

interface MarketItem {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  iconUrl: string;
}

interface Props {
  items: MarketItem[];
}

export default function MobileSlider({ items }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {lists.map((items, index) => (
          <div key={sectionData[index].title} className="px-2">
            <div className="bg-zinc-800 rounded-xl py-4 w-full max-h-[410px] overflow-hidden">
              <h3 className="text-white font-semibold mb-4 px-4">
                {sectionData[index].title}
              </h3>
              <div className="flex flex-col gap-3 px-4">
                {items.slice(0, 5).map((item) => (
                  <MarketCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
