import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  label: string;
  image: string | StaticImageData;
};

export default function Banner({ title, label, image }: Props) {
  return (
    <div className="rounded-full bg-banner border border-border mb-16 p-2 flex items-center gap-x-4 sm:gap-x-5">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="rounded-full size-20"
      />

      <div className="flex items-center gap-x-5 justify-between w-full min-w-0 flex-wrap pr-6 sm:pr-10">
        <h1 className="uppercase text-[1.75rem] font-light">{title}</h1>

        <div className="flex items-center gap-x-2.5 justify-center">
          <div className="size-2 rounded-full bg-primary flex-shrink-0"></div>

          <span className="text-base font-light lowercase line-clamp-1">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
