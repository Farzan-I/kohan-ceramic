import { styles } from '../styles';
import { instagram } from '../assets';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <foot>
      <div className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 justify-end bg-[#38454b] gap-3`}>
        <div className={`${styles.paddingX} w-full flex `}>
          <p className="justify-font text-white-100 text-[10px]">
            <a href="https://skfb.ly/ouMQq" rel="noreferrer" target="_blank">
              <span className="text-secondary hover:text-primary">Vase</span>
            </a> by 
            <a href="https://sketchfab.com/vinibudy" rel="noreferrer" target="_blank">
              <span className="text-secondary hover:text-primary"> Vinícius Souza </span>
            </a> is licensed under 
            <a href="http://creativecommons.org/licenses/by/4.0/" rel="noreferrer" target="_blank">
              <span className="text-secondary hover:text-primary"> Creative Commons Attribution</span>
            </a>. All product & company names are trademarks™️ or registered®️ trademarks of their respective holders.
            Use of them does not imply any affiliation with or endorsement by them. Navbar menu icons by Icons8.
          </p>
        </div>
        <div className={`${styles.paddingX} flex items-center gap-1`}>
          <Link to="https://www.instagram.com/kohan_ceramic/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" width={47} height={47}/>
          </Link>
        </div>
      </div>
    </foot>
  )
}

export default Footer