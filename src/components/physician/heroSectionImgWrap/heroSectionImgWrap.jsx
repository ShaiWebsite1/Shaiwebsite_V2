"use client";

import Image from "next/image";
import styles from "./heroSectionImgWrap.module.css";
import heroSectionBaseImg from "@/../public/images/physician/heroSectionBaseImg.webp";
import { useEffect, useState } from "react";

export default function HeroSectionImgWrap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeRotation, setActiveRotation] = useState(0);

  const imgSet = [
    {
      img2: "/images/physician/heroSectionImgTop1.webp",
    },
    {
      img2: "/images/physician/heroSectionImgTop2.webp",
    },
    {
      img2: "/images/physician/heroSectionImgTop3.webp",
    },
  ];

  const rotation = ["rotation1", "rotation2"];

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((preValue) => {
        if (preValue === 2) {
          return 0;
        } else {
          return preValue + 1;
        }
      });
      setActiveRotation((preValue) => {
        if (preValue === 1) {
          return 0;
        } else {
          return 1;
        }
      });
    }, 3000);
  }, []);

  return (
    <>
      <div className={styles.heroSectionImgWrap}>
        <Image
          className={styles.heroSectionBaseImg}
          src={heroSectionBaseImg}
          alt="Helping Healthcare Companies"
        />
        <div className={styles.heroSectionImg2Wrap}>
          <div className={styles.heroSectionImgInnerWrap}>
            {imgSet.map((img, index) => {
              return (
                <Image
                  key={index}
                  width={230}
                  height={187}
                  className={`${styles.heroSectionImg} ${
                    styles.heroSectionImg2
                  } ${styles[rotation[activeRotation]]} ${
                    index === activeIndex ? styles.active : ""
                  }`}
                  src={img.img2}
                  alt="Helping Healthcare Companies"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
