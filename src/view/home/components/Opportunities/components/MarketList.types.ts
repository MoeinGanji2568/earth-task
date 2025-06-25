export interface MarketItem {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  iconUrl: string;
  location: {
    lat: number;
    lng: number;
  };
  isAscending: boolean;
}
