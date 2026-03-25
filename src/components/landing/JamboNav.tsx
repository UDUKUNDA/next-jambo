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
    <header className="w-full">
      <div className="pt-6">
        <div className="w-full bg-black/10 py-5 ring-1 ring-white/10 backdrop-blur">
          <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 md:px-6">
            <Link href="/" className="inline-flex shrink-0 items-center">
              <span className="block h-16 w-[280px] overflow-hidden md:h-20 md:w-[340px]">
                <img
                  src="/creditJambo.png"
                  alt="Credit Jambo"
                  className="h-full w-full object-cover object-center"
                />
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-10 text-sm text-white/80 md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#32D26B] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
