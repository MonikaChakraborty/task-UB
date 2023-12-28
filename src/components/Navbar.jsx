import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const navContent = (
    <>
      <div className="md:hidden absolute w-full z-50 mt-10 h-[30] left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>

          <Link to="/slider1">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Slider 1
            </li>
          </Link>

          <Link to="/slider2">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Slider 2
            </li>
          </Link>
        </ul>
      </div>
      
    </>
  );
  return (

    <nav className="bg-gray-700">
      <div className="h-[10vh] flex justify-between z-50 text-white lg:py-5 px-10 py-4">
        <div className="flex flex-1 items-center">
          <span className="text-3xl font-bold">Logo</span>
        </div>

        <div className="md:flex lg:flex-1 items-center justify-end hidden">
          <div className="">
            <ul className="flex gap-8 mr-16 text-lg">
              <Link to="/" onClick={() => setClick(false)}>
                <li className="hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>

              <Link to="slider1" onClick={() => setClick(false)}>
                <li className="hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointer">
                  Slider 1
                </li>
              </Link>

              <Link to="slider2" onClick={() => setClick(false)}>
                <li className="hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Slider 2
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="">
        {click && navContent}
        </div>
       <button className="block sm:hidden transition md:mt-0 -mt-2" onClick={handleClick}>
        {click ? <ImCross /> : <GiHamburgerMenu></GiHamburgerMenu>}
       </button>
      </div>
    </nav>
  )
};

export default Navbar;
