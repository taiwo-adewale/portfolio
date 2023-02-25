import { useState, useEffect } from "react";
import Link from "next/link";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { CgMenuGridR } from "react-icons/cg";

import { links } from "utils/data";

interface IProps {
  theme: string;
  setTheme: (val: string) => void;
}

function Navbar({ theme, setTheme }: IProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const [mobileNavActive, setMobileNavActive] = useState<boolean>(false);

  useEffect(() => {
    const htmlBody = document.querySelector("html");

    if (theme === "dark") {
      htmlBody?.classList.add("dark", "bg-dark");
      htmlBody?.classList.remove("bg-white");
    } else {
      htmlBody?.classList.remove("dark", "bg-dark");
      htmlBody?.classList.add("bg-white");
    }
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    if (typeof window !== "undefined") {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between py-6 md:py-10">
        <div className="lg:w-1/3">
          <Link
            href="/"
            aria-label="Wale"
            className="text-2xl md:text-3xl lg:text-4xl xxl:text-5xl font-bold capitalize text-black dark:text-white"
          >
            Adewale
          </Link>
        </div>

        <nav className="lg:w-1/3 hidden md:flex justify-center items-center">
          <ul className="flex space-x-6 text-dark dark:text-light">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className={`capitalize px-2 hover:text-primary t-300 lg:text-lg xxl:text-2xl ${
                    pathname === link.url && "text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:w-1/3 lg:text-right">
          {theme === "dark" ? (
            <button
              onClick={() => handleThemeChange("light")}
              aria-label="Enable Light Mode"
              className="mx-1 h-8 w-8 rounded p-2"
            >
              <BsSunFill className="fill-light text-xl sm:text-2xl xxl:text-3xl" />
            </button>
          ) : (
            <button
              onClick={() => handleThemeChange("dark")}
              aria-label="Enable Dark Mode"
              className="mx-1 h-8 w-8 rounded p-2"
            >
              <BsMoonFill className="fill-dark text-xl sm:text-2xl xxl:text-3xl" />
            </button>
          )}
        </div>

        <div className="xs:pl-4 pl-8 md:hidden">
          <CgMenuGridR
            onClick={() => setMobileNavActive((prevState) => !prevState)}
            className="text-3xl text-dark dark:text-light cursor-pointer"
          />
        </div>
      </header>

      <nav
        className={`fixed z-[99] -bottom-[80px] left-0 right-0 nav-shadow md:hidden rounded-t-[20px] overflow-hidden flex-center border-x-2 border-t-2 border-borderColorLight dark:border-borderColorDark border-opacity-60 ${
          mobileNavActive && "!bottom-0"
        } bg-white dark:bg-dark t-500`}
      >
        <ul className="text-dark dark:text-light w-full flex justify-center px-4">
          {links.map((link) => (
            <li
              key={link.url}
              className={`hover:text-primary t-300 w-full max-w-[130px] ${
                pathname === link.url && "text-primary"
              }`}
            >
              <Link
                href={link.url}
                className="flex flex-col items-center py-4 px-2"
              >
                {link.icon}
                <span className="text-sm mt-1">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
