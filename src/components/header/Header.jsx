import React, { useEffect, useState } from "react";
import cl from "./header.module.scss";
import Image from "next/image";
import Loupe from "../../img/loupe.svg";
import Burger from "../burger/Burger";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = () => {
  const { height, width } = useWindowDimensions();
  const [showMobilNav, setShowMobilNav] = useState(false);
  const [mobilNav, setMobilNav] = useState(false);
  useEffect(() => {
    width > 576 ? setMobilNav(false) : setMobilNav(true);
  }, [width]);

  return (
    <header className={cl.header}>
      {mobilNav === false ? (
        <div className={cl.header__inner}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <h4>Camping.</h4>
          <ul>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">
                <Image src={Loupe} alt="Loupe" />
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <React.Fragment>
          <div
            className={`${cl.header__inner} ${
              showMobilNav === true ? cl.show : null
            }`}
          >
            <h4>Camping.</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">
                  <Image src={Loupe} alt="Loupe" />
                </a>
              </li>
            </ul>
          </div>
          <Burger
            showMobilNav={showMobilNav}
            setShowMobilNav={setShowMobilNav}
          />
        </React.Fragment>
      )}
    </header>
  );
};

export default Header;
