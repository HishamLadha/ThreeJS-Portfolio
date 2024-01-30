import React from "react";
import { motion } from "framer-motion";


import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Footer = () => {
    return (
    <div className="bg-black-100 rounded-[20px] h-[10px]">
      <div className={`p-5 bg-tertiary rounded-2xl`}>
        <motion.div>
          <p className={`${styles.sectionSubText} flex justify-center`}>
          © 2024 Hisham Ladha. Credits to JSM.
          </p>
          {/* <h2 className={styles.sectionHeadText}>
            Testimonials.
          </h2> */}
        </motion.div>
      </div>
      </div>
    )
}

export default Footer;