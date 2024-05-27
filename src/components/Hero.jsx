const Hero = () => {
  return (
    <div className="mt-10 mx-auto">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-5 xl:px-12">
        <div className="space-y-5 px-4">
          <h2 className="text-3xl font-bold text-violet-900">
            Develop Your Skills
          </h2>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laudantium velit similique. Culpa accusamus velit assumenda
            architecto quibusdam ipsa iusto.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="card bg-white rounded-2xl shadow-2xl h-80 p-4 w-60 items-center flex flex-col cursor-pointer hover:translate-y-2 duration-300 transition-all">
            <img src="/src/assets/develop.svg" alt=" " className="w-32" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo?
            </p>
          </div>
          <div className="card bg-white rounded-2xl shadow-2xl h-80 p-4 w-60 items-center flex flex-col cursor-pointer hover:translate-y-2 md:hover:translate-y-24 duration-300 transition-all md:translate-y-20">
            <img src="/src/assets/develop.svg" alt=" " className="w-32" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo?
            </p>
          </div>
          <div className="card bg-white rounded-2xl shadow-2xl h-80 p-4 w-60 items-center flex flex-col cursor-pointer hover:translate-y-2 duration-300 transition-all">
            <img src="/src/assets/develop.svg" alt=" " className="w-32" />
            <p>
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
