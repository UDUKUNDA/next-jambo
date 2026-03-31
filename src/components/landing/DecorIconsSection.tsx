export function DecorIconsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-[520px]">
            <h2 className="text-[clamp(34px,3.8vw,56px)] font-normal leading-[1.08] text-black">
              More activity means
              <br />
              higher limits
            </h2>
            <div className="mt-8 text-[clamp(14px,1.3vw,18px)] font-normal leading-[1.55] text-black/80">
              <div>Build your credit history through</div>
              <div>consistent usage and timely repayments.</div>
              <br />
              <div>Unlock higher limits and enjoy improved</div>
              <div>financial flexibility as you grow with us.</div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px] aspect-[760/560] overflow-hidden">
            <img
              src="/assets/phone-group.png"
              alt=""
              className="absolute left-1/2 top-1/2 w-[clamp(260px,40vw,470px)] -translate-x-1/2 -translate-y-1/2 select-none"
            />
            <img
              src="/assets/confeti.png"
              alt=""
              className="pointer-events-none absolute left-1/2 top-[6%] w-[clamp(260px,42vw,520px)] -translate-x-1/2 select-none"
            />

            <img
              src="/assets/Vector-34.svg"
              alt=""
              className="pointer-events-none absolute select-none"
              style={{ left: "58%", top: "18%", width: "clamp(32px, 4.2vw, 70px)" }}
            />
            <img
              src="/assets/Union-133.svg"
              alt=""
              className="pointer-events-none absolute select-none"
              style={{ left: "86%", top: "14%", width: "clamp(38px, 5vw, 86px)" }}
            />
            <img
              src="/assets/Union-3ee.svg"
              alt=""
              className="pointer-events-none absolute select-none"
              style={{ left: "55%", top: "68%", width: "clamp(40px, 5vw, 86px)" }}
            />
            <img
              src="/assets/Union-23.svg"
              alt=""
              className="pointer-events-none absolute select-none"
              style={{ left: "16%", top: "55%", width: "clamp(38px, 4.6vw, 78px)" }}
            />
            <img
              src="/assets/Union-43.svg"
              alt=""
              className="pointer-events-none absolute select-none"
              style={{ left: "84%", top: "70%", width: "clamp(40px, 5vw, 88px)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
