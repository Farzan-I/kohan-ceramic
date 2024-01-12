import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { aboutPics } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const AboutCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[230px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
        className="w-full about-card-gradient p-[1px] rounded-[10px]"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-card rounded-[10px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-50 h-50 object-contain" />
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
        <p className={styles.sectionSubText}>About the artist</p>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="font-left mt-10 text-white text-[16px] max-w-3xl leading-[30px]"
      >
        You guessed it, this site belongs to someone who's loved playing with clay as a kid and still does! 
        Her family disapproved as they thought she'd get sick, which caused her to stay away from pottery for a while. 
        Only at the age of 32, she left her career as an architect to pursue her dream as a ceramic potter. 
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {aboutPics.map((service, index) => (
          <AboutCard key={service.title} index={index} {...service} />
        ))}
      </div>

       <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="font-left mt-10 text-white text-[16px] max-w-3xl leading-[30px]"
      >
        Please allow me to thank all you art lovers who have taken the time to visit my website in order to 
        learn more about my handiwork. Even though I studied urban planning and architecture at degree level, 
        I started my artistic journey in 2016 with figurative sculpting, and since 2018, I've been learning the 
        technique of working with a pottery wheel and making ceramic handicrafts, while taking various courses. 
        I studied glazing, molding and everything a ceramist and sculptor should know, and finally I started the 
        kohan ceramic brand in a small art workshop.

        <br/>
        <br/>

        The purpose of establishing the Kohan Ceramic brand, in addition to making handmade ceramic dishes, is to 
        combine figurative sculptures with different ceramic shapes, creating wall hangings, each of which has a 
        special message and inspires a social issue that may have been with us from a long time ago and wrongly 
        institutionalised in us. Kohan translates to 'ancient' in Persian, which I've chosen to demonstrate how 
        these social issues have been ongoing since ancient times. These products are handmade in limited quantities 
        and sold to reputable art galleries, as well as through my <a href="https://www.instagram.com/kohan_ceramic/" rel="noreferrer" target="_blank">
            <span className="text-secondary hover:text-primary"> 
              instagram
            </span>
        </a>. In 2023, in the technical and professional test, I passed with flying colours and obtained the international 
        certificate of pottery with foot and electric powered wheels. Besides these, in addition to teaching pottery to 
        children in schools and in my workshop, I participated in various art group exhibitions in various galleries.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")