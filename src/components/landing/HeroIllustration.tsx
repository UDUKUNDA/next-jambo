export function HeroIllustration() {
  return (
    <div className="relative h-[500.39px] w-[757.19px] overflow-hidden">
      <img
        src="/assets/hand-shake%20vector.svg"
        alt=""
        className="absolute left-0 top-0 h-full w-full object-contain"
      />

      <img src="/assets/hero-time.svg" alt="" className="absolute left-[138.33px] top-[80.86px] h-[63.21px] w-[63.21px]" />
      <img
        src="/assets/hero-credit-card.svg"
        alt=""
        className="absolute left-[534px] top-[20px] h-[52px] w-[52px] opacity-90"
      />
      <img src="/assets/hero-walet.svg" alt="" className="absolute left-[180px] top-[310px] h-[52px] w-[52px] opacity-90" />
      <img src="/assets/hero-chart.svg" alt="" className="absolute left-[560px] top-[320px] h-[52px] w-[52px] opacity-90" />

      <div className="absolute left-[272.28px] top-[444.21px] h-[75.7px] w-[178.92px]">
        <div className="absolute left-0 top-[34.47px] h-[41.24px] w-[178.92px] border-[3px] border-[#6CFF7B] bg-transparent">
          <div className="absolute left-[5.7px] top-[2.96px] text-[29.19px] font-extrabold leading-[35.34px] text-[#6CFF7B]">
            APPROVED
          </div>
        </div>
        <div className="absolute left-0 top-0 text-[12px] font-normal leading-[28px] tracking-[0.32em] text-white">
          LOAN REQUEST
        </div>
      </div>
    </div>
  );
}
