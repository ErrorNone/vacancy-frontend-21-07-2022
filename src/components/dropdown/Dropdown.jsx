import React from "react";
import cl from "./dropdown.module.scss";

const Dropdown = ({ array, setTitle, setDropdownShow, dropdownShow }) => {
  const changeBook = (title) => {
    setTitle(title);
    setDropdownShow(false);
  };

  return (
    <ul className={dropdownShow === false ? cl.dropdown : cl.dropdownShow}>
      {array.map((book) => (
        <li key={book.id}>
          <button onClick={() => changeBook(book.title)}>{book.title}</button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
