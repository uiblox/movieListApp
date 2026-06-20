import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft shadow-xs border border-default h-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center dark:text-white">
          © 2026{" "}
          <Link to="/" className="hover:underline hover:text-blue-500">
            Cinemate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <Link
              to="#"
              className="hover:underline hover:text-blue-500 me-4 md:me-6 dark:text-white"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:underline hover:text-blue-500 me-4 md:me-6 dark:text-white"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:underline hover:text-blue-500 me-4 md:me-6 dark:text-white"
            >
              Youtube
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:underline hover:text-blue-500 dark:text-white "
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
