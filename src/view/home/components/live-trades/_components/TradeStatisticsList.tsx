import React, { ReactNode } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const TradeStatisticsList = () => {
  const tradesStatisticsCard: {
    label: string;
    icon: ReactNode;
    number: string;
    ascending: boolean;
  }[] = [
    {
      label: "Long Trades",
      icon: <FaArrowTrendUp size={15} />,
      number: "1,234,876",
      ascending: true,
    },
    {
      label: "Short Trades",
      icon: <FaArrowTrendDown size={15} />,
      number: "1,234,876",
      ascending: false,
    },
  ];

  return (
    <div className="flex items-center gap-4 font-bold text-lg">
      {tradesStatisticsCard.map((item, index) => (
        <div key={index} className="p-4 rounded-lg bg-[#12131C]">
          <div
            className={`flex items-center gap-2 ${
              item.ascending ? "text-[#0FB395]" : "text-[#E63766]"
            } py-1 whitespace-nowrap`}
          >
            <span className="text-xs md:text-base">{item.label}</span>
            {item.icon}
          </div>
          <span className="text-lg lg:text-2xl mt-2">{item.number}</span>
        </div>
      ))}
    </div>
  );
};

export default TradeStatisticsList;
