"use client";

import { useEffect, useState } from "react";
import styles from "./textAnimation.module.css";

export default function TextAnimation({ textList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((preValue) => {
        setPreviousIndex(preValue);
        if (preValue === textList.length - 1) {
          return 0;
        } else {
          return preValue + 1;
        }
      });
    }, 3000);
  }, []);
  return (
    <>
      <span className={styles.textWrap}>
        {textList.map((text, index) => {
          return (
            <span
              key={index}
              className={`${styles.text} ${
                previousIndex === index ? styles.inactive : ""
              } ${activeIndex === index ? styles.active : ""}`}
            >
              {text}
            </span>
          );
        })}
      </span>
    </>
  );
}
