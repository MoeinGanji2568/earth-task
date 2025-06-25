import { TypographyProps } from "@/ui/Typography/Typography.type";
import { ReactNode } from "react";

type AnimationMode = "block" | "words";

export interface AnimatedTextProps extends Omit<TypographyProps, "children"> {
  text?: string;
  children?: ReactNode;
  className?: string;
  animationMode?: AnimationMode;
}
