import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherHoverCard from "./LocaleSwitcherHoverCard";
import { locales } from "@/config";
import { SelectContent, SelectItem } from "./ui/select";

export default function LocaleSwitcher() {
  const t = useTranslations("Switcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherHoverCard defaultValue={locale}>
        {locales.map((cur) => (
          <SelectItem value={cur} key={cur}>
            {t("locale", { locale: cur })}
          </SelectItem>
        ))}
    </LocaleSwitcherHoverCard>
  );
}
