const Footer = () => {
  return (
    <>
      <footer className="bg-violet-300 mt-10 flex flex-wrap">
        <div className="flex flex-col xl:flex-row  items-center xl:px-12 px-4 bg-slate-600 w-screen ">
          <div className="flex flex-row cursor-pointer  items-center">
            <img
              src="./src/assets/logo.png"
              alt="Logo Coding"
              className="w-20"
            />
            <p>© 2022. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap  bg-violet-400 ">
            <div className="flex flex-wrap items-end mx-40 bg-red-700 ">
              <p>Follow Us</p>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img
                  src="./src/assets/wa.png"
                  alt="Logo Coding"
                  className="w-14"
                />
                <p>Instagram</p>
              </div>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
            </div>
            <div>
              <p>Follow Us</p>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
              <div className="flex space-x-3 items-center cursor-pointer">
                <img src="./src/assets/instagram.svg" alt="Logo Coding" />
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
