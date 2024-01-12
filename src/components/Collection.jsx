import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { instagram } from "../assets";

import { SectionWrapper } from "../hoc";
import { collections } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CollectionCard = ({ index, name, description, image, source_code_link }) => {
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
                src={instagram}
                alt="instagram"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white-100 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white-100 text-[14px]">{description}</p>
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
          className="font-left mt-9 text-white text-[16px] max-w-3xl leading-[30px]"
        >
          Emphasising the advantages of handmade pieces over mass produced items brought about my collection. 
          As much as technology advances, it still does not compare to the level of detail that the naked eye and the human hand can portray.
          I demonstrate these with the hand drawn and sculpted pieces you see below in the highlighted and extensive range pieces that ensure quality is never jeapordised.
          Each of the six pieces below have a link to their instagram post, feel free to click on the instagram logo to check them out!
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