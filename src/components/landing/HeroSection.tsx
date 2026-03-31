 import Link from "next/link";
import { HeroIllustration } from "@/components/landing/HeroIllustration";
import { StepCard } from "@/components/landing/StepCard";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/0 via-[#004D40]/50 to-[#00251F] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
        {/* Hero Content */}
        <div className="snap-start flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center gap-8 lg:min-h-0 lg:items-start [@media(min-width:1629px)_and_(min-height:847px)]:flex-row [@media(min-width:1629px)_and_(min-height:847px)]:justify-between [@media(min-width:1629px)_and_(min-height:847px)]:gap-12 xl:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full text-center lg:text-left [@media(min-width:1629px)_and_(min-height:847px)]:w-1/2 [@media(min-width:1629px)_and_(min-height:847px)]:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[67.763px] font-extrabold leading-tight text-white mb-4 sm:mb-6">
              <div>Small Loans.</div>
              <div>Big Impact.</div>
              <div>
                Real{" "}
                <span className="relative inline-block">
                  Growth.
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#82FB8E]" />
                </span>
              </div>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Fast, affordable, and flexible micro-loans tailored to your needs.
            </p>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-[#04EA6C] bg-[#82FB8E] text-black font-medium text-base sm:text-lg hover:bg-[#6CFF7B] transition-colors duration-200"
            >
              Get started
            </Link>
          </div>

          {/* Right Column - Illustration (hidden on small screens) */}
          <div className="hidden w-full mt-8 [@media(min-width:1629px)_and_(min-height:847px)]:block [@media(min-width:1629px)_and_(min-height:847px)]:w-1/2 [@media(min-width:1629px)_and_(min-height:847px)]:mt-0">
            <div className="max-w-md mx-auto lg:max-w-full">
              <HeroIllustration />
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="snap-start mt-16 flex min-h-[calc(100svh-4rem)] flex-col justify-center sm:mt-20 lg:min-h-0 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white text-center sm:text-left">
              Simple Steps to Get Your Loan
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 text-center sm:text-right max-w-md">
              Our loan process is fast and reliable you can get your loan in as little as 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 xl:gap-6">
            <StepCard
              step="1"
              title="Loan Request"
              description="Choose your preferred loan type and submit a request directly from the app."
              iconSrc="/assets/Frame.svg"
            />
            <StepCard
              step="2"
              title="Loan Approval"
              description="Our system reviews your request and quickly determines your eligibility."
              approvedBadge
            />
            <StepCard
              step="3"
              title="Loan Disbursement"
              description="Once approved, your loan is sent instantly to your mobile money account."
              iconSrc="/assets/Frame-1.svg"
            />
            <StepCard
              step="*"
              title="Repayment"
              description="Repay your loan through flexible daily, weekly, or monthly payment options the app."
              iconSrc="/assets/Frame-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
