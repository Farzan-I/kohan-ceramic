import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { VaseCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";     

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_1pg0io7',
      'template_hezrcjn',
      {
        from_name: form.name,
        to_name: 'Sogol',
        from_email: form.email,
        to_email: 'sogol.orumchi1366@gmail.com',
        message: form.message,
      },
      'QzGdmrQOfAv0CJ7ZX'
      )
      .then(() => {
        setLoading(false);                           
        alert('Thanks for getting in touch! I will get back to you as soon as possible. See my latest collection on Instagram ~ @kohan_ceramic');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('Something went wrong! Please try again.')
      })
  }
  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-quinary p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <p className={styles.sectionSubText}>Get in touch</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">
              Your name:
            </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Surname if possible"
              className="bg-[#a68064] py-4 px-6 placeholder:text-black text-white-100 rounded-lg outlined-none border-none font-medium hover:placeholder:text-white-100"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">
              Your Email:
            </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Check your spelling!"
              className="bg-[#a68064] py-4 px-6 placeholder:text-black text-white-100 rounded-lg outlined-none border-none font-medium hover:placeholder:text-white-100"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">
              Your message:
            </span>
            <textarea 
              row="7" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="............."
              className="bg-[#a68064] py-4 px-6 placeholder:text-black text-white-100 rounded-lg outlined-none border-none font-medium hover:placeholder:text-white-100"
            />
          </label>

          <button
            type="submit"
            className="bg-[#a68064] py-3 px-8 outline-none w-fit text-black font-bold shadow-md shadow-secondary rounded-xl hover:text-white-100 hover:shadow-white"
          >
            { loading ? 'Sending...' : 'Send' }
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <VaseCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")