import { motion } from "framer-motion";
import { fadeIn } from "../shared/variants.js";

const Feature = () => {
  return (
    <div className="md:px-12 px-4 mt-20">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h1 className="text-4xl text-violet-900 font-bold mt-10">Feature</h1>
        </div>
        <div className="flex flex-col md:flex-row space-x-3 items-center mt-10 space-y-5 sm:flex-wrap justify-center">
          <motion.div
            className=" w-80 md:w-72 h-80 rounded-xl flex flex-col items-center shadow-xl cursor-pointer hover:translate-y-2 transition-all delay-600"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/src/assets/f-1.svg"
              alt="Feature one"
              className="w-40 mt-7"
            />
            <p className="mt-10">Feature</p>
            <button className="bg-violet-700 text-white w-24 h-8 rounded-md mt-5">
              Get Started
            </button>
          </motion.div>
          <motion.div
            className=" w-80 md:w-72 h-80 rounded-xl flex flex-col items-center shadow-xl cursor-pointer hover:translate-y-2 transition-all delay-600"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/src/assets/f-2.svg"
              alt="Feature one"
              className="w-40 mt-7"
            />
            <p className="mt-10">Feature</p>
            <button className="bg-violet-700 text-white w-24 h-8 rounded-md mt-5">
              Get Started
            </button>
          </motion.div>
          <motion.div
            className=" w-80 md:w-72 h-80 rounded-xl flex flex-col items-center shadow-xl cursor-pointer hover:translate-y-2 transition-all delay-600"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/src/assets/f-3.svg"
              alt="Feature one"
              className="w-40 mt-7"
            />
            <p className="mt-10">Feature</p>
            <button className="bg-violet-700 text-white w-24 h-8 rounded-md mt-5">
              Get Started
            </button>
          </motion.div>
          <motion.div
            className=" w-80 md:w-72 h-80 rounded-xl flex flex-col items-center shadow-xl cursor-pointer hover:translate-y-2 transition-all delay-600"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/src/assets/f-4.svg"
              alt="Feature one"
              className="w-40 mt-7"
            />
            <p className="mt-10">Feature</p>
            <button className="bg-violet-700 text-white w-24 h-8 rounded-md mt-5">
              Get Started
            </button>
          </motion.div>
          <motion.div
            className=" w-80 md:w-72 h-80 rounded-xl flex flex-col items-center shadow-xl cursor-pointer hover:translate-y-2 transition-all delay-600"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/src/assets/f-5.svg"
              alt="Feature one"
              className="w-40 mt-7"
            />
            <p className="mt-10">Feature</p>
            <button className="bg-violet-700 text-white w-24 h-8 rounded-md mt-5">
              Get Started
            </button>
          </motion.div>
          <motion.div
            className=" w-80 md:w-72 h-80 rounded-xl flex flex-col items-center shadow-xl cursor-pointer hover:translate-y-2 transition-all delay-600"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/src/assets/f-1.svg"
              alt="Feature one"
              className="w-40 mt-7"
            />
            <p className="mt-10">Feature</p>
            <button className="bg-violet-700 text-white w-24 h-8 rounded-md mt-5">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
