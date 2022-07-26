import React from "react";
import cl from "./main.module.scss";
import mount from "../../img/mount.png";
import arrow from "../../img/arrow.svg";
import Image from "next/image";

const Main = () => {
  return (
    <main className={cl.main}>
      <div className={cl.main__titles}>
        <h1>Beautiful Places of England</h1>
        <h2>Plan your vacation on the most beatiful places of England</h2>
      </div>
      <div className={cl.slider}>
        <div className={cl.slider__content}>
          <span>Up next</span>
          <h2>Aerial View of Rock Cliffs</h2>
          <button>
            <Image src={arrow} alt="next slide" />
          </button>
        </div>
        <div className={cl.slider__imgConteiner}>
          <Image className={cl.slider__img} src={mount} alt="first slide" />
        </div>
      </div>
    </main>
  );
};

export default Main;
