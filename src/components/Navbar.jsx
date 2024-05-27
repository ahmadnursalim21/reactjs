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
    { link: "About", Path: "/about" },
    { link: "Contact", Path: "/contact" },
  ];
  return (
    <>
      <nav className="z-50 sticky top-0 flex items-center justify-between w-screen h-12 bg-violet-200 md:px-12 ">
        <div className="flex items-center">
          <div>
            <a className=" transition-all duration-300 " href={"/"}>
              <img
                src="./src/assets/logo.png"
                alt="  Logo Coding"
                className="w-20"
              />
            </a>
          </div>
          <div className="hidden sm:block">
            <ul>
              {navbarlist.map(({ link, Path }) => (
                <a
                  key={link}
                  href={Path}
                  className="inline-block text-xl mx-6 font-medium hover:text-violet-900 text-violet-600 transition-all duration-300"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
        </div>

        <div className="block sm:hidden px-5">
          <button onClick={toogle}>
            {!isOpen ? (
              <CiMenuFries className=" text-2xl text-violet-950 hover:text-violet-950 transition-all duration-300" />
            ) : (
              <FaX className=" text-2xl  text-violet-950 hover:text-violet-950 transition-all duration-300" />
            )}
          </button>
        </div>
      </nav>
      {/* navigate mobile  */}
      <div className="block absolute  sm:hidden  h-screen right-0 w-2/3">
        {isOpen && (
          <ul className="flex flex-col items-center justify-center  h-screen bg-violet-200 ">
            {navbarlist.map(({ link, Path }) => (
              <a
                key={link}
                href={Path}
                className="block mx-6 my-3 font-bold hover:text-violet-700 text-violet-950 transition-all duration-300"
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
