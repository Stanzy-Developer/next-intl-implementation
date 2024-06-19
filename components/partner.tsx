import { useTranslations } from "next-intl";
import React from "react";

const Partner = () => {
  interface Tool {
    img: string;
    name: string;
    desc: string;
  }
  const t = useTranslations("featureSection");
  return (
    <div className="flex flex-col lg:flex-row gap-5 gap-y-10 mt-20">
      {t.raw("tools").map((data: Tool, idx: number) => (
        <div
          className="flex flex-col gap-3 items-center sm:max-w-[300px]"
          key={idx}
        >
          <img src={data.img} alt="" className="mb-3" />
          <h1 className="text-gray-600 font-bold text-xl">{data.name}</h1>
          <p className="text-zinc-500 text-center max-w-[300px] sm:max-w-[400px]">
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Partner;
