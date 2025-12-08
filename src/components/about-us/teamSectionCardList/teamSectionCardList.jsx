"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./teamSectionCardList.module.css";
import Image from "next/image";
import linkedin from "@/../public/images/about-us/linkedin.svg";

export default function TeamSectionCardList() {
  const [activeTab, setActiveTab] = useState(0);
  const teamSectionCardListRef = useRef([]);

  const teamSectionTabList = [
    "Board of Directors",
    "Executive Leadership",
    "Operational Leadership",
    "Advisory Board"
  ]

  const teamSectionCardList = [
    [
      {
        img: "/images/about-us/teamSectionCard1Img1.webp",
        name: "Ramprasad M",
        role: "",
        link: "https://www.linkedin.com/in/ramprasad-m-b19a4b/?originalSubdomain=in"
      },
      {
        img: "/images/about-us/teamSectionCard1Img2.webp",
        name: "Pradeep Dadha",
        role: "",
        link: "https://www.linkedin.com/in/pradeep-dadha-a13aa944/?originalSubdomain=in"
      },
      {
        img: "/images/about-us/teamSectionCard1Img3.webp",
        name: "Swaminathan RP",
        role: "",
        link: "https://www.linkedin.com/in/rpswaminathan/?originalSubdomain=in"
      },
    ],
    [
      {
        img: "/images/about-us/teamSectionCard2Img1.webp",
        name: "Rajesh Padmanabhan",
        role: "CEO",
        link: "https://www.linkedin.com/in/rajesh-padmanabhan-0b59b02/?originalSubdomain=in"
      },
      {
        img: "/images/about-us/teamSectionCard2Img2.webp",
        name: "Lokesh Anbalagan",
        role: "COO",
        link: "https://www.linkedin.com/in/lokesh-anbalagan-b438b435/?originalSubdomain=in"
      },
      {
        img: "/images/about-us/teamSectionCard2Img3.webp",
        name: "Vishwanath Poojari",
        role: "CFO",
        link: ""
      },
      {
        img: "/images/about-us/teamSectionCard2Img4.webp",
        name: "Bruce Schwack",
        role: "Head of Business Development",
        link: "https://www.linkedin.com/in/schwackattack/?originalSubdomain=in"
      },
    ],
    [
      {
        img: "/images/about-us/teamSectionCard3Img1.webp",
        name: "Moses Dev",
        role: "Head of Delivery and Clinical",
        link: "https://www.linkedin.com/in/moses-dev/?originalSubdomain=in"
      },
      {
        img: "/images/about-us/teamSectionCard3Img2.webp",
        name: "Selvin Babu",
        role: "Head of Business Transformation",
        link: "https://www.linkedin.com/in/selvin-babu-7327a6209/?originalSubdomain=in"
      },
      {
        img: "/images/about-us/teamSectionCard3Img3.webp",
        name: "Thangaraj Arunachalam",
        role: "Head of Coding  ",
        link: "https://www.linkedin.com/in/thangaraj-arunachalam-a65b0227/?originalSubdomain=in"
      },
      {
        img: "/images/about-us/teamSectionCard3Img4.webp",
        name: "Charles Sundarraj",
        role: "Head of RCM",
        link: "https://www.linkedin.com/in/charles-s-8a9b99188/"
      },
      {
        img: "/images/about-us/teamSectionCard3Img5.webp",
        name: "Sivasankari P",
        role: "Head of Strategic Finance and Business Information",
        link: ""
      },
    ],

    [
      // {
      //   img: "/images/about-us/teamSectionCard4Img1.webp",
      //   name: "Larry B Deitch",
      //   role: "",
      //   link: "https://www.linkedin.com/in/larry-deitch-b1679b12/"
      // },
      {
        img: "/images/about-us/teamSectionCard4Img2.webp",
        name: "Deepa Krishnamurthy",
        role: "",
        link: ""
      },
      {
        img: "/images/about-us/teamSectionCard4Img3.webp",
        name: "Raju Venkatraman",
        role: "",
        link: "https://www.linkedin.com/in/raju-venkatraman-b573457/"
      },
      {
        img: "/images/about-us/teamSectionCard4Img4.webp",
        name: "Ramraj R",
        role: "",
        link: "https://elevarequity.com/team/r-ramaraj/"
      },
      {
        img: "/images/about-us/teamSectionCard4Img5.webp",
        name: "Ramu Veerappan",
        role: "",
        link: "https://www.linkedin.com/in/ramu-veerappan-b104a914/"
      },
    ]
  ]

  useEffect(()=>{
    if(window.innerWidth > 768) {
      teamSectionCardListRef.current.forEach((cardList, index)=>{
        if(index < activeTab) {
          cardList.style.left = "-100%";
        } else if (index === activeTab) {
          cardList.style.left = "0%";
        } else {
          cardList.style.left = "100%";
        }
      })
    }
  }, [activeTab])

  return (
    <>
      <div className={`${styles.teamSectionTabList} d-flex align-items-center justify-content-between`}>
        {
          teamSectionTabList.map((tab, index)=>{
            return (
              <div onClick={()=>{setActiveTab(index)}} key={index} className={`${styles.teamSectionTab} ${index === activeTab ? styles.active : ""}`}>
                <h3 className={styles.teamSectionTabText}>{tab}</h3>
                <div className={styles.teamSectionTabLine}></div>
              </div>
            )
          })
        }
      </div>
      <div className={styles.teamSectionCardListWrap}>
        {
          teamSectionCardList.map((cardList, index)=>{
            return(
              <div key={index} ref={(el)=>{teamSectionCardListRef.current[index]=el}} className={`${styles.teamSectionCardListInnerWrap} ${index === activeTab ? styles.active : ""}`}>
                <h3 className={styles.teamSectionCardListHeading}>{teamSectionTabList[index]}</h3>
                <div className={`${styles.teamSectionCardList} d-flex`}>
                  {
                    cardList.map((card, index)=>{
                      return (
                        <a {...(card.link ? { href: card.link } : {})} target="_blank" key={index} className={styles.teamSectionCard}>
                          <Image width={190} height={225} className={styles.teamSectionCardImg} src={card.img} alt={card.name}/>
                          {
                            card.link && <Image className={styles.teamSectionCardlinkedinImg} src={linkedin} alt="linkedin icon"/>
                          }
                          <div className={styles.teamSectionCardTextWrap}>
                            <p className={styles.teamSectionCardText1}>{card.name}</p>
                            {
                              card.role && <p className={styles.teamSectionCardText2}>{card.role}</p>
                            }
                          </div>
                        </a>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
