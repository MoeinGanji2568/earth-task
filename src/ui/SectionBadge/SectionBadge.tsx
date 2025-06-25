import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  text: string;
  Icon: IconType;
  size?: number;
}

export const SectionBadge: FC<Props> = ({ text, Icon, size = 18 }) => {
  return (
    <div className="rounded-3xl flex gap-3 p-2 border border-white/30 items-center text-sm">
      <Icon size={size} className="text-[#ACA9FF]" />
      <span>{text}</span>
    </div>
  );
};
