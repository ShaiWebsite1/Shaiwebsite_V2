"use client";

import Image from "next/image";
import styles from "./heroSectionImgWrap.module.css";
import heroSectionMainImg from "@/../public/images/hospitals/heroSectionMainImg.webp";
import heroSectionImg1 from "@/../public/images/hospitals/heroSectionImg1.webp";
import heroSectionImg2 from "@/../public/images/hospitals/heroSectionImg2.webp";
import heroSectionImg3 from "@/../public/images/hospitals/heroSectionImg3.webp";
import { useEffect, useRef, useState } from "react";

export default function HeroSectionImgWrap() {
  const heroSectionImg = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const heroSectionImgList = [
    heroSectionImg1,
    heroSectionImg2,
    heroSectionImg3,
  ];

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((preValue) => {
        if (preValue === 2) {
          return 0;
        } else {
          return preValue + 1;
        }
      });
    }, 3000);
  }, []);

  return (
    <>
      <div className={styles.heroSectionImgWrap}>
        <Image
          className={styles.heroSectionMainImg}
          src={heroSectionMainImg}
          alt="Helping Healthcare Companies"
        />
        {heroSectionImgList.map((img, index) => {
          return (
            <Image
              key={index}
              ref={(el) => (heroSectionImg.current[index] = el)}
              className={`${styles.heroSectionImg} ${
                styles[`heroSectionImg${index + 1}`]
              } ${index === activeIndex ? styles.active : ""}`}
              src={img}
              alt="Maximize Claims Processing Accuracy"
            />
          );
        })}
      </div>
    </>
  );
}
