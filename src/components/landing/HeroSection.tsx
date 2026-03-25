import Link from "next/link";
import { HeroIllustration } from "@/components/landing/HeroIllustration";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pt-12 md:px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-balance text-[56px] font-extrabold leading-[1.02] tracking-tight text-white">
            <div>Small Loans.</div>
            <div>Big Impact.</div>
            <div>
              Real{" "}
              <span className="relative inline-block">
                Growth.
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#32D26B]" />
              </span>
            </div>
          </h1>

          <p className="mt-6 max-w-[420px] text-sm leading-6 text-white/70">
            Fast, affordable, and flexible micro-loans tailored to your needs.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#32D26B] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
