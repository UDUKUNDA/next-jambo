 export function HeroIllustration() {
  return (
    <div className="relative h-[360px] w-full max-w-[757.19px] mx-auto overflow-hidden sm:h-[420px] lg:h-[500.39px]">
      {/* Handshake Background Image */}
      <img
        src="/assets/hand-shake%20vector.svg"
        alt=""
        className="absolute left-0 top-0 h-full w-full object-contain"
      />

      {/* Icons positioned in an arc above the handshake */}
      
      {/* First Icon - hero-credit (left side, above left hand) */}
      <img 
        src="/assets/hero-credit-card.svg" 
        alt="Credit card icon" 
        className="absolute opacity-90 animate-float"
        style={{
          left: "18%",
          top: "18%",
          width: "clamp(28px, 3.2vw, 56px)",
          height: "clamp(28px, 3.2vw, 56px)",
          animationDelay: "0s",
        }}
      />
      
      {/* Second Icon - hero-time (center, above where hands meet) */}
      <img 
        src="/assets/hero-time.svg" 
        alt="Time icon" 
        className="absolute opacity-95 animate-float"
        style={{
          left: "47%",
          top: "16%",
          width: "clamp(34px, 3.8vw, 63px)",
          height: "clamp(34px, 3.8vw, 63px)",
          animationDelay: "0.2s",
          transform: "translateX(-50%)",
        }}
      />
      
      {/* Third Icon - hero-chart (right side, above right hand) */}
      <img 
        src="/assets/hero-chart.svg" 
        alt="Chart icon" 
        className="absolute opacity-90 animate-float"
        style={{
          left: "76%",
          top: "20%",
          width: "clamp(32px, 3.5vw, 60px)",
          height: "clamp(32px, 3.5vw, 60px)",
          animationDelay: "0.4s",
        }}
      />

      {/* Wallet icon for additional visual interest */}
      <img 
        src="/assets/hero-walet.svg" 
        alt="Wallet icon" 
        className="absolute opacity-70 animate-pulse-slow"
        style={{
          left: "30%",
          top: "66%",
          width: "clamp(28px, 3.2vw, 50px)",
          height: "clamp(28px, 3.2vw, 50px)",
        }}
      />

       {/* Cash icon for additional visual interest */}
      <img 
        src="/assets/hero-cash.svg" 
        alt="Cash icon" 
        className="absolute opacity-65 animate-pulse-slow"
        style={{
          left: "40%",
          top: "72%",
          width: "clamp(28px, 3.2vw, 50px)",
          height: "clamp(28px, 3.2vw, 50px)",
        }}
      />

       <img 
        src="/assets/hero-chart-2.svg" 
        alt="Chart icon" 
        className="absolute opacity-60 animate-pulse-slow"
        style={{
          left: "62%",
          top: "68%",
          width: "clamp(28px, 3.2vw, 50px)",
          height: "clamp(28px, 3.2vw, 50px)",
        }}
      />
      <img 
        src="/assets/hero-pir-chart.svg" 
        alt="Chart icon" 
        className="absolute opacity-60 animate-pulse-slow"
        style={{
          left: "16%",
          top: "58%",
          width: "clamp(28px, 3.2vw, 50px)",
          height: "clamp(28px, 3.2vw, 50px)",
        }}
      />

      {/* Approved Badge */}
      <div
        className="absolute h-[75.7px] w-[178.92px]"
        style={{ left: "50%", bottom: "8%", transform: "translateX(-50%)" }}
      >
        <div className="absolute left-0 top-[30.47px] h-[41.24px] w-[178.92px] border-[3px] border-[#6CFF7B] bg-transparent">
          <div className="absolute left-[5.7px] top-[1px] text-[29.19px] font-extrabold leading-[35.34px] text-[#6CFF7B]">
            APPROVED
          </div>
        </div>
        <div className="absolute left-1/2 top-[2px] -translate-x-1/2 text-[15px] font-normal leading-[28px] tracking-[0.32em] text-white">
          LOAN REQUEST
        </div>
      </div>
    </div>
  );
}
