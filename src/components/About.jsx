import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
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
          className="bg-card rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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
        className="font-right mt-10 text-white-100 text-[21px] max-w-3xl leading-[30px]"
      >

        بله درست حدس زدید، این سایت متعلق به کسی است که از کودکی عاشق بازی با خاک بوده و کماکان هست،اما در آن زمان خانواده اش اجازه این کار را به او نمی دادند و ناخواسته او با بزرگتر شدنش از علاقه خود فاصله گرفت و تا ۳۲ سالگی دقیقا نمیدانست از چه کاری ‌واقعا لذت می برد..
        اما حالا ببین چی شده،
        گویا این دختر چند سالی است که به راه درست هدایت شده

        <br/>
        <br/>

        اول از همه تشکر می کنم از همه هنردوستانی که لطف دارند و وقت خود را صرف دیدن سایت من می کنند تا با دستسازه هایم بیشتر آشنا شوند.
        باید بگویم که تحصیلات دانشگاهی من شهرسازی و معماری بوده، اما فعالیت هنری خودم را از سال ۱۳۹۶ با رشته مجسمه سازی فیگوراتیو شروع کردم و از سال ۱۳۹۸ تا به امروز به یادگیری تکنیک کار با چرخ سفال و ساخت صنایع دستی سرامیکی و گذراندن دوره های مختلف لعاب، قالبگیری و هر آنچه که یک سرامیست و مجسمه ساز باید بداند پرداختم و در نهایت برند کهن سرامیک را در کارگاه هنری کوچکی راه اندازی کردم

        
        <br/>
        <br/>

        در واقع هدف از تاسیس این برند علاوه بر ساخت ظروف سرامیکی دست ساز، تلفیق مجسمه های فیگوراتیو با اشکال مختلف سرامیکی به ویژه دیوارکوب است که هر کدام پیامی خاص دارند و الهام بخش یک موضوع اجتماعی هستند که ممکن است از دور دستها با ما بوده اند و به اشتباه در ما نهادینه شده اند.این محصولات به طور محدود ساخته شده و به گالری های هنری معتبر فروخته می شوند.
        در سال ۱۴۰۲ در آزمون فنی و حرفه ای موفق به اخذ گواهینامه بین المللی سفال با چرخ پایی و برقی شدم.
        ‎و در کنار این موارد علاوه بر آموزش سفالگری به کودکان در مدارس و کارگاه خود، در نمایشگاه های گروهی هنری مختلفی شرکت کردم که در ادامه تصاویری از آن تجربیات را خواهید دید

        {/* Here I helped create the 
        <a href="https://www.culturalsignatures.com/" rel="noreferrer" target="_blank">
          <span className="text-secondary"> company&apos;s website</span>
        </a> and enjoyed it so much that I spent my spare time studying HTML, CSS, JavaScript, and Ruby. After the Covid-19 pandemic, I joined a 
        <a href="https://www.makers.tech/" rel="noreferrer" target="_blank">
          <span className="text-secondary"> leading coding bootcamp</span>
          </a> to expand my knowledge and actualise my dream of becoming a software engineer. 
        I have experience of working in full agile teams and have collaborated on various projects using a wide range of technologies. Most can be found below. 

        I&apos;ve been freelancing ever since and eager to start my first professional role as an engineer with a forward thinking company! */}
       </motion.p>

       <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="font-left mt-10 text-white-100 text-[19px] max-w-3xl leading-[30px]"
      >
        Yes, you guessed it right, this site belongs to someone who has loved playing with soil(dirt!) since childhood and still does, but at that time her family did not allow her to do this and she unintentionally distanced herself from his interest as she grew older and until At the age of 32, she didn't know exactly what she really enjoyed doing..
        But now look what happened.
        It seems that this girl has been guided to the right path for several years.

        <br/>
        <br/>

        First of all, I would like to thank all the art lovers who are kind and spend their time visiting my site to learn more about my handiwork.
        I must say that my university studies were urban planning and architecture, but I started my artistic activity in 2016 with the field of figurative sculpture, and from 2018 until now, I have been learning the technique of working with a pottery wheel and making ceramic handicrafts and taking various courses. I studied glazing, molding and everything a ceramist and sculptor should know, and finally I started the kohan ceramic brand in a small art workshop

        <br/>
        <br/>

        In fact, the purpose of establishing this brand, in addition to making handmade ceramic dishes, is to combine figurative sculptures with different ceramic shapes, especially wall hangings, each of which has a special message and inspires a social issue that may have been with us from a long time ago. and wrongly institutionalized in us. These products are made in limited quantities and sold to reputable art galleries.
        In 2023, in the technical and professional test, I succeeded in obtaining the international certificate of pottery with foot and electric wheel.
        And besides these things, in addition to teaching pottery to children in schools and in my workshop, I participated in various art group exhibitions, which you will see pictures of those experiences below
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")