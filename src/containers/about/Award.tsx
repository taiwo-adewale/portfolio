import React from "react";

type Props = {
  title: string;
  description: string;
  year: number;
};

export default function Award({ title, description, year }: Props) {
  return (
    <li className="group relative border border-border rounded-large p-8 sm:p-12 pl-14 sm:pl-16 shadow-award duration-300 hover:border-primary">
      <h4 className="uppercase mb-4 text-[1.625rem] sm:text-3xl">{title}</h4>

      <p className="text-foreground/70 text-lg sm:text-xl font-light">
        {description}
      </p>

      <div className="group-hover:bg-primary group-hover:text-primary-foreground group-focus:bg-primary group-focus:text-primary-foreground border border-border group-hover:border-primary  group-focus:border-primary rounded-b-small p-2.5 pt-1.5 pb-2 absolute -left-3 sm:-left-3.5 top-1/2 -translate-y-1/2 -rotate-90 duration-300">
        <span className="text-[1.375rem] sm:text-[1.5625rem] leading-none">
          {year}
        </span>
      </div>
    </li>
  );
}
