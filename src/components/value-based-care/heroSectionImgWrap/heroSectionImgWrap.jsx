"use client";

import Image from "next/image";
import styles from "./heroSectionImgWrap.module.css";
import heroSectionBaseImg from "@/../public/images/value-based-care/heroSectionBaseImg.webp";
import { useEffect, useState } from "react";

export default function HeroSectionImgWrap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeRotation, setActiveRotation] = useState(0);

  const imgSet = [
    {
      img1: "/images/value-based-care/heroSectionImgCenter1.webp",
      img2: "/images/value-based-care/heroSectionImgTop1.webp",
    },
    {
      img1: "/images/value-based-care/heroSectionImgCenter2.webp",
      img2: "/images/value-based-care/heroSectionImgTop2.webp",
    },
    {
      img1: "/images/value-based-care/heroSectionImgCenter3.webp",
      img2: "/images/value-based-care/heroSectionImgTop3.webp",
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
        if (preValue === 0) {
          return 1;
        } else {
          return 0;
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
        <div className={styles.heroSectionImg1Wrap}>
          <div className={styles.heroSectionImgInnerWrap}>
            {imgSet.map((img, index) => {
              return (
                <Image
                  key={index}
                  width={356}
                  height={367}
                  className={`${styles.heroSectionImg} ${
                    styles.heroSectionImg1
                  } ${index === activeIndex ? styles.active : ""}`}
                  src={img.img1}
                  alt="Helping Healthcare Companies"
                />
              );
            })}
          </div>
        </div>
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
