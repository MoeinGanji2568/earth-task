import {
  ChainSvg,
  CoinSvg,
  EthSvg,
  PepeSvg,
  TetherSvg,
  XrpSvg,
} from "@/assets/image";
import { MarketItem } from "@/view/home/components/Opportunities/components/MarketList.types";

const exampleIcons = [CoinSvg, EthSvg, PepeSvg, ChainSvg, TetherSvg, XrpSvg];

function getRandomFloat(min: number, max: number, decimals = 4) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

export function generateMockMarketItems(
  count = 5,
  isRandom = false
): MarketItem[] {
  const sampleNames = ["BTC", "ETH", "DOGE", "Tether", "XRP", "PEPE"];
  return Array.from({ length: count }).map((_, i) => {
    const symbolIndex = isRandom
      ? Math.floor(Math.random() * sampleNames.length)
      : i % sampleNames.length;
    const symbol = sampleNames[symbolIndex];
    return {
      id: `${symbol}-${i}${isRandom ? `-${Math.random() * 100}` : ""}`,
      name: symbol,
      symbol: `${symbol}/USDT`,
      price: getRandomFloat(0.01, 100000),
      change: getRandomFloat(-5, 5),
      iconUrl: exampleIcons[symbolIndex],
      isAscending: Math.random() > 0.5,
      location: {
        lat: getRandomFloat(-90, 90),
        lng: getRandomFloat(-180, 180),
      },
    };
  });
}
