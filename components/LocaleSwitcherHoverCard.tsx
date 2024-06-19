"use client";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";

type Props = {
  children: ReactNode;
  defaultValue: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="fixed bottom-10 right-32 drop-shadow-lg">
      <Select onValueChange={onSelectChange} defaultValue={defaultValue}>
        <SelectTrigger className="size-16">
          <Languages />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
}
