import { motion } from "framer-motion";
import { fadeIn } from "../shared/variants.js";
const Hero = () => {
  return (
    <div className="mt-10 px-4 mx-auto">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:px-12 px-4">
        <motion.div
          className="space-y-5 mx-2 md:w-1/3 "
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-violet-900">
            Develop Your Skills
          </h2>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laudantium velit similique. Culpa accusamus velit assumenda
            architecto quibusdam ipsa iusto.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-10 flex-wrap">
          <motion.div
            className="card bg-white rounded-2xl shadow-2xl h-80 p-4 md:w-80 w-72 items-center flex flex-col cursor-pointer hover:translate-y-2 duration-300 transition-all"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src="/src/assets/develop.svg"
              alt=" "
              className="md:w-32 w-40 my-5"
            />
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo?
            </p>
          </motion.div>
          <motion.div
            className="card bg-white rounded-2xl shadow-2xl h-80 p-4 md:w-80 w-72 items-center flex flex-col cursor-pointer hover:translate-y-2 md:hover:translate-y-24 duration-300 transition-all md:translate-y-20"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="/src/assets/develop.svg"
              alt=" "
              className="md:w-32 w-40 my-5"
            />
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo?
            </p>
          </motion.div>
          <motion.div
            className="card bg-white rounded-2xl shadow-2xl h-80 p-4 md:w-80 w-72 items-center flex flex-col cursor-pointer hover:translate-y-2 duration-300 transition-all"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="/src/assets/develop.svg"
              alt=" "
              className="md:w-32 w-40 my-5"
            />
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo?
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
