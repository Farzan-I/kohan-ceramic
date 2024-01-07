import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";

import { SectionWrapper } from "../hoc";
import { collections } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CollectionCard = ({ index, name, description, tags, image, otherImage, source_code_link, source_code_link_other}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="green-gradient p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              onClick={() => window.open (source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div 
              onClick={() => window.open (source_code_link_other, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={otherImage}
                alt="other_link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white-100 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white-100 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Collection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Collection</h2>
        <p className={`${styles.sectionSubText}`}>My work</p>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-9 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Taking inspiration from the (whatever whatever), my collection features (so and so) 
  
          {/* <a href="https://github.com/Farzan-I" rel="noreferrer" target="_blank">
              <span className="text-secondary"> GitHub</span>
          </a>  */}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {collections.map((collection, index) => (
          <CollectionCard 
            key={`collection-${index}`}
            index={index}
            {...collection}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Collection, "collection");