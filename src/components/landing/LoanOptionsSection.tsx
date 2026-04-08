export function LoanOptionsSection() {
  return (
    <section className="w-full bg-[#E6FFFB]">
      <div className="mx-auto w-full max-w-[1512px] relative aspect-[1512/1305.7]">
        <div className="absolute inset-0 bg-[#E6FFFB]" />

        <div
          className="absolute text-center text-black font-medium leading-[1.11] tracking-[-0.015em]"
          style={{
            left: "26.52%",
            top: "6.04%",
            width: "46.96%",
            fontSize: "clamp(22px, 2.4vw, 36px)",
          }}
        >
          Credit Jambo offers multiple loan options
        </div>

        <div
          className="absolute text-center text-black/80 font-normal leading-[1.4] tracking-[0.01em]"
          style={{
            left: "28.76%",
            top: "10.49%",
            width: "42.55%",
            fontSize: "clamp(14px, 1.6vw, 20px)",
          }}
        >
          Choose the loan type that matches your needs, from covering daily expenses to growing your business.
        </div>

        <div
          className="absolute"
          style={{
            left: "5.40%",
            top: "18.85%",
            width: "88.23%",
            height: "42.20%",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-[#2D8883] bg-white">
            <table className="h-full w-full table-fixed border-collapse">
              <colgroup>
                <col style={{ width: "17.05%" }} />
                <col style={{ width: "16.65%" }} />
                <col style={{ width: "16.65%" }} />
                <col style={{ width: "16.65%" }} />
                <col style={{ width: "16.65%" }} />
                <col style={{ width: "16.65%" }} />
              </colgroup>
              <thead>
                <tr style={{ height: "17.96%" }}>
                  <th className="border-b border-[#2D8883] p-0">
                    <div className="flex h-full items-center justify-center">
                      <div className="flex items-center justify-center rounded-[12px] border border-[#2D8883]/30 bg-white/80 h-[clamp(26px,3vw,40px)] w-[clamp(26px,3vw,40px)]">
                        <img src="/assets/hero-cash.svg" alt="" className="h-[70%] w-[70%] object-contain" />
                      </div>
                    </div>
                  </th>
                  {["Jambo Cash", "Igisubizo", "Kura (LPO)", "Kura+ (Capital)", "ImberePay"].map((label) => (
                    <th
                      key={label}
                      className="border-b border-l border-[#2D8883] px-2 text-center font-normal tracking-[-0.01em] text-black"
                      style={{ fontSize: "clamp(10px, 1.6vw, 24px)", lineHeight: "1.15" }}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: "20.51%" }}>
                  <td className="border-b border-[#2D8883] px-3 align-middle">
                    <div className="text-[#004D40] font-medium tracking-[-0.01em]" style={{ fontSize: "clamp(10px, 1.2vw, 18px)" }}>
                      Min Default Loan
                    </div>
                    <div className="text-[#004D40]/80" style={{ fontSize: "clamp(8px, 0.95vw, 12px)", lineHeight: "1.35" }}>
                      The smallest amount you can borrow.
                    </div>
                  </td>
                  {["RWF 50,000", "RWF 150,000", "RWF 1,000,000", "RWF 2,500,000"].map((v) => (
                    <td
                      key={v}
                      className="border-b border-l border-[#2D8883] px-2 text-center align-middle text-[#1D5E5A]"
                      style={{ fontSize: "clamp(10px, 1.35vw, 24px)", lineHeight: "1.2" }}
                    >
                      {v}
                    </td>
                  ))}
                  <td
                    className="border-b border-l border-[#2D8883] px-2 text-center align-middle text-[#1D5E5A]"
                    style={{ fontSize: "clamp(10px, 1.2vw, 20px)", lineHeight: "1.2" }}
                  >
                    50%
                    <br />
                    of your salary
                  </td>
                </tr>

                <tr style={{ height: "20.51%" }} className="bg-[#D7FFF8]">
                  <td className="border-b border-[#2D8883] px-3 align-middle">
                    <div className="text-[#004D40] font-medium tracking-[-0.01em]" style={{ fontSize: "clamp(10px, 1.2vw, 18px)" }}>
                      Interest Rate
                    </div>
                    <div className="text-[#004D40]/80" style={{ fontSize: "clamp(8px, 0.95vw, 12px)", lineHeight: "1.35" }}>
                      The extra percentage you pay back
                    </div>
                  </td>
                  {["9%/mo", "6.7%/mo", "6.7%/mo", "6.7%/mo", "9%/mo"].map((v, i) => (
                    <td
                      key={`${v}-${i}`}
                      className="border-b border-l border-[#2D8883] px-2 text-center align-middle text-black"
                      style={{ fontSize: "clamp(10px, 1.35vw, 24px)", lineHeight: "1.2" }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>

                <tr style={{ height: "20.51%" }} className="bg-[#D7FFF8]">
                  <td className="border-b border-[#2D8883] px-3 align-middle">
                    <div className="text-[#004D40] font-medium tracking-[-0.01em]" style={{ fontSize: "clamp(10px, 1.2vw, 18px)" }}>
                      Loan Tenure
                    </div>
                    <div className="text-[#004D40]/80" style={{ fontSize: "clamp(8px, 0.95vw, 12px)", lineHeight: "1.35" }}>
                      The time you have to repay.
                    </div>
                  </td>
                  {["30 days", "90 days", "180 days", "180 days", "60 days"].map((v, i) => (
                    <td
                      key={`${v}-${i}`}
                      className="border-b border-l border-[#2D8883] px-2 text-center align-middle text-black"
                      style={{ fontSize: "clamp(10px, 1.35vw, 24px)", lineHeight: "1.2" }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>

                <tr style={{ height: "20.51%" }}>
                  <td className="px-3 align-middle">
                    <div className="text-[#004D40] font-medium tracking-[-0.01em]" style={{ fontSize: "clamp(10px, 1.2vw, 18px)" }}>
                      Target Customers
                    </div>
                    <div className="text-[#004D40]/80" style={{ fontSize: "clamp(8px, 0.95vw, 12px)", lineHeight: "1.35" }}>
                      Who the loan is meant for.
                    </div>
                  </td>
                  {["Individual*", "Jambo Cash customers", "Entrepreneurs", "Entrepreneurs", "Employees"].map((v, i) => (
                    <td
                      key={`${v}-${i}`}
                      className="border-l border-[#2D8883] px-2 text-center align-middle text-black"
                      style={{ fontSize: "clamp(9px, 1.1vw, 18px)", lineHeight: "1.2" }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="absolute text-center text-[#004D40] font-normal leading-[1.5] tracking-[0.01em]"
          style={{ left: "33.62%", top: "61.98%", width: "46.83%", fontSize: "clamp(12px, 1.2vw, 16px)" }}
        >
          We are currently focusing on bodaboda riders (motari) for our base Jambo Cash product only.
        </div>
        <div
          className="absolute text-center text-[#004D40] font-normal leading-[1.5]"
          style={{ left: "32.67%", top: "61.75%", width: "1%", fontSize: "clamp(16px, 1.4vw, 22.99px)" }}
        >
          *
        </div>

        <div
          className="absolute rounded-[24px] bg-[#01382F]"
          style={{
            left: "6.75%",
            top: "73.50%",
            width: "86.50%",
            height: "20.50%",
          }}
        >
          <div className="relative h-full w-full rounded-[24px]">
            <div className="absolute left-[5%] top-[24%] w-[55%]">
              <div className="flex items-center gap-4">
                <div className="flex h-[clamp(34px,3.2vw,44px)] w-[clamp(34px,3.2vw,44px)] items-center justify-center rounded-[12px] border border-[#82FB8E]/30 bg-white/10">
                  <img src="/assets/hero-cash.svg" alt="" className="h-[70%] w-[70%] object-contain" />
                </div>
                <div
                  className="text-white font-medium tracking-[-0.02em]"
                  style={{ fontSize: "clamp(18px, 2.1vw, 28px)", lineHeight: "1.1" }}
                >
                  Create account
                </div>
              </div>

              <div
                className="mt-3 text-white/80 font-normal tracking-[0.01em]"
                style={{ fontSize: "clamp(11px, 1.1vw, 14px)", lineHeight: "1.6" }}
              >
                Our mobile app is built to give you quick access to credit, easy repayments, and a clear view of your financial activity. Manage
                everything from your phone — anytime, anywhere.
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-[#82FB8E] bg-[#82FB8E] px-4 py-2 text-[#01382F]"
                  style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
                >
                  <img src="/assets/Union-7.svg" alt="" className="h-4 w-4" />
                  Download iOS
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-[#82FB8E]/60 bg-[#6CFF7B] px-4 py-2 text-[#01382F]"
                  style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
                >
                  <img src="/assets/Union-6.svg" alt="" className="h-4 w-4" />
                  Download Android
                </a>
              </div>
            </div>

            <img
              src="/assets/mobile-device.png"
              alt=""
              className="pointer-events-none absolute select-none z-50"
              style={{
                right: "25%",
                bottom: "-105%",
                width: "clamp(100px, 26vw, 300px)",
                transform: "rotate(18deg)",
                transformOrigin: "bottom right",
                filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.35))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
