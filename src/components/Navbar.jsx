import { useState } from "react";
import logo from "../assets/logo-frame.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center tracking-tight text-white w-full gap-x-12 py-[17px] px-4 lg:px-14">
      <section className="xl:w-[414px]">
        <img src={logo} alt="logo" />
      </section>

      <section
        className={`bg-gradient-to-r from-[#1C003A] backdrop-blur-md to-[#213C524D] xl:relative px-4 absolute w-full h-screen z-[9999999] xl:gap-5 xl:bg-transparent xl:from-transparent xl:to-transparent xl:w-fit xl:h-fit flex flex-col xl:flex-row justify-center gap-16 items-center ${
          menuOpen ? "left-0 top-0" : "-left-full xl:left-0"
        }`}
      >
        <div className="flex flex-col xl:flex-row items-center text-center md:gap-4 gap-6 text-lg md:text-base mb-6 xl:mb-0">
          <a
            href="https://t.me/degen_b0t"
            className="hover:border-b-[0.05px] border-white transition-all w-fit"
          >
            TELEGRAM COMMUNITY
          </a>
          <a
            href="https://x.com/degenb0t"
            className="hover:border-b-[0.05px] border-white transition-all w-fit"
          >
            TWITTER
          </a>
          <div className="flex flex-col gap-3 text-sm mt-8 xl:hidden">
            <a
              className="min-[2000px]:text-xl font-semibold bg-white hover:bg-white/80 text-[#1D013B] hover:bg-white hover:border-black px-[12.5px] py-[5.8px] rounded-[50px] w-48 md:w-[200px] min-[2000px]:p-5 min-[2000px]:w-[400px] tracking-[-2%] h-8 flex justify-center items-center"
              href="/"
            >
              BUY $DBOT ON UNISWAP
            </a>
            <a
              className="min-[2000px]:text-xl font-semibold bg-white hover:bg-white/80 text-[#1D013B] hover:bg-white hover:border-black px-[12.5px] py-[5.8px] rounded-[50px] w-48 md:w-[200px] min-[2000px]:p-5 min-[2000px]:w-[400px] tracking-[-2%] h-8 flex justify-center items-center"
              href="/"
            >
              BUY $DBOT ON DEGEN
            </a>
          </div>
        </div>
      </section>

      <div className="gap-2 text-sm hidden xl:flex">
        <a
          className="min-[2000px]:text-xl font-semibold bg-white hover:bg-white/80 text-[#1D013B] hover:bg-white hover:border-black px-[12.5px] py-[5.8px] rounded-[50px] w-44 md:w-[200px] min-[2000px]:p-5 min-[2000px]:w-[400px] tracking-[-2%] h-8 flex justify-center items-center"
          href="/"
        >
          BUY $DBOT ON UNISWAP
        </a>
        <a
          className="min-[2000px]:text-xl font-semibold bg-white hover:bg-white/80 text-[#1D013B] hover:bg-white hover:border-black px-[12.5px] py-[5.8px] rounded-[50px] w-44 md:w-[200px] min-[2000px]:p-5 min-[2000px]:w-[400px] tracking-[-2%] h-8 flex justify-center items-center"
          href="/"
        >
          BUY $DBOT ON DEGEN
        </a>
      </div>

      {/* hamburger / Menu Icon */}
      <div
        className="z-[99999999] xl:hidden flex flex-col gap-1 items-center cursor-pointer "
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <span
          className={`w-[1.6rem] h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] ` : ``
          }`}
        ></span>
        <span
          className={`w-[1.6rem] h-[3px] bg-white block rounded-lg transition-all duration-150 ${
            menuOpen ? `hidden` : ``
          }`}
        ></span>
        <span
          className={`w-[1.6rem] h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[495deg] -translate-y-1.5 ` : ``
          }`}
        ></span>
      </div>
    </nav>
  );
}
