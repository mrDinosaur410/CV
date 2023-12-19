import React from "react";
import { upAnimation } from "../animation";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="header"
      initial="hidden"
      whileInView="visible"
      transition={{
        ease: "linear",
        duration: 0.5,
        x: { duration: 0.5 },
      }}
      variants={upAnimation}
      viewport={{ amount: 0.5, once: true }}
    >
      <img src="./ava.jpg" alt="ava" />
      <div className="header__right">
        <h1>CIMUR CITOU</h1>
        <h2>FRONTEND DEVELOPER</h2>
        <p>
          I am a second-year student at the Faculty of Mechanics and
          Mathematics, BSU. My academic journey has been fueled by a deep
          passion for mathematics and a love for the intricacies of analysis.
          Exploring the depths of mathematical concepts and their applications
          brings me immense joy and satisfaction.
        </p>
      </div>
    </motion.div>
  );
};

export default Header;
