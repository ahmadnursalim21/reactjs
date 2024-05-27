const Benner = () => {
  return (
    <div className="md:px-12 mt-5  p-4  mx-auto">
      <div className="gradientBg rounded-xl rounded-br[-80px] md:p-9 px-4 py-9 bg-violet-300 rounded-br-[80px] sm:rounded-br-[150px]">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          <div>
            <img
              src="/src/assets/banner.svg"
              alt="Logo"
              className="w-80 xl:w-96"
            />
          </div>
          <div className="md:w-3/5 space-y-5">
            <h2 className="text-3xl font-bold text-violet-800">
              Develop Your Skills
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              quos esse rerum optio repudiandae, vero dolorem illum? Laudantium,
              ex! A vel alias et tenetur numquam officia soluta molestias
              molestiae vitae.
            </p>
            <div className="space-x-5  flex md:flex-row xl:items-center">
              <button className="w-24 h-8  bg-violet-700 rounded-sm hover:bg-violet-900 transition-all duration-300 text-white">
                Get Started
              </button>
              <button className="w-24 h-8  bg-violet-700 rounded-sm  hover:bg-violet-900 transition-all duration-300 text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benner;
