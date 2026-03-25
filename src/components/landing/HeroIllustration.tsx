import { BadgeCheck, Clock3, FileText, Handshake, Wallet } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative h-[360px] w-full max-w-[560px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#033D33] via-[#02352D] to-[#022D26] ring-1 ring-white/10">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[10%] top-[16%] text-[#52FF8F]">
          <Clock3 size={22} strokeWidth={1.6} />
        </div>
        <div className="absolute right-[14%] top-[22%] text-[#52FF8F]">
          <FileText size={22} strokeWidth={1.6} />
        </div>
        <div className="absolute left-[22%] bottom-[28%] text-[#52FF8F]">
          <Wallet size={22} strokeWidth={1.6} />
        </div>
        <div className="absolute right-[22%] bottom-[34%] text-[#52FF8F]">
          <BadgeCheck size={22} strokeWidth={1.6} />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative text-[#6CFF98]">
          <Handshake size={320} strokeWidth={1.4} />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 w-[220px] -translate-x-1/2">
        <div className="rounded-lg bg-black/25 px-4 py-2 text-center ring-1 ring-white/10 backdrop-blur">
          <div className="text-[11px] font-semibold tracking-widest text-white/70">LOAN REQUEST</div>
          <div className="mt-2 inline-flex items-center justify-center rounded-sm border border-[#32D26B] bg-[#0E3A2C] px-3 py-1 text-[12px] font-extrabold tracking-widest text-[#32D26B]">
            APPROVED
          </div>
        </div>
      </div>
    </div>
  );
}

