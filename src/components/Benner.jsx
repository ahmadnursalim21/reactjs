const Benner = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div className="gradientBg rounded-xl rounded-br[-80px] md:p-9 px-4 py-9 bg-slate-600">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          <div>
            <img src="/src/assets/react.svg" alt="" />
          </div>
          <div className="md:w-3/5">
            <h2>Develop Your Skills</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              quos esse rerum optio repudiandae, vero dolorem illum? Laudantium,
              ex! A vel alias et tenetur numquam officia soluta molestias
              molestiae vitae.
            </p>
            <div>
              <button>Get Started</button>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benner;
