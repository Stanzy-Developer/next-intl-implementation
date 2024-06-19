import { sponsors } from "@/lib/data";
import React from "react";

const Sponsors = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-y-20 mt-20 px-20">
      {sponsors.map((img, idx) => (
        <img key={idx} src={img} />
      ))}
    </div>
  );
};

export default Sponsors;
