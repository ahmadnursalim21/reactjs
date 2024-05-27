import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };
  const navbarlist = [
    { link: "Home", Path: "/" },
    { link: "About", Path: "about" },
    { link: "Contact", Path: "contact" },
  ];
  return (
    <>
      <nav className="bg-violet-500 flex justify-between items-center px-8 h-14 z-50 sticky top-0">
        <div>
          <a
            className="text-2xl hover:text-gray-300 text-gray-200 transition-all duration-300 items-center"
            href={"/"}
          >
            Warung ID
          </a>
        </div>
        <div className="hidden sm:block">
          <ul>
            {navbarlist.map(({ link, Path }) => (
              <a
                key={link}
                href={Path}
                className="inline-block mx-6 font-medium hover:text-gray-400 text-gray-200 transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </ul>
        </div>

        <div className="block sm:hidden">
          <button onClick={toogle}>
            {!isOpen ? (
              <CiMenuFries className=" text-2xl text-gray-200 hover:text-gray-300 transition-all duration-300" />
            ) : (
              <FaX className=" text-2xl text-gray-200 hover:text-gray-300 transition-all duration-300" />
            )}
          </button>
        </div>
      </nav>
      {/* navigate mobile  */}
      <div className="block absolute sm:hidden w-full bg-violet-400">
        {isOpen && (
          <ul className="flex flex-col items-center justify-center h-60">
            {navbarlist.map(({ link, Path }) => (
              <a
                key={link}
                href={Path}
                className="block mx-6 my-3 font-medium hover:text-gray-400 text-gray-200 transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
