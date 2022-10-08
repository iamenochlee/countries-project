//basics
import React from "react";

//utils
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ country }) => {
  const cardVariants = {
    hidden: { y: "50px", scale: 1 },
    visible: {
      y: "0",
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const controls = useAnimation();
  const { ref: cardNode, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Link href={`/countries/${country.cca3}`}>
      <motion.a
        ref={cardNode}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        className="w-72 hover:drop-shadow-lg cursor-pointer bg-skin-accent text-skin-text md:w-full mx-auto md:pb-0 focus:scale-105 dark:focus-visible:outline-gray-500 focus:outline-none focus:shadow-lg border-red-600 focus-visible:outline-gray-300 focus:outline-offset-0 lg:pb-6 rounded-md pb-8 shadow-md overflow-hidden mb-9 md:mb-0 block">
        <div>
          <Image
            objectFit="cover"
            width={500}
            height={300}
            priority
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
          />
          <div
            className="py-4 px-6  mb-3 flex justify-between items-start 
          ">
            <div>
              <h2 className="text-xl font-extrabold mb-2">
                {country.name.common.split(0, 20)}
              </h2>
              <p className="text-base">
                <small className="font-semibold text-base">Population: </small>
                {country.population.toLocaleString("en-US")}
              </p>
              <p className="text-base">
                <small className="font-semibold text-base">Region: </small>
                {country.region}
              </p>

              <p className="text-base">
                <small className="font-semibold text-base">Capital: </small>
                {country.capital}
              </p>
            </div>
          </div>
        </div>
      </motion.a>
    </Link>
  );
};

export default Card;

Card.displayName = "Card";
