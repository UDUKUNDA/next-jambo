import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StepCardProps = {
  step: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  approvedRibbon?: boolean;
};

export function StepCard({ step, title, description, Icon, approvedRibbon }: StepCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-black/10 p-6 ring-1 ring-white/10">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-2xl" />
      {approvedRibbon ? (
        <div className="absolute right-5 top-5 rounded-sm bg-[#32D26B] px-3 py-1 text-[11px] font-extrabold tracking-widest text-[#05281D]">
          APPROVED
        </div>
      ) : null}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0E3A2C] text-sm font-bold text-[#32D26B] ring-1 ring-[#32D26B]/30">
            {step}
          </div>
          <div className="text-sm font-semibold text-white">{title}</div>
        </div>

        <div className={cn("text-[#32D26B]", approvedRibbon ? "opacity-90" : "opacity-80")}>
          <Icon size={26} strokeWidth={1.8} />
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 text-white/65">{description}</p>
    </div>
  );
}

