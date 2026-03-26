import Link from "next/link";
import { HeroIllustration } from "@/components/landing/HeroIllustration";

export function HeroSection() {
  return (
    <section className="relative h-[1203.27px] w-[1515.46px] overflow-hidden">
      <div className="absolute left-0 top-[637.73px] h-[565.54px] w-[1514.81px] bg-[linear-gradient(180deg,rgba(0,77,64,0)_0%,rgba(0,37,31,1)_100%)]" />

      <h1 className="absolute left-[120.33px] top-[250.24px] w-[692.54px] text-[67.763px] font-extrabold leading-[82.02px] text-white">
        <div>Small Loans.</div>
        <div>Big Impact.</div>
        <div>
          Real{" "}
          <span className="relative inline-block">
            Growth.
            <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#82FB8E]" />
          </span>
        </div>
      </h1>

      <p className="absolute left-[126.99px] top-[533.02px] w-[406.08px] text-[20px] font-normal leading-[28px] text-white">
        Fast, affordable, and flexible micro-loans tailored to your needs.
      </p>

      <Link
        href="/"
        className="absolute left-[126.72px] top-[615.52px] inline-flex h-[68.83px] w-[252.37px] items-center justify-center rounded-[34.4146px] border border-[#04EA6C] bg-[#82FB8E] text-[25.5435px] font-normal leading-[38.32px] text-black"
      >
        Get started
      </Link>

      <div className="absolute left-[663.27px] top-[184.23px] h-[500.39px] w-[757.19px]">
        <HeroIllustration />
      </div>
    </section>
  );
}
