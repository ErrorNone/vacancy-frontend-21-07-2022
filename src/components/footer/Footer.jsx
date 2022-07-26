import React from "react";
import Selection from "../selection/Selection";
import cl from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={cl.footer__container}>
        <div className={cl.footer__inner}>
          <h4>Book your vacation</h4>
          <div className={cl.footer__search}>
            <Selection />
            <button className={cl.footer__button}>Search</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
