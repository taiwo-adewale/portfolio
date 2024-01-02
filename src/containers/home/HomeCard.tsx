import Link from "next/link";

type Props = {
  href: string;
  label: string;
  title: string;
  children?: React.ReactNode;
  ariaLabel: string;
};

export default function HomeCard({
  href,
  label,
  title,
  children,
  ariaLabel,
}: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="relative group flex flex-col justify-between size-full overflow-hidden bg-card border-2 border-card-border rounded-large py-5 duration-200 hover:border-primary"
    >
      <div className="mb-5 mx-5 flex items-center border border-border-secondary bg-home-card-label rounded-full pt-1 pb-1.5 pl-2.5 pr-3 w-fit">
        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>

        <span className="text-[1.0625rem] font-light lowercase">{label}</span>
      </div>

      {children}

      <div className="mt-5 mx-5">
        <h2 className="uppercase text-[1.375rem]">{title}</h2>
      </div>
    </Link>
  );
}
