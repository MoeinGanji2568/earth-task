import classNames from "classnames";

export function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={classNames(
        "size-[30px] absolute top-1/2 -translate-y-1/2 p-2 z-10 rounded-full bg-gray-700 shadow hover:bg-white/70 transition",
        {
          "left-[-15px]": isLeft,
          "right-[-15px]": !isLeft,
        }
      )}
    ></button>
  );
}
