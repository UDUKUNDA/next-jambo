import { StepCard } from "@/components/landing/StepCard";

export function StepsSection() {
  return (
    <section className="mx-auto w-[1337.99px] pt-[55px]">
      <div className="flex w-[1318.73px] items-center justify-between">
        <div className="text-[36px] font-medium leading-[40px] text-white">Simple Steps to Get Your Loan</div>
        <div className="w-[375px] text-right text-[20px] font-normal leading-[28px] text-white">
          Our loan process is fast and reliable you can get your loan in as little as 24 hours.
        </div>
      </div>

      <div className="mt-[25px] flex items-center gap-[13px]">
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
    </section>
  );
}
