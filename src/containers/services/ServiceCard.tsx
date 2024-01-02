import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  image: string | StaticImageData;
};

export default function ServiceCard({ title, description, image }: Props) {
  return (
    <li className="group border border-border rounded-large flex flex-col sm:flex-row sm:items-center py-10 px-6 sm:px-10 duration-300 hover:border-primary shadow-service gap-[1.875rem]">
      <Image
        src={image}
        alt=""
        width={150}
        height={150}
        className="bg-service-image border border-primary p-10 rounded-full group-hover:rotate-[360deg] duration-700 w-full aspect-square max-w-[9.375rem] self-center"
      />

      <div className="flex flex-col w-full text-center sm:text-left">
        <h3 className="mb-2.5 text-[1.8125rem] font-light">{title}</h3>

        <p className="text-[1.4375rem] font-extralight">{description}</p>
      </div>
    </li>
  );
}
