import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CONTACTS } from "../constants/Info";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-violet-50 text-3xl">
        SR
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-xl">
        <a
          href={CONTACTS.gitHUb}
          target="_blank"
          className="hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:text-white transition-shadow duration-300 rounded-full"
        >
          <FaGithub className="text-violet-50" />
        </a>
        <a
          href={CONTACTS.ldin}
          target="_blank"
          className="hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:text-white transition-shadow duration-300 rounded "
        >
          <FaLinkedin className="text-violet-50" />
        </a>
      </div>
    </nav>
  );
};
