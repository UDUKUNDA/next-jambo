import { BadgeCheck, HandCoins, Repeat2, Send } from "lucide-react";
import { StepCard } from "@/components/landing/StepCard";

export function StepsSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-16 pt-14 md:px-6">
      <div className="flex items-end justify-between gap-10">
        <h2 className="text-[22px] font-semibold tracking-tight text-white">Simple Steps to Get Your Loan</h2>
        <p className="max-w-[360px] text-right text-xs leading-5 text-white/60">
          Our loan process is fast and reliable you can get your loan in as little as 24 hours.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        <StepCard
          step={1}
          title="Loan Request"
          description="Choose your preferred loan type and submit a request directly from the app."
          Icon={Send}
        />
        <StepCard
          step={2}
          title="Loan Approval"
          description="Our system reviews your request and quickly determines your eligibility."
          Icon={BadgeCheck}
          approvedRibbon
        />
        <StepCard
          step={3}
          title="Loan Disbursement"
          description="Once approved, your loan is sent instantly to your mobile money account."
          Icon={HandCoins}
        />
        <StepCard
          step={4}
          title="Repayment"
          description="Repay your loan through flexible daily, weekly, or monthly payment options."
          Icon={Repeat2}
        />
      </div>
    </section>
  );
}
