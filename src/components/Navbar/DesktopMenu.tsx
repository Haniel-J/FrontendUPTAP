import { menuItems } from "./MenuData";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";



interface DesktopMenuProps {
  isScrolled: boolean;
}

export default function DesktopMenu({
  isScrolled,
}: DesktopMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  return (
    <nav
      className="
        flex
        items-center
        justify-center
        gap-10
        h-full
        px-10
      "
    >
      
      {menuItems.map((item) => (
      
        <div
         key={item.title}
         className="relative"
         onMouseEnter={() => setActiveMenu(item.title)}
         onMouseLeave={() => setActiveMenu(null)}
         >
<button
    className={`
        hidden
        lg:flex
        relative
        items-center
        py-2
        font-montserrat
        text-sm
        uppercase
        tracking-wide
        transition-colors
        ${
          isScrolled
            ? "text-white hover:text-[#098049]"
            : "text-white hover:text-[#098049]"
        }
    `}
>
    {item.title}

    {activeMenu === item.title && (

        <motion.div
            layoutId="navbar-indicator"
            className="
                absolute
                -bottom-1
                left-0
                w-full
                h-2px
                rounded-full
                bg-[#098049]"

            transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
                }}
          />
                )}

                </button>

       {item.children && (
        <Dropdown
      open={activeMenu === item.title}
      items={item.children}
      />

)}
        </div>
        ))}
    </nav>
  );
}