import classNames from "classnames";

export function Dots({
  count,
  activeIndex,
  onDotClick,
}: {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={classNames(
              "w-2.5 h-2.5 rounded-full transition-all",
              isActive
                ? "bg-indigo-500 scale-110"
                : "bg-gray-300 opacity-60 hover:opacity-100"
            )}
          />
        );
      })}
    </div>
  );
}
