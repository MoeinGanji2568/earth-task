import { StaticImageData } from "next/image";

export interface MarketItem {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  iconUrl: string | StaticImageData;
  location: {
    lat: number;
    lng: number;
  };
  isAscending: boolean;
}
