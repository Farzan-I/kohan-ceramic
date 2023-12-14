import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    // <nav
    //   className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-navbar`} // max-w-7xl
    // >
    //   <div className="w-full flex justify-between items-center mx-auto">
    //     <Link 
    //       to="/" 
    //       className="flex items-center gap-2" 
    //       onClick={() => {
    //         setActive("");
    //         window.scrollTo(0, 0);
    //       }}
    //     >
    //       <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
    //       <p className="text-white-100 text-[14px] font-bold cursor-pointer"> Kohan Ceramic &nbsp; <span className="text-[#8c0623]">|</span> &nbsp; By SGL </p>
    //     </Link>
    
    //     <div className="flex flex-1 justify-end items-center">
    //       <img src={toggle ? close : menu} alt="menu" className="w-[21px] h-[21px] object-contain cursor-pointer bg-navbar" onClick={() => setToggle(!toggle)}/>
    //       <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
    //         <ul className="list-none flex justify-end items-start flex-col gap-4">
    //           {navLinks.map((link) => (
    //             <li
    //               key={link.id}
    //               className={`${
    //                 active === link.title
    //                 ? "text-secondary"
    //                 : "text-white-100"
    //               } hover:text-secondary font-poppins font-medium cursor-pointer text-[18px]`}
    //               onClick={() => {
    //                 setToggle(!toggle)
    //                 setActive(link.title)
    //               }}
    //             >
    //               <a href={`#${link.id}`}>{link.title}</a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-navbar`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-[#ffd7a7] text-[18px] font-bold cursor-pointer">
              Kohan Ceramic
            </p>
            <span className="text-sm">By Sogol Orumchi</span>
          </div>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-primary" : "text-[#ffd7a7]"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }font-poppins font-medium cursor-pointer text-[18px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar