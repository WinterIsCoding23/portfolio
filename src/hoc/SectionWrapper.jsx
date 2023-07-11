// rafce: extension shortcut for a React component (with the name of the file)

import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section>
        <Component />
      </motion.section>
    );
  }
};

export default SectionWrapper;
