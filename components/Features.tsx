import { useTranslations } from "next-intl";
import React from "react";

const Features = () => {
  const t = useTranslations("featureSection");
  interface FeatureTypes {
    title: string;
    desc: string;
  }
  return (
    <div className="flex items-center justify-between flex-col sm:flex-row relative w-full h-full gap-20 sm:pr-32">
      <div className="flex-1 sm:size-[350px]">
        <img
          src="/images/image-computer.png"
          className="w-[400px] sm:w-[500px]"
        />
      </div>

      <div className="sm:max-w-[300px] flex flex-col gap-10 items-center text-center sm:text-left w-full">
        {t.raw("feature").map((data: FeatureTypes, idx: number) => (
          <div className="" key={idx}>
            <h1 className="text-gray-600 font-bold text-2xl">{data.title}</h1>
            <p className="text-zinc-500 max-w-[300px] sm:text-left text-center">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
