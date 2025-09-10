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
    <div className="absolute top-0 flex h-[80px] w-full items-center bg-white/5 px-2 backdrop-blur-md">
      <div className="flex w-1/3 justify-center gap-5">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.path}
            className="text-grad-stroke text-[20px] font-[500]"
            data-text={item.label}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
