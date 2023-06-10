import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Consequat veniam cupidatat minim consectetur ea reprehenderit ad commodo sit esse officia ad excepteur laborum.",
    link: "Learn More",
  },
  {
    name: "Social Media Management",
    description:
      "Consequat veniam cupidatat minim consectetur ea reprehenderit ad commodo sit esse officia ad excepteur laborum.",
    link: "Learn More",
  },
  {
    name: "Digital Marketing",
    description:
      "Consequat veniam cupidatat minim consectetur ea reprehenderit ad commodo sit esse officia ad excepteur laborum.",
    link: "Learn More",
  },
  {
    name: "Web Development",
    description:
      "Consequat veniam cupidatat minim consectetur ea reprehenderit ad commodo sit esse officia ad excepteur laborum.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 justify-center"
          >
            <h2 className="h2 text-accent mb-6">What we do?</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              We are Digital Agency with professional team!
            </h3>
            <button className="btn btn-sm">See our works</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* SERVICES LIST */}
            <div>
              {services.map((services, index) => {
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/30 h-auto mt-1 mb-[30px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px] mb-10">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm ">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
