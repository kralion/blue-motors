import chaqueta from "../assets/chaqueta.png";
import casco from "../assets/casco.png";
import tubo from "../assets/tubo.png";
import CardMenu from "./CardMenu";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function MenuTab() {
  return (
    <>
      <TabGroup className="bg-white text-gray-500 flex ">
        <TabList className="flex flex-col border-r-[1px] border-gray-200 *:py-[15px] *:pl-[20px] *:pr-[100px]">
          <Tab
            className="data-[selected]:text-red-dark  w-72 data-[selected]:font-medium
                    focus:outline-none
                    "
            key={"uno"}
          >
            MAS VENDIDOS
          </Tab>
          <Tab
            className="data-[selected]:text-red-dark w-72 data-[selected]:font-medium
                    focus:outline-none
                    "
            key={"dos"}
          >
            FUERA DE STOCK
          </Tab>
          <div
            className="data-[selected]:text-red-dark w-64 ml-2 data-[selected]:font-medium
                    focus:outline-none hover:text-red-dark
                    "
            key={"tres"}
          >
            <a href="/tienda ">VER TODO</a>
          </div>
        </TabList>
        <TabPanels className="p-[20px] overflow-x-hidden">
          <TabPanel transition className="p-[15px]" key={""}>
            <div className="flex ">
              <div className="flex flex-col">
                <div className="my-[20px]">
                  <p className="font-medium mb-[10px]">FEATURE PRODUCTS</p>
                  <div className="h-[2px] w-[20%] rounded-xl bg-red-dark"></div>
                </div>
                <CardMenu
                  details="Camp Kids Boots"
                  price="580.00"
                  image={tubo}
                  stars={3}
                />
                <CardMenu
                  details="Box Plain Mat"
                  price="154.00"
                  image={casco}
                  stars={4}
                />
                <CardMenu
                  details="Abdes Texxtile Jacket"
                  price="402.00"
                  image={chaqueta}
                  stars={5}
                />
              </div>
            </div>
          </TabPanel>

          <TabPanel key={""} className="p-[15px]">
            <div className="flex ">
              <div className="flex flex-col">
                <div className="my-[20px]">
                  <p className="font-medium mb-[10px]">PRODUCTS</p>
                  <div className="h-[2px] w-[20%] rounded-xl bg-red-dark"></div>
                </div>
                <CardMenu
                  details="Camp Kids Boots"
                  price="580.00"
                  image={tubo}
                  stars={3}
                />
                <CardMenu
                  details="Box Plain Mat"
                  price="154.00"
                  image={casco}
                  stars={4}
                />
                <CardMenu
                  details="Abdes Texxtile Jacket"
                  price="402.00"
                  image={chaqueta}
                  stars={5}
                />
              </div>

              <div>
                <div className="my-[20px]">
                  <p className="font-medium mb-[10px]">SALE OFF</p>
                  <div className="h-[2px] w-[20%] rounded-xl bg-red-dark"></div>
                </div>
                <CardMenu
                  details="Camp Kids Boots"
                  price="580.00"
                  image={tubo}
                  stars={3}
                />
                <CardMenu
                  details="Box Plain Mat"
                  price="154.00"
                  image={casco}
                  stars={4}
                />
                <CardMenu
                  details="Abdes Texxtile Jacket"
                  price="402.00"
                  image={chaqueta}
                  stars={5}
                />
              </div>
              <div>
                <div className="my-[20px]">
                  <p className="font-medium mb-[10px]">SALE TAGS</p>
                  <div className="h-[2px] w-[20%] rounded-xl bg-red-dark"></div>
                </div>
                <CardMenu
                  details="Camp Kids Boots"
                  price="580.00"
                  image={tubo}
                  stars={3}
                />
                <CardMenu
                  details="Box Plain Mat"
                  price="154.00"
                  image={casco}
                  stars={4}
                />
                <CardMenu
                  details="Abdes Texxtile Jacket"
                  price="402.00"
                  image={chaqueta}
                  stars={5}
                />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
