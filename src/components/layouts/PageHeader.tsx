interface Props {
  title: string;

  description?: string;
}

export default function PageHeader({
  title,
  description,
}: Props) {
  return (
    <div className="mb-14">
      <h1 className="text-5xl font-poppins text-[#098049]">
        {title}
      </h1>

      {description && (
        <p className="mt-6 text-lg text-gray-700 max-w-3xl leading-8">
          {description}
        </p>
      )}
    </div>
  );
}