import HTML from "../../../../assets/html-icon.png";
import CSS from "../../../../assets/css-icon.png";
import Javascript from "../../../../assets/js-icon.png";
import React from "../../../../assets/react-icon.png";
import styles from "./styles.module.css";

export const TechList = ({ name, img }) => {
  return (
    <>
      <li className={styles.listItem}>
        <img src={img} alt="Logo HTML" />
        <h3 className="title3">{name}</h3>
      </li>
    </>
  );
};
