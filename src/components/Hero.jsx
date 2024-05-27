import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-[url('src/assets/background.jpg')] bg-cover bg-center w-screen  h-screen">
      <div className=" flex  w-screen bg-transparent top-0 left-0 ">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
