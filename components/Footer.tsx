import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footerLinks");
  return (
    <footer className="w-full bg-[rgb(245,_246,_248)] flex flex-col lg:flex-row py-10 px-20 items-center justify-center lg:justify-between gap-y-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 lg:gap-32">
        <img src="/images/logo.svg" className="size-10" />
        <ul className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-y-5 sm:gap-x-10">
          <div className="flex flex-col gap-2 lg:gap-5 text-center lg:text-left">
            <li className="text-zinc-400 hover:text-primary cursor-pointer">
              {t("1")}
            </li>
            <li className="text-zinc-400 hover:text-primary cursor-pointer">
              {t("2")}
            </li>
          </div>
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <li className="text-zinc-400 hover:text-primary cursor-pointer">
              {t("3")}
            </li>
            <li className="text-zinc-400 hover:text-primary">{t("4")}</li>
          </div>
          <li className="text-zinc-400 hover:text-primary cursor-pointer">
            {t("5")}
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <Facebook className="hover:text-primary cursor-pointer" />
        <Twitter className="hover:text-primary cursor-pointer" />
        <Instagram className="hover:text-primary cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
