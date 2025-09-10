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
    <div className="absolute left-0 flex h-[80px] w-full items-center bg-white/5 px-2 backdrop-blur-md">
      <div className="flex flex-col w-1/3 justify-center gap-5">
        {navItems.map((item) => (
          <Link
            href={item.label}
            key={item.label}
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

export default Sidebar;
