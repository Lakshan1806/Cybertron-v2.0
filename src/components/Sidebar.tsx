import Link from "next/link";

function Sidebar() {
  const navItems = [
    { label: "laptops" },
    { label: "consoles" },
    { label: "desktop workstations" },
    { label: "cpus & motherboards" },
    { label: "graphic cards" },
    { label: "cooling and lighting" },
    { label: "storage and memory" },
    { label: "casings" },
    { label: "monitors" },
    { label: "speakers and headphones" },
    { label: "cable and connectors" },
    { label: "keyboard and mice" },
    { label: "power supply" },
    { label: "networking" },
  ];

  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto bg-white/5 p-4 backdrop-blur-xs">
      {navItems.map((item) => (
        <Link
          href={item.label}
          key={item.label}
          className="text-[16px] font-[500] text-[#ffa500] uppercase"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
