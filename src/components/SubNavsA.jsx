import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React, { useEffect, useState } from 'react';
import DropDown from "./DropDown";
import MenuTab from "./MenuTab";
import SearchBar from "./common/SearchBar";
import 'animate.css';


const navItems = [
  { name: "Home", href: "/", hasDropdown: true },
  { name: "Mega Menu", href: "/mega-menu", hasDropdown: true },
  { name: "Tienda", href: "/productos", hasDropdown: true },
];

export default function SubNavs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://bluemotorsec.com/wp-json/wp/v2/motos?_fields=acf&acf_format=standard");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Agrupar productos por marca
  const productsByBrand = products.reduce((acc, item) => {
    const brand = item.acf.marca.name;
    if (!acc[brand]) {
      acc[brand] = [];
    }
    acc[brand].push(item);
    return acc;
  }, {});

  return (
    <>
      <div className="bg-bg ">
        <div className="bg-[#13151a] hidden md:flex ">
          <div className="container mx-auto gap-1 flex py-5 text-[#a5a6a5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 h-5 w-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-semibold">
              Soporte Personalizado 24/7
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 h-5 w-5 ml-4 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-semibold">
              Telefono: +51 999 999 999
            </span>
          </div>
        </div>
        <div className=" text-white p-4 ">
          <div className="container mx-auto flex justify-between items-center">
            <button className="md:hidden text-white ">
              <DropDown className="" client:visible />
            </button>

            <a href="/">
              <img src="/logo.jpeg" alt="Logo" className="w-36 h-24" />
            </a>

            <div className="hidden md:flex space-x-10">
              <Popover className=" ">
                <PopoverButton className='focus:outline-none'>
                  <a className="hover:text-primary transition duration-300 font-bold uppercase text-sm flex items-center gap-2">
                    HOME
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className=" backdrop-blur-md bg-white/30 absolute -translate-x-1/2 left-[50%] z-10 mt-5 flex  max-w-max  px-4  transition data-[closed]:translate-y-[15%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="overflow-hidden text-gray-500 w-[1200px] px-[50px] m-0 mt-4 z-10 flex flex-wrap gap-4 py-4 bg-lighht-bg h-[330px]">
                    <div className="flex-1 ">
                      <p className="font-bold mb-[20px]">HOMEPAGE DEMOS</p>
                      <div className="h-[2px] w-[20%] rounded-xl bg-primary"></div>
                      <div className="flex justify-between flex-col space-y-3 mt-[20px] pl-[9px] gap-y-[20px]">
                        <a
                          href="#"
                          className=" relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0   after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 1
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 2
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 3
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 4
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 mr-5 border-l-[0.5px] border-gray-300 pl-[20px] h-fit">
                      <p className="font-bold mb-[20px]">HOMEPAGE DEMOS</p>
                      <div className="h-[2px] w-[20%] rounded-xl bg-primary"></div>
                      <div className="flex justify-between flex-col space-y-3 mt-[20px] pl-[9px] gap-y-[20px]">
                        <a
                          href="#"
                          className=" relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0   after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 5
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 6
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]
                        "
                        >
                          Home 7
                        </a>
                        <a
                          href="#"
                          className=" relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
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
                        className="h-[110%] w-[110%]"
                      />
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
              <Popover className=" ">
                <PopoverButton className=" focus:outline-none  ">
                  <a className="animate_animated animate__fadeInLeft hover:text-primary transition duration-300 font-bold uppercase text-sm flex items-center gap-2">
                    Tienda
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className=" absolute  left-[50%] z-10 mt-9 flex  max-w-max -translate-x-1/2  transition data-[closed]:translate-y-[15%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="
                  backdrop-blur-md bg-white/30 flex widthScroll border-gray-200 *:py-[15px] *:pl-[20px] "   >
                    {Object.keys(productsByBrand).map((brand) => (
                      <div className="flex  justify-start flex-col space-y-3 mt-[20px] pl-[9px] gap-y-[20px]
                      " key={brand} style={{ flex: 1, margin: '0 10px' }}>
                        <h2>{brand}</h2>
                        {productsByBrand[brand].map((item, index) => (
                          <a href="#" className=" w-[100px] relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]" key={index}>
                              {item.acf.modelo}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>{" "}
        <hr className="border-gray-800 w-full" />
      </div>
    </>
  );
}
