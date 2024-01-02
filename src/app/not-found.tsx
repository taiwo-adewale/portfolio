import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="h-full py-20 flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-8 text-center">
        <h1 className="text-6xl">Page not found</h1>

        <p className="text-2xl">
          Go back to{" "}
          <Link href="/" className="underline hover:text-primary duration-300">
            homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
