import React from "react";

type Props = {
  children: string;
};

export default function SectionTitle({ children }: Props) {
  return (
    <div className="flex flex-col">
      <h2 className="text-[3.125rem] font-light mb-6 leading-[1.2]">
        {children}
      </h2>

      <div className="w-24 h-2 bg-primary"></div>
    </div>
  );
}
