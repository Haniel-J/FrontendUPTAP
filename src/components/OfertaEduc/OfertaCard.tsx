import { CometCard } from "@/components/reactbits/comet-card";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  featured?: boolean;
}

export default function OfertaCard({
  title,
  subtitle,
  image,
  featured = false,
}: Props) {
  return (
    <div
      className={`
        transition-transform duration-300

        ${
          featured
            ? "-translate-y-8 lg:-translate-y-12"
            : "translate-y-0"
        }
      `}
    >
      <CometCard>
        <button
          className="
            flex
            w-72
            flex-col
            rounded-2xl
            bg-[#1F2121]
            p-3
            cursor-pointer
          "
        >
          {/* Imagen */}
          <div className="aspect-3/4 overflow-hidden rounded-xl">
            <img
              src={image}
              alt={title}
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

          {/* Texto */}
          <div className="p-5 text-center text-white">
            <h3 className="text-2xl font-bold">
              {title}
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              {subtitle}
            </p>
          </div>
        </button>
      </CometCard>
    </div>
  );
}