import { JSX } from "react";

export function formatSubZero(value: number, fixed = 6): JSX.Element {
  const str = value.toFixed(fixed);
  const [main, decimals] = str.split(".");
  const firstTwo = decimals.slice(0, 2);

  const formattedMain = Number(main).toLocaleString("en-US");

  return (
    <>
      {formattedMain}.{firstTwo}
    </>
  );
}
