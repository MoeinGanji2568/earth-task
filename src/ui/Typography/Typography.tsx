import classNames from "classnames";
import { TypographyProps, TypographyVariant } from "./Typography.type";

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold tracking-tight lg:text-5xl",
  h2: "text-3xl font-semibold tracking-tight lg:text-4xl",
  h3: "text-2xl md:text-3xl lg:text-4xl font-bold xl:leading-9",
  h4: "text-xl font-semibold tracking-tight",
  h5: "text-lg font-semibold tracking-tight",
  h6: "text-base font-medium tracking-tight",
  p: "text-xs md:text-base lg:leading-7 text-muted-foreground",
  small: "text-sm text-muted-foreground",
  blockquote: "border-l-4 pl-4 italic text-muted-foreground",
};

export const Typography = ({
  variant = "p",
  className,
  children,
  as,
}: TypographyProps) => {
  const Component = as || variant;

  return (
    <Component className={classNames(variantClasses[variant], className)}>
      {children}
    </Component>
  );
};
