import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-violet-50 text-3xl">
        SR
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-xl">
        <FaGithub className="text-violet-50" />
        <FaLinkedin className="text-violet-50" />
      </div>
    </nav>
  );
};
