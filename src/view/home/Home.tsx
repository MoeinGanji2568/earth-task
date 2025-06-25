"use client";

import { GlobeTest } from "@/components/CombinedGlobe";
import {
  LiveTradeSection,
  Opportunities,
  QuestionsSection,
  TrustedSection,
} from "./components";

export const Home = () => {
  return (
    <div className="h-[100vh] w-screen relative">
      <Opportunities />
      <div className="relative overflow-hidden">
        <GlobeTest />
        <TrustedSection />
        <LiveTradeSection />
      </div>
      <QuestionsSection />
    </div>
  );
};
