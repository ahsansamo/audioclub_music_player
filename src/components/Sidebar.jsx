import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { logo } from "../assets";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start 
      items-center my-8 text-sm 
      font-medium text-gray-400 
      hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}

    <div className="flex flex-col">
      <h3 className="text-xl text-white text-extrabold">Made By Ahsan</h3>
      </div>
      
  </div>
);




const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
        <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 ml-4">AudioClub</h2>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 text-white mr-2"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 text-white mr-2"
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl
         from-white/10 to-[#483d8b] backdrop-blur-lg
          z-10 p-6 md:hideen smooth-transition ${
            mobileMenuOpen ? "left-0" : "-left-full"
          }`}
      >
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
        <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 ml-4">AudioClub</h2>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
