import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        top: isScrolled ? 20 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className={`
        w-full
        z-50

        ${
          isScrolled
            ? "fixed left-0 flex justify-center"
            : "absolute top-0 left-0"
        }
      `}
    >
      {/* Esta es la cápsula */}
      <motion.div
        animate={{
          width: isScrolled ? "78%" : "100%",
          borderRadius: isScrolled ? 999 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
      className={`
  h-20
  flex
  items-center
  justify-center

  transition-all
  duration-300

  ${
    isScrolled
      ? "bg-[#72206457] backdrop-blur-xl shadow-2xl border border-gray-400"
      : "bg-transparent"
  }
`}
      >
        <DesktopMenu isScrolled={isScrolled}/>
      </motion.div>
    </motion.header>
  );
}