interface CarouselCardProps {
  title: string;
  image: string;
}

export default function CarouselCard({
  title,
  image,
}: CarouselCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

      <img
        src={image}
        alt={title}
        className="h-80 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {title}
        </h3>
      </div>

    </div>
  );
}