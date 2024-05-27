const Hero = () => {
  return (
    <div className="mt-10 px-4 mx-auto">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:px-12 px-4">
        <div className="space-y-5 mx-2 md:w-1/3 ">
          <h2 className="text-3xl font-bold text-violet-900">
            Develop Your Skills
          </h2>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laudantium velit similique. Culpa accusamus velit assumenda
            architecto quibusdam ipsa iusto.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:w-2/3 mt-10  items-center justify-center">
          <div className="card bg-white rounded-2xl shadow-2xl h-80 p-4 md:w-80 w-72 items-center flex flex-col cursor-pointer hover:translate-y-2 duration-300 transition-all">
            <img
              src="/src/assets/develop.svg"
              alt=" "
              className="md:w-32 w-40 my-5"
            />
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo?
            </p>
          </div>
          <div className="card bg-white rounded-2xl shadow-2xl h-80 p-4 md:w-80 w-72 items-center flex flex-col cursor-pointer hover:translate-y-2 md:hover:translate-y-24 duration-300 transition-all md:translate-y-20">
            <img
              src="/src/assets/develop.svg"
              alt=" "
              className="md:w-32 w-40 my-5"
            />
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo?
            </p>
          </div>
          <div className="card bg-white rounded-2xl shadow-2xl h-80 p-4 md:w-80 w-72 items-center flex flex-col cursor-pointer hover:translate-y-2 duration-300 transition-all">
            <img
              src="/src/assets/develop.svg"
              alt=" "
              className="md:w-32 w-40 my-5"
            />
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
