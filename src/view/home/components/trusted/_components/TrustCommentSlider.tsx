import { TrustedJson } from "@/core/constants/TrustedJson";
import { BsChatHeartFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { IntervalSlider } from "@/ui/motion/intervalSlider";
import Image from "next/image";

const TrustCommentSlider = () => {
  return (
    <>
      {" "}
      <IntervalSlider duration="190s">
        {TrustedJson.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col p-3 lg:p-6 mt-6 rounded-lg gap-3 lg:gap-8 bg-[#12131C] 
        max-w-[200px] lg:max-w-[480px] text-left overflow-hidden"
          >
            <FaQuoteRight className="absolute top-[-15px] right-0 size-[100px] lg:size-[200px] opacity-2" />
            <BsChatHeartFill color="#BCC1FF" className="size-3 lg:size-6" />
            <h3 className="font-bold text-white text-[10px] lg:text-lg">
              {item.title}
            </h3>
            <p className="text-white/65 text-[10px] lg:text-lg capitalize">
              {item.description}
            </p>
            <div className="flex items-center gap-1 lg:gap-3">
              <span className="text-white text-[10px] lg:text-base">
                {item.authorName}
              </span>
              <Image
                src={item.authorImg}
                alt={item.authorName}
                width={28}
                height={28}
                className="size-4 lg:size-7 rounded-full border border-white/20"
              />
            </div>
          </div>
        ))}
      </IntervalSlider>
      <IntervalSlider duration="190s" reverse>
        {TrustedJson.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col p-3 lg:p-6 mt-6 rounded-lg gap-3 lg:gap-8 bg-[#12131C] 
          max-w-[200px] lg:max-w-[480px] text-left overflow-hidden"
          >
            <FaQuoteRight className="absolute top-[-15px] right-0 size-[100px] lg:size-[200px] opacity-2" />
            <BsChatHeartFill color="#BCC1FF" className="size-3 lg:size-6" />
            <h3 className="font-bold text-white text-[10px] lg:text-lg">
              {item.title}
            </h3>
            <p className="text-white/65 text-[10px] lg:text-lg capitalize">
              {item.description}
            </p>
            <div className="flex items-center gap-1 lg:gap-3">
              <span className="text-white text-[10px] lg:text-base">
                {item.authorName}
              </span>
              <Image
                src={item.authorImg}
                alt={item.authorName}
                width={28}
                height={28}
                className="size-4 lg:size-7 rounded-full  border border-white/20"
              />
            </div>
          </div>
        ))}
      </IntervalSlider>
    </>
  );
};

export default TrustCommentSlider;
