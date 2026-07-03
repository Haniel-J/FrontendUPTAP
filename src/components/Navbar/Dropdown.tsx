import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  items: {
    title: string;
    href: string;
  }[];
}

export default function Dropdown({ open, items }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: .22 }}
          className="
            absolute
            top-full
            left-0
            mt-4
            w-64
            rounded-2xl
            bg-white
            shadow-xl
            border
            border-gray-200
            overflow-hidden
          "
        >
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="
                block
                px-5
                py-3
                text-gray-700
                hover:bg-[#F4FBF7]
                hover:text-[#098049]
                transition
              "
            >
              {item.title}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}