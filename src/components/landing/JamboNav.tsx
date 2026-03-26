import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "For business", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact us", href: "#" },
];

export function JamboNav() {
  return (
    <header className="relative h-[74.58px] w-full">
      <div className="absolute left-[1.65px] top-0 h-[73.55px] w-[1511.65px] bg-[#01382F]" />

      <Link href="/" className="absolute left-[94.88px] top-[16.47px] block h-[38.83px] w-[225.03px]">
        <img src="/creditJambo.png" alt="Credit Jambo" className="h-full w-full object-contain" />
      </Link>

      <nav aria-label="Primary" className="absolute left-[515.05px] top-[21.89px] h-[28px] w-[484.86px]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="absolute top-0 text-[18px] font-normal leading-[28px] text-white"
            style={{
              left:
                item.label === "Home"
                  ? 0
                  : item.label === "For business"
                    ? 101.19
                    : item.label === "Services"
                      ? 253.38
                      : 391.86,
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Link
        href="/"
        className="absolute left-[1270.34px] top-[14.33px] inline-flex h-[43.11px] w-[150.12px] items-center justify-center rounded-[35px] border border-[#04EA6C] bg-[#82FB8E] text-[16px] font-normal leading-[24px] text-[#01382F]"
      >
        Get started
      </Link>
    </header>
  );
}
