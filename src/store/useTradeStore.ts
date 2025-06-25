// // store/useTradeStore.ts
// import { Trade } from "@/utils/mockTradeGenerator";
// import { create } from "zustand";

// interface TradeState {
//   trades: Trade[];
//   addTrade: (trade: Trade) => void;
//   clearTrades: () => void;
//   getTradesByPage: (page: number, perPage: number) => Trade[];
//   totalPages: (perPage: number) => number;
// }

// export const useTradeStore = create<TradeState>((set, get) => ({
//   trades: [],

//   addTrade: (trade) =>
//     set((state) => ({
//       trades: [...state.trades, trade],
//     })),

//   clearTrades: () => set({ trades: [] }),

//   getTradesByPage: (page, perPage) => {
//     const start = (page - 1) * perPage;
//     return get().trades.slice(start, start + perPage);
//   },

//   totalPages: (perPage) => {
//     const count = get().trades.length;
//     return Math.max(1, Math.ceil(count / perPage));
//   },
// }));
