import LocaleSwitcher from "@/components/LocalSwitcher";
import Sponsors from "@/components/Sponsors";
import Partner from "@/components/partner";
import SectionWrapper from "@/components/sectionWrapper";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("sectionTexts");
  const features = useTranslations("featureSection");
  interface FeatureTypes {
    title: string;
    desc: string;
  }
  return (
    <main className="bg-[url('/images/bg-header-desktop.png')] bg-no-repeat py-20 px-5 sm:py-24 flex flex-col gap-20 items-center">
      {/* Logo */}
      <img src="/images/logo.svg" alt="logo" className="mt-5" />

      {/* first section */}
      <SectionWrapper
        sectionTitle={t("section1.sectionTitle")}
        sectionText={t("section1.sectionText")}
        hasButton
      />

      {/* Section 2 */}
      <SectionWrapper
        sectionTitle={t("section2.sectionTitle")}
        sectionText={t("section2.sectionText")}
      >
        <div className="flex items-center justify-between flex-col lg:flex-row relative w-full h-full gap-20 lg:pr-32 mt-20">
          <img
            src="/images/image-computer.png"
            className="w-[500px] lg:w-full"
          />
          <div className="sm:max-w-[300px] flex flex-col gap-10 items-center text-center lg:text-left w-full">
            {features.raw("feature").map((data: FeatureTypes, idx: number) => (
              <div className="" key={idx}>
                <h1 className="text-gray-600 font-bold text-2xl">
                  {data.title}
                </h1>
                <p className="text-zinc-500 max-w-[300px] lg:text-left text-center">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3 */}
      <SectionWrapper
        sectionTitle={t("section3.sectionTitle")}
        sectionText={t("section3.sectionText")}
      >
        <img
          src="/images/image-devices.png"
          alt=""
          className="w-[500px] lg:w-full mt-20"
        />
      </SectionWrapper>

      {/* Section 4 */}
      <SectionWrapper
        sectionTitle={t("section4.sectionTitle")}
        sectionText={t("section4.sectionText")}
      >
        <Partner />
      </SectionWrapper>

      {/* sponsors */}
      <Sponsors />

      {/* Section 5 */}
      <SectionWrapper
        sectionTitle={t("section5.sectionTitle")}
        sectionText={t("section5.sectionText")}
        hasButton
      />

      {/* Local switcher `The component to change the language` */}
      <LocaleSwitcher />
    </main>
  );
}
