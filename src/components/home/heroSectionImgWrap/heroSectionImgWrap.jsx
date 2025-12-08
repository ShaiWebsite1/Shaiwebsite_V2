"use client";

import Image from "next/image";
import styles from "./heroSectionImgWrap.module.css";
import heroSectionBaseImg from "@/../public/images/home/heroSectionBaseImg.webp";
import { useEffect, useState } from "react";

export default function HeroSectionImgWrap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeRotation, setActiveRotation] = useState(0);

  const imgSet = [
    {
      img1: "/images/home/heroSectionImgCenter3.webp",
      img2: "/images/home/heroSectionImgTop3.webp",
    },
    {
      img1: "/images/home/heroSectionImgCenter2.webp",
      img2: "/images/home/heroSectionImgTop2.webp",
    },
    {
      img1: "/images/home/heroSectionImgCenter1.webp",
      img2: "/images/home/heroSectionImgTop1.webp",
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
                    index === activeIndex ? styles.active : ""
                  }`}
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
