import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[230px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
        className="w-full red-yellow-gradient p-[1px] rounded-[20px]"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-card rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-50 h-50 object-contain" />
          {/* <h3 className="text-white-100 text-[20px] font-bold text-center justify">
            {title}
          </h3> */}
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

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

       <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="font-left mt-10 text-white text-[19px] max-w-3xl leading-[30px]"
      >
        That's right, you guessed it. This site belongs to someone who has loved playing with clay as a kid 
        and still does! But her family did not allow her to do this because they thought she would get sick 
        and dirty, which caused her to unintentionally stay away from this interest. She didn't know exactly 
        what she enjoyed until she was 32 years old. But look at what's happened. It seems that this woman 
        has been guided to the right path for several years.

        <br/>
        <br/>

        Please allow me to thank all you art lovers who have taken the time to visit my website in order to 
        learn more about my handiwork. Even though I studied urban planning and architecture at degree level, 
        I started my artistic journey in 2016 with figurative sculpting, and since 2018, I've been learning the 
        technique of working with a pottery wheel and making ceramic handicrafts, while taking various courses. 
        I studied glazing, molding and everything a ceramist and sculptor should know, and finally I started the 
        kohan ceramic brand in a small art workshop.

        <br/>
        <br/>

        In fact, the purpose of establishing the Kohan Ceramic brand, in addition to making handmade ceramic dishes, 
        is to combine figurative sculptures with different ceramic shapes, creating wall hangings, each of which has 
        a special message and inspires a social issue that may have been with us from a long time ago and wrongly 
        institutionalised in us. Kohan translates to 'ancient' in Persian, which I've chosen to demonstrate how these 
        social issues have been ongoing since ancient times. These products are handmade in limited quantities and 
        sold to reputable art galleries, as well as through my <a href="https://www.instagram.com/kohan_ceramic/" rel="noreferrer" target="_blank">
            <span className="text-secondary hover:text-primary"> 
            instagram
            </span>
          </a>. In 2023, in the technical and professional test, 
        I passed with flying colours and obtained the international certificate of pottery with foot and electric powered 
        wheels. And besides these things, in addition to teaching pottery to children in schools and in my workshop, I 
        participated in various art group exhibitions, which you will find their pictures below.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")