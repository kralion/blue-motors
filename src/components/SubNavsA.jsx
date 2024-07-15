import React from "react";
import ImagMenu from "./../assets/imagmenu.png";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import MenuTab from "./MenuTab";
import DropDown from "./DropDown";
import SearchBar from "./common/SearchBar";
const navItems = [
  { name: "Home", href: "/", hasDropdown: true },
  { name: "Mega Menu", href: "/mega-menu", hasDropdown: true },
  { name: "Tienda", href: "/productos", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio", hasDropdown: true },
  { name: "Pages", href: "/pages", hasDropdown: true },
];

export default function SubNavs() {
  return (
    <>
      <header class="bg-[#00000070] relative z-50 ">
        <div class="bg-[#13151a] hidden md:flex">
          <div class="container mx-auto gap-1 flex py-5 text-[#a5a6a5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 h-5 w-5 text-red-dark"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-sm font-semibold">
              Soporte Personalizado 24/7
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 h-5 w-5 ml-4 text-red-dark"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-sm font-semibold">Telefono: +51 999 999 999</span>
          </div>
        </div>

        <nav class=" text-white p-4">
          <div class="container mx-auto flex justify-between items-center">
            <button class="md:hidden text-white ">
              <DropDown class="" client:visible />
            </button>

            <a href="/" class="flex justify-center md:justify-start">
              <img src="/logo.svg" alt="Logo" class="h-16" />
            </a>

            <div class="hidden md:flex space-x-10">
              <Popover className=" ">
                <PopoverButton>
                  <a class="hover:text-red-dark transition duration-300 font-bold uppercase text-sm flex items-center gap-2">
                    HOME
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6 h-4 w-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute  -translate-x-1/2 left-[50%] z-10 mt-5 flex w-screen max-w-max  px-4 transition data-[closed]:translate-y-[15%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="overflow-hidden text-gray-500 w-[1300px] px-[50px] m-0 z-10 flex flex-wrap gap-4 py-4 bg-lighht-bg bg-white h-[330px]">
                    <div className="flex-1 mr-5">
                      <p className="font-bold mb-[20px]">HOMEPAGE DEMOS</p>
                      <div className="h-[2px] w-[20%] rounded-xl bg-red-dark"></div>
                      <div className="flex justify-between flex-col space-y-3 mt-[20px] pl-[9px] gap-y-[20px]">
                        <a
                          href="#"
                          className=" relative hover:text-red-dark
                            after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0   after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 1
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-red-dark
                            after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 2
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-red-dark
                            after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 3
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-red-dark
                            after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 4
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 mr-5 border-l-[0.5px] border-gray-300 pl-[20px] h-fit">
                      <p className="font-bold mb-[20px]">HOMEPAGE DEMOS</p>
                      <div className="h-[2px] w-[20%] rounded-xl bg-red-dark"></div>
                      <div className="flex justify-between flex-col space-y-3 mt-[20px] pl-[9px] gap-y-[20px]">
                        <a
                          href="#"
                          className=" relative hover:text-red-dark
                            after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0   after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 5
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-red-dark
                            after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 6
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-red-dark
                            after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 7
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-red-dark
                            after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home Parallax
                        </a>
                      </div>
                    </div>

                    <div className="overflow-hidden relative top-[-50%]  ">
                      <img
                        src={
                          "https://img.freepik.com/premium-psd/bike-motorcycle-sale-promotion-social-media-post-square-banner_252779-770.jpg?uid=R43184783&ga=GA1.1.909938681.1720628665&semt=sph"
                        }
                        alt="Logo"
                        class="h-[110%] w-[110%]"
                      />
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>

              <Popover className=" relative ">
                <PopoverButton className=" focus:outline-none  ">
                  <a class="hover:text-red-dark transition duration-300 font-bold uppercase text-sm flex items-center gap-2">
                    Tienda
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6 h-4 w-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-[15%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuTab />
                </PopoverPanel>
              </Popover>

              <Popover className=" relative ">
                <PopoverButton className="focus:outline-none">
                  <a class="hover:text-red-dark transition duration-300 font-bold uppercase text-sm flex items-center gap-2">
                    PORTFOLIO
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6 h-4 w-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className=" absolute left-1/2 z-10  flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-[15%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <Popover className=" bg-white pt-4  *:w-[250px] flex justify-between flex-col space-y-3 mt-[20px]  *:px-5 *:py-1.5 *:text-gray-500 ">
                    <PopoverButton className=" focus:outline-none border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                      <a
                        href="#"
                        className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                      >
                        <div>Blog</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6 h-4 w-4 "
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </PopoverButton>
                    <PopoverPanel
                      transition
                      className=" mt-[20px] pb-0 *:pb-0  *:pt-6 *:text-gray-500 bg-white flex-col absolute  top-[8px] right-[-50%] z-10  flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-[15%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                        <a
                          href="#"
                          className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                        >
                          <div>Contact Us</div>
                        </a>
                      </div>
                      <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                        <a
                          href="#"
                          className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                        >
                          <div>QAs</div>
                        </a>
                      </div>
                      <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                        <a
                          href="#"
                          className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                        >
                          <div>404 Error</div>
                        </a>
                      </div>
                    </PopoverPanel>

                    <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                      <a
                        href="#"
                        className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                      >
                        <div>Contact Us</div>
                      </a>
                    </div>
                    <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                      <a
                        href="#"
                        className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                      >
                        <div>QAs</div>
                      </a>
                    </div>
                    <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                      <a
                        href="#"
                        className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                      >
                        <div>404 Error</div>
                      </a>
                    </div>
                  </Popover>
                </PopoverPanel>
              </Popover>
              <Popover className=" relative ">
                <PopoverButton className="focus:outline-none">
                  <a class="hover:text-red-dark transition duration-300 font-bold uppercase text-sm flex items-center gap-2">
                    PAGES
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6 h-4 w-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className=" absolute left-1/2 z-10  flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-[15%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <Popover className=" bg-white pt-4  *:w-[250px] flex justify-between flex-col space-y-3 mt-[20px]  *:px-5 *:py-1.5 *:text-gray-500 ">
                    <PopoverButton className=" focus:outline-none border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                      <a
                        href="#"
                        className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                      >
                        <div>Blog</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6 h-4 w-4 "
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </PopoverButton>
                    <PopoverPanel
                      transition
                      className=" mt-[20px] pb-0 *:pb-0  *:pt-6 *:text-gray-500 bg-white flex-col absolute  top-[8px] right-[-50%] z-10  flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-[15%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                        <a
                          href="#"
                          className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                        >
                          <div>Contact Us</div>
                        </a>
                      </div>
                      <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                        <a
                          href="#"
                          className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                        >
                          <div>QAs</div>
                        </a>
                      </div>
                      <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                        <a
                          href="#"
                          className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                        >
                          <div>404 Error</div>
                        </a>
                      </div>
                    </PopoverPanel>

                    <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                      <a
                        href="#"
                        className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                      >
                        <div>Contact Us</div>
                      </a>
                    </div>
                    <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                      <a
                        href="#"
                        className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                      >
                        <div>QAs</div>
                      </a>
                    </div>
                    <div className="border-b-[0.5px] border-gray-300 flex justify-between items-start  text-sm *:hover:text-red-dark   ">
                      <a
                        href="#"
                        className="pb-2  relative flex justify-between w-full
                                    after:content-[''] after:bg-red-dark after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                                    after:hover:h-[100%]
                                "
                      >
                        <div>404 Error</div>
                      </a>
                    </div>
                  </Popover>
                </PopoverPanel>
              </Popover>
            </div>

            <div class="flex items-center gap-4">
              <SearchBar />
              <button class="hover:text-red-dark hidden md:flex transition duration-300 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span class="absolute -top-2 -right-2 bg-red-dark text-xs text-black rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
              <button class="hover:text-red-dark transition duration-300 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span class="absolute -top-2 -right-2 bg-red-dark text-xs text-black rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
