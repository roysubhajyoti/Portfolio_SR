import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { CONTACTS } from "../constants/Info";
export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
      <div className="flex justify-center gap-6">
        <a
          href={`mailto:${CONTACTS.email}`}
          target="_blank"
          className="text-3xl"
        >
          <MdEmail className="text-violet-50" />
        </a>
        <a href={CONTACTS.ldin} target="_blank" className="text-3xl">
          <FaLinkedin className="text-violet-50" />
        </a>
      </div>
    </div>
  );
};
