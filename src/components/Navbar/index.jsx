/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { TbUserSquareRounded } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ path, label }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(path);

  return (
    <>
      <div className="w-3 h-[30%] relative hidden md:block">
        <div
          className={`${
            isActive ? "bg-base" : "bg-porange"
          } absolute z-0 w-full h-full`}
        ></div>
        <div className="absolute w-full h-full bg-porange rounded-br-3xl z-1"></div>
      </div>
      <li
        className={`md:px-4 md:py-2 h-full flex items-center ${
          isActive && "bg-base text-porange rounded-tl-2xl rounded-tr-2xl"
        }`}
      >
        <Link className="pb-2" to={path}>
          {label}
        </Link>
      </li>
      <div className="w-3 h-[30%] relative hidden md:block">
        <div
          className={`${
            isActive ? "bg-base" : "bg-porange"
          } absolute z-0 w-full h-full`}
        ></div>
        <div className="absolute w-full h-full bg-porange rounded-bl-3xl z-1"></div>
      </div>
    </>
  );
};

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="relative lg:hidden">
      <div
        className="relative flex flex-col items-center justify-center w-8 h-8 gap-1 cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`w-6 h-[3px] bg-base transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-[4px]" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-[3px] bg-base transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-[3px] bg-base transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-[10px]" : ""
          }`}
        ></div>
      </div>

      <div
        className={`fixed top-[56px] right-0 w-full h-full bg-base text-porange text-center font-asap font-semibold shadow-lg transition-transform duration-300 ease-in-out ${
          menuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="">
          <li className="py-3" onClick={handleClick}>
            <Link to="/beranda">Beranda</Link>
          </li>
          <li className="py-3" onClick={handleClick}>
            <Link to="/listing">Listing</Link>
          </li>
          <li className="py-3" onClick={handleClick}>
            <Link to="/kuesioner">Kuesioner</Link>
          </li>
          <li className="py-3" onClick={handleClick}>
            <Link
              to="/login"
              className="flex items-center gap-2 px-3 py-2 mx-auto text-base bg-red-500 w-fit rounded-xl"
            >
              <span>Logout</span>
              <FiLogOut />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [userPreferences, setUserPreferences] = useState({});

  const user = {
    name: "Falana Rofako Hakam",
    role: "pcl",
  };

  const handleUserClick = () => {
    setIsUserClicked(!isUserClicked);
  };

  useEffect(() => {
    setUserPreferences(user);
  }, []);

  return (
    <nav className="bg-porange font-asap px-[10%] sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between h-14 lg:flex-nowrap lg:mt-2">
        <div className="text-base lg:order-1 flex items-center gap-3 font-semibold text-[16px] lg:pb-2">
          <BsDatabaseAdd size={30} /> Entri Data
        </div>
        <ul className="items-end justify-between order-3 hidden w-full h-full text-base font-semibold lg:flex lg:w-auto lg:order-2">
          <MenuItem path="/beranda" label="Beranda" />
          <MenuItem path="/listing" label="Listing" />
          <MenuItem path="/kuesioner" label="Kuesioner" />
          {/* <MenuItem path="/user" label="User" /> */}
        </ul>
        <div className="relative items-center order-2 hidden gap-2 text-base md:order-3 lg:pb-2 lg:flex">
          <TbUserSquareRounded size={35} onClick={handleUserClick} />
          {isUserClicked && (
            <div className="absolute top-[40px] right-0 w-fit h-fit p-4 rounded-xl bg-base border-[3px] border-porange-30 z-10 text-porange text-center font-asap font-semibold shadow-lg flex flex-col gap-4 items-start">
              <p className="text-[16px] font-semibold whitespace-nowrap leading-none">
                {userPreferences.name}
              </p>
              <p className="text-[14px] font-[500] italic whitespace-nowrap leading-none">
                {userPreferences.role == "admin" ? "Admin" : "Petugas Pencacah Lapangan (PCL)"}
              </p>
              <Link
                to="/login"
                className="px-2 py-1 w-fit bg-red-500 text-base text-[14px] font-[500] rounded-xl flex items-center gap-2"
              >
                Logout
                <FiLogOut />
              </Link>
            </div>
          )}
        </div>
        <ToggleMenu />
      </div>
    </nav>
  );
};

export default Navbar;
