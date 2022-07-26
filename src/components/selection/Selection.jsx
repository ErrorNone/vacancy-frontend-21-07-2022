import Image from "next/image";
import React, { useState } from "react";
import cl from "./selection.module.scss";
import arrowBottom from "../../img/selection-icons/arrow-bottom.svg";
import accommodation from "../../img/selection-icons/accommodation.svg";
import calendar from "../../img/selection-icons/calendar.svg";
import guest from "../../img/selection-icons/guest.svg";
import Dropdown from "../dropdown/Dropdown";

const Selection = () => {
  const books = [
    { id: 1, title: "6730 Luna Land North Rhiannonmouth" },
    { id: 2, title: "5472 A Smarter Way to Learn JavaScript" },
    { id: 3, title: "3492 Learn JavaScript VISUALLY" },
    { id: 4, title: "5678 JavaScript: The Definitive Guide" },
  ];
  const guests = [
    { id: 1, title: "4 adults" },
    { id: 2, title: "3 adults" },
    { id: 3, title: "2 adults" },
  ];
  const [bookTitle, setBookTitle] = useState(
    "6730 Luna Land North Rhiannonmouth"
  );
  const [dropdownShow, setDropdownShow] = useState(false);
  const [guestsTitle, setGuestsTitle] = useState("4 adults");
  const [secondDropdownShow, setSecondDropdownShow] = useState(false);

  return (
    <div className={cl.selection}>
      <ul className={cl.selection__list}>
        <li className={cl.selection__item}>
          <div className={cl.selection__itemIcon}>
            <Image src={accommodation} alt="accommodation" />
          </div>
          <div className={cl.selection__itemContent}>
            <h6>Accommodation</h6>
            <h5>{bookTitle}</h5>
            <Dropdown
              array={books}
              setTitle={setBookTitle}
              dropdownShow={dropdownShow}
              setDropdownShow={setDropdownShow}
            />
          </div>
          <button
            onClick={() =>
              dropdownShow === false
                ? setDropdownShow(true)
                : setDropdownShow(false)
            }
            className={cl.selection__itemIconArrow}
          >
            <Image src={arrowBottom} alt="arrow-bottom" />
          </button>
        </li>
        <li className={cl.selection__item}>
          <div className={cl.selection__itemIcon}>
            <Image src={calendar} alt="calendar" />
          </div>
          <div className={cl.selection__itemContent}>
            <h6>Check-in</h6>
            <h5>19.06.2019</h5>
          </div>
        </li>
        <li className={cl.selection__item}>
          <div className={cl.selection__itemContent}>
            <h6>Check-out</h6>
            <h5>19.06.2019</h5>
          </div>
        </li>
        <li className={cl.selection__item}>
          <div className={cl.selection__itemIcon}>
            <Image src={guest} alt="guests" />
          </div>
          <div className={cl.selection__itemContent}>
            <h6>Guests</h6>
            <h5>{guestsTitle}</h5>
            <Dropdown
              array={guests}
              setTitle={setGuestsTitle}
              dropdownShow={secondDropdownShow}
              setDropdownShow={setSecondDropdownShow}
            />
          </div>
          <button
            onClick={() =>
              secondDropdownShow === false
                ? setSecondDropdownShow(true)
                : setSecondDropdownShow(false)
            }
            className={cl.selection__itemIconArrow}
          >
            <Image src={arrowBottom} alt="arrow-bottom" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Selection;
