import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "../assets/logo_srivarshini301379814.png";

const nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex fixed top-0 w-full items-center justify-between lg:flex-row bg-blue-600">
        <img
          className="object-cover p-2 h-20 w-25 flex item-center"
          src={Logo}
          alt="Logo"
        />
        <div className="space-x-2">
          <div className="ssm:hidden lg:block space-x-4">
            <a href="/" className="rounded-full px-5 py-2 text-xl">
              HOME
            </a>
            <a href="/about" className="rounded-full px-5 py-2 text-xl">
              ABOUT
            </a>
            <a href="/project" className="rounded-full px-5 py-2 text-xl">
              PROJECTS
            </a>
            <a href="/services" className="rounded-full px-5 py-2 text-xl">
              SERVICES
            </a>
            <a href="/contact" className="rounded-full px-5 py-2 text-xl">
              CONTACT ME
            </a>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={25}
                className=" cursor-pointer"
              />
            ) : (
              <HiMenuAlt1
                onClick={openMenu}
                size={25}
                className=" cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <div>
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-xl mb-2 cursor-pointer">HOME</li>
              <li className="text-xl mb-2 cursor-pointer">ABOUT</li>
              <li className="text-xl mb-2 cursor-pointer">PROJECTS</li>
              <li className="text-xl mb-2 cursor-pointer">SERVICES</li>
              <li className="text-xl mb-2 cursor-pointer">CONTACT</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default nav;
