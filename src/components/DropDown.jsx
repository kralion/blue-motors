import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuToggle = ({ toggle, isOpen }) => {
  const line1Variants = {
    closed: { d: "M4 6 L20 6", rotate: 0, y: 0 },
    open: { d: "M4 6 L20 18", rotate: 45, y: 6 },
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const line3Variants = {
    closed: { d: "M4 18 L20 18", rotate: 0, y: 0 },
    open: { d: "M4 18 L20 6", rotate: -45, y: -6 },
  };

  return (
    <div
      onClick={toggle}
      style={{ cursor: "pointer", width: "24px", height: "24px" }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
      >
        <motion.line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          stroke="white"
          strokeWidth="2"
          variants={line1Variants}
          animate={isOpen ? "open" : "closed"}
          initial={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="white"
          strokeWidth="2"
          variants={line2Variants}
          animate={isOpen ? "open" : "closed"}
          initial={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.line
          x1="4"
          y1="18"
          x2="20"
          y2="18"
          stroke="white"
          strokeWidth="2"
          variants={line3Variants}
          animate={isOpen ? "open" : "closed"}
          initial={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </motion.svg>
    </div>
  );
};

const MenuItem = ({ label, children, route }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <div className="box-border px-5 flex items-center relative h-[60px] border-b-gray-600 border-b-[1px] hover:text-primary hover:bg-gray-900 transition ease-in-out delay-100">
        <a href={route}>{label}</a>
        {children && (
          <span style={{ marginLeft: "auto" }}>
            <svg
              onClick={toggleSubMenu}
              style={{ cursor: "pointer" }}
              className="fill-white rotate-45 hover:rotate-[-315deg] hover:fill-primary transition  ease-out delay-300"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-circle-down"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M0,7A1,1,0,0,1,1,6H18V2.639a.792.792,0,0,1,1.35-.552l4.418,4.361a.773.773,0,0,1,0,1.1L19.35,11.913A.792.792,0,0,1,18,11.361V8H1A1,1,0,0,1,0,7Zm23,9H6V12.639a.792.792,0,0,0-1.35-.552L.232,16.448a.773.773,0,0,0,0,1.1L4.65,21.913A.792.792,0,0,0,6,21.361V18H23a1,1,0,0,0,0-2Z" />
            </svg>
          </span>
        )}
      </div>
      <AnimatePresence>
        {isSubMenuOpen && children && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div>
              {Array.isArray(children)
                ? children.map((child, index) => (
                    <React.Fragment key={index}>
                      <div className="box-border px-5 w-full h-[60px] flex items-center bg-gray-700 border-b-gray-600 border-b-[.5px] hover:text-primary transition ease-in-out delay-150">
                        {child}
                      </div>
                    </React.Fragment>
                  ))
                : children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropdownMenu = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-[100%] left-0 absolute bg-bg top-32"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto" },
            collapsed: { height: 0 },
          }}
          transition={{ duration: 0.3 }}
          style={{
            overflow: "hidden",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        >
          <MenuItem label="Home" route={"./"}>
            {"Home 1"}
            {"Home 2"}
            {"Home LookBook 1"}
            {"Home LookBook 2"}
            {"Home Parallax"}
          </MenuItem>
          <MenuItem label="Shop" route={"./tienda"}>
            {"Prouct Listining"}
            {"Woo Pages"}
          </MenuItem>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ padding: "20px" }}>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <DropdownMenu isOpen={isOpen} />
    </div>
  );
};

export default App;
