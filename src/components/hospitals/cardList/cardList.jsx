"use client";

import { useEffect, useRef } from "react";
import styles from "./cardList.module.css";
import Image from "next/image";

export default function CardList() {
  const cardSectionCard = useRef([]);
  const cardSectionCardTextWrap = useRef([])

  const cardSection = [
    {
      img: "/images/hospitals/cardSectionImg1.webp",
      heading: "In-Patient Services",
      desc: "Complex inpatient coding—covering SNF, rehab, pediatric, AP, and MS-DRG cases—ensuring compliant documentation, accurate reimbursement, and reduced denial risk."
    },
    {
      img: "/images/hospitals/cardSectionImg2.webp",
      heading: "Out- Patient Services",
      desc: "Outpatient coding covers multi-specialty encounters—from surgery and radiology to cardiology and therapy—delivering precision, compliance, and faster reimbursements."
    }
  ]

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if(windowWidth > 768) {
      cardSectionCard.current.forEach((card, index) => {
        card.addEventListener("mouseenter", function () {
          cardSectionCardTextWrap.current[index].style.height =
            cardSectionCardTextWrap.current[index].scrollHeight + "px";
        });
  
        card.addEventListener("mouseleave", function () {
          cardSectionCardTextWrap.current[index].style.height = "5rem";
        });
      });
    }
  }, []);

  return(
    <>
      <div className={`${styles.cardSectionCardList} d-flex`}>
        {
          cardSection.map((card, index)=>{
            return(
              <div ref={(el)=>cardSectionCard.current[index]=el} key={index} className={`${styles.cardSectionCard}`}>
                <Image width={480} height={516} className={styles.cardSectionCardImg} src={card.img} alt={card.heading} />
                <div ref={(el)=>cardSectionCardTextWrap.current[index]=el} className={styles.cardSectionCardTextWrap}>
                  <h2 className={styles.cardSectionCardTextHeading}>{card.heading}</h2>
                  <p className={styles.cardSectionCardTextDesc}>{card.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}