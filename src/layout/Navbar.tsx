'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);


const Navbar = () => {
  const navRef = useRef(null)

  useGSAP(()=>{
    gsap.from(navRef.current,{
      y:-20,
      duration: 1,
      opacity: 0,
    })
  })

  return (
    <nav className="absolute w-full top-0 z-50 bg-transparent" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="ml-2 text-2xl font-sans text-white">Logo</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 font-sans">
            <button className="px-4 py-3 text-white text-sm bg-white/10 rounded-md border-2 border-transparent hover:bg-white hover:text-black hover:border-black">
              Apartments
            </button>
            <button className="px-4 py-3 text-white text-sm bg-white/10 rounded-md border-2 border-transparent hover:bg-white hover:text-black hover:border-black">
              Villas
            </button>
            <button className="px-4 py-3 text-white text-sm bg-white/10 rounded-md border-2 border-transparent hover:bg-white hover:text-black hover:border-black">
              Rent
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center justify-between gap-x-6 font-sans">
            <div>
              <button className="px-4 py-3 gap-2 text-white text-sm bg-white/10 rounded-md flex items-center">
                EN
                <img src="/hero-section/icon-arrow.png"></img>
              </button>
            </div>
            <div className="flex gap-x-2">
              <button className="px-4 py-3 bg-white rounded-md">
                <img
                  src="/hero-section/icon-map.png"
                ></img>
              </button>
              <button className="px-4 py-3 bg-white/20 rounded-md items-center border border-white">
                <img src="/hero-section/icon-list.png"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
