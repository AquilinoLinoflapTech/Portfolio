import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#141414] w-full p-6 text-[#bac4b8] flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 flex flex-col">
        <ul className="flex space-x-4 mt-2">
          <li>
            <a
              href="https://www.facebook.com/angeloaquilinoooo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFF]"
            >
              <FaFacebook size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/artjisannn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFF]"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/angelo-james-aquilino-489527245/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFF]"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-4 md:mt-0">© {new Date().getFullYear()} Artjisan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
