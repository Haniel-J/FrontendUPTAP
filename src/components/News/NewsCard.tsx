import TiltedCard from "@/components/reactbits/TiltedCard";

interface NewsCardProps {
  news: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="flex justify-center">

      <TiltedCard
        imageSrc={news.image}
        altText={news.title}
        captionText={news.title}
        containerHeight="350px"
        containerWidth="100%"
        imageHeight="350px"
        imageWidth="100%"
        scaleOnHover={1.05}
        rotateAmplitude={10}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={true}

        overlayContent={
          <div
            className="
              w-full
              h-350px
              bg-[#722064bc]
              rounded-[15px]
              flex
              flex-col
              justify-end
              p-6
              text-white
            "
          >
            <h3 className="font-bold text-xl mb-2">
              {news.title}
            </h3>

            <p className="text-sm">
              {news.description}
            </p>
          </div>
        }
      />

    </div>
  );
}