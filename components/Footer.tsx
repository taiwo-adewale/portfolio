import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-2 pb-12 md:py-12 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="mt-8 flex justify-center space-x-6">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/walecyber_dev"
        >
          <span className="sr-only">twitter</span>
          <FaTwitter className="text-2xl sm:text-3xl xxl:text-4xl fill-[#333333] dark:fill-white hover:fill-primary dark:hover:fill-primary t-300" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/taiwo-adewale-jsdev/"
        >
          <span className="sr-only">linkedin</span>
          <FaLinkedin className="text-2xl sm:text-3xl xxl:text-4xl fill-[#333333] dark:fill-white hover:fill-primary dark:hover:fill-primary t-300" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/taiwo-adewale"
        >
          <span className="sr-only">github</span>
          <FaGithub className="text-2xl sm:text-3xl xxl:text-4xl fill-[#333333] dark:fill-white hover:fill-primary dark:hover:fill-primary t-300" />
        </Link>
      </div>
      <p className="mt-4 sm:mt-8 text-center leading-6 text-textGray xxl:text-2xl">
        © 2023 Taiwo Adewale. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
