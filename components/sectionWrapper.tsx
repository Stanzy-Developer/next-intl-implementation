import React, { ReactNode } from "react";
import { Button } from "./ui/button";

interface sectionWrapperProps {
  sectionTitle: string;
  sectionText: string;
  hasButton?: boolean;
  children?: ReactNode;
}

const SectionWrapper = ({
  sectionTitle,
  sectionText,
  hasButton,
  children,
}: sectionWrapperProps) => {
  return (
    <section className="flex flex-col items-center gap-2 mt-10">
      <h1 className="text-gray-600 font-bold text-3xl mb-5 text-center">
        {sectionTitle}
      </h1>
      <p className="text-zinc-500 sm:max-w-[570px] text-center">
        {sectionText}
      </p>
      <div>{children}</div>
      {hasButton && (
        <div className="flex flex-col sm:flex-row gap-x-3 gap-y-3 mt-5">
          <Button>Download for iOS</Button>
          <Button variant="secondary">Download for Mac</Button>
        </div>
      )}
    </section>
  );
};

export default SectionWrapper;
