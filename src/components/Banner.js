import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="flex justify-center container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* TEXT */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[80px] font-bold leading-[1] lg:text-[110px]"
            >
              BUDI<span>MIND</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[32px] font-secondary font-bold uppercase leading-[1]"
            >
              <span className="text-white ml-1 mr-4">We are a</span>
              <TypeAnimation
                sequence={[
                  "Social Media Manager",
                  2000,
                  "Designer",
                  2000,
                  "Content Creator",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="scan"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Quis cillum ad amet do non ullamco duis eiusmod dolore. Sunt
              laboris sunt duis cupidatat proident.
            </motion.p>
            {/* Button */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex justify-center gap-x-6 items-center mb-12 max-auto lg:justify-start"
            >
              <button className="btn btn-lg">Contact Us!</button>
              <a href="#" className="text-gradient btn-link">
                Our Portofolio
              </a>
            </motion.div>
            {/* Sosial Media */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.06)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto "
        >
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
