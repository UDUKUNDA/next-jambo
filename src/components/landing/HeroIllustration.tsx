 export function HeroIllustration() {
  return (
    <div className="relative h-[500.39px] w-full max-w-[757.19px] mx-auto overflow-hidden">
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
        className="absolute left-[calc(15%+10px)] top-[120px] md:left-[120px] lg:left-[230px] h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[63px] opacity-90 animate-float"
        style={{ animationDelay: "0s" }}
      />
      
      {/* Second Icon - hero-time (center, above where hands meet) */}
      <img 
        src="/assets/hero-time.svg" 
        alt="Time icon" 
        className="absolute left-[calc(42%+10px)] top-[120px] md:left-[100px] lg:left-[320px] h-[52px] w-[52px] md:h-[56px] md:w-[56px] lg:h-[53px] lg:w-[63px] animate-float"
        style={{ animationDelay: "0.2s" }}
      />
      
      {/* Third Icon - hero-chart (right side, above right hand) */}
      <img 
        src="/assets/hero-chart.svg" 
        alt="Chart icon" 
        className="absolute left-[calc(70%-10px)] top-[140px] md:left-[540px] lg:left-[400px] h-[52px] w-[52px] md:h-[56px] md:w-[56px] lg:h-[33px] lg:w-[63px] opacity-90 animate-float"
        style={{ animationDelay: "0.4s" }}
      />

      {/* Wallet icon for additional visual interest */}
      <img 
        src="/assets/hero-walet.svg" 
        alt="Wallet icon" 
        className="absolute left-[calc(28%+10px)] top-[340px] md:left-[220px] lg:left-[450px] h-[48px] w-[48px] opacity-70 animate-pulse-slow"
      />

       {/* Cash icon for additional visual interest */}
      <img 
        src="/assets/hero-cash.svg" 
        alt="Cash icon" 
        className="absolute left-[calc(28%+10px)] top-[380px] md:left-[220px] lg:left-[380px] h-[48px] w-[48px] opacity-70 animate-pulse-slow"
      />

       <img 
        src="/assets/hero-chart-2.svg" 
        alt="Chart icon" 
        className="absolute left-[calc(28%+10px)] top-[350px] md:left-[220px] lg:left-[150px] h-[48px] w-[48px] opacity-70 animate-pulse-slow"
      />
      <img 
        src="/assets/hero-pir-chart.svg" 
        alt="Chart icon" 
        className="absolute left-[calc(28%+10px)] top-[300px] md:left-[220px] lg:left-[30px] h-[48px] w-[48px] opacity-70 animate-pulse-slow"
      />

      {/* Approved Badge */}
      <div className="absolute left-[36%] bottom-[12%] h-[75.7px] w-[178.92px] md:left-[36%] md:bottom-[10%] lg:left-[36%] lg:bottom-[5%]">
        <div className="absolute left-[-25px]  top-[30.47px] h-[41.24px] w-[178.92px] border-[3px] border-[#6CFF7B] bg-transparent">
          <div className="absolute left-[5.7px] top-[1px] text-[29.19px] font-extrabold leading-[35.34px] text-[#6CFF7B]">
            APPROVED
          </div>
        </div>
        <div className="absolute left-[-15px] top-[2px] text-[15px] font-normal leading-[28px] tracking-[0.32em] text-white">
          LOAN REQUEST
        </div>
      </div>
    </div>
  );
}