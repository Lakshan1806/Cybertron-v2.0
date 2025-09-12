import Link from "next/link";

function TopBar() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/service", label: "Service" },
    { path: "/contact", label: "Contact" },
    { path: "/signup", label: "Sign Up" },
    { path: "/signin", label: "Sign In" },
  ];

  return (
    <div className="flex h-full w-full items-center gap-5 bg-white/5 px-2 backdrop-blur-xs">
      {navItems.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className="text-[16px] font-[500] text-[#ffa500] uppercase"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default TopBar;
