"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./glimpseSectionToggle.module.css";
import Image from "next/image";

export default function GlimpseSectionToggle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const glimpseSectionToggleLine = useRef();
  const glimpseSectionToggleTab = useRef([]);

  const glimpseSectionList = [
    {
      img: "/images/home/glimpseSectionImg1.webp",
      textList: [
        {
          text: "Medical Coding With Multi-Specialty Expertise",
          style: {
            maxWidth: "220px",
            top: "-10%",
            right: "-50%",
          },
        },
        {
          text: "Clinical Documentation Support",
          style: {
            top: "10%",
            left: "-80%",
          },
        },
        {
          text: "Claims Error Reduction",
          style: {
            top: "12%",
            right: "-70%",
          },
        },
        {
          text: "Billing Solutions",
          style: {
            top: "27%",
            left: "-35%",
          },
        },
        {
          text: "Patient Intake",
          style: {
            top: "30%",
            right: "-30%",
          },
        },
        {
          text: "Denial Management",
          style: {
            top: "45%",
            left: "-70%",
          },
        },
        {
          text: "Patient Processing",
          style: {
            top: "45%",
            right: "-70%",
          },
        },
        {
          text: "Revenue Integrity",
          style: {
            bottom: "23%",
            left: "-35%",
          },
        },
        {
          text: "Cash Flow Acceleration",
          style: {
            bottom: "20%",
            right: "-50%",
          },
        },
        {
          text: "Revenue Reporting and Dashboarding",
          style: {
            maxWidth: "210px",
            bottom: "1%",
            left: "-80%",
          },
        },
        {
          text: "Financial Predictability",
          style: {
            bottom: "3%",
            right: "-70%",
          },
        },
        {
          text: "KPI Setting",
          style: {
            bottom: "-15%",
            left: "-20%",
          },
        },
      ],
    },
    {
      img: "/images/home/glimpseSectionImg2.webp",
      textList: [
        {
          text: "Prior Auth Intake",
          style: {
            top: "-12%",
            right: "-30%",
          },
        },
        {
          text: "Physician Credentialing and Prior Authorization",
          style: {
            maxWidth: "216px",
            top: "10%",
            right: "-80%",
          },
        },
        {
          text: "Claims Process Acceleration",
          style: {
            top: "15%",
            left: "-80%",
          },
        },
        {
          text: "Chart Intake & Reviews",
          style: {
            top: "33%",
            right: "-45%",
          },
        },
        {
          text: "Case and Disease Management",
          style: {
            top: "34%",
            left: "-65%",
          },
        },
        {
          text: "Payment Integrity",
          style: {
            top: "50%",
            right: "-70%",
          },
        },
        {
          text: "Risk Adjustment & Quality Audits",
          style: {
            top: "55%",
            left: "-77%",
          },
        },
        {
          text: "Financial Reporting, Real-time BI Dashboards & Analytics",
          style: {
            maxWidth: "278px",
            bottom: "15%",
            right: "-70%",
          },
        },
        {
          text: "Payer Correspondence",
          style: {
            bottom: "14%",
            left: "-50%",
          },
        },
        {
          text: "Insurance Payment Management",
          style: {
            bottom: "-2%",
            right: "-80%",
          },
        },
        {
          text: "Claims Adjudication",
          style: {
            bottom: "-5%",
            left: "-70%",
          },
        },
        {
          text: "Utilization Management",
          style: {
            bottom: "-20%",
            left: "-50%",
          },
        },
      ],
    },
  ];

  useEffect(() => {
    const glimpseSectionToggleLineEle = glimpseSectionToggleLine.current;
    const activeTab = glimpseSectionToggleTab.current[activeIndex];

    glimpseSectionToggleLineEle.style.left = activeTab.offsetLeft + "px";
    glimpseSectionToggleLineEle.style.width =
      activeTab.getBoundingClientRect().width + "px";
  }, [activeIndex]);

  return (
    <>
      <div
        className={`${styles.glimpseSectionToggle} d-flex align-items-center`}
      >
        <p
          ref={(el) => (glimpseSectionToggleTab.current[0] = el)}
          onClick={() => {
            setActiveIndex(0);
          }}
          className={`${styles.glimpseSectionToggleTab} ${
            activeIndex === 0 ? styles.active : ""
          }`}
        >
          Provider Services
        </p>
        <p
          ref={(el) => (glimpseSectionToggleTab.current[1] = el)}
          onClick={() => {
            setActiveIndex(1);
          }}
          className={`${styles.glimpseSectionToggleTab} ${
            activeIndex === 1 ? styles.active : ""
          }`}
        >
          Payer Services
        </p>
        <div
          ref={glimpseSectionToggleLine}
          className={styles.glimpseSectionToggleLine}
        ></div>
      </div>
      <div className={styles.glimpseSectionContentWrap}>
        {glimpseSectionList.map((content, index) => {
          return (
            <div
              key={index}
              className={`${styles.glimpseSectionContent} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <Image
                width={342}
                height={435}
                className={styles.glimpseSectionImg}
                src={content.img}
                alt="Provider Services, Payer Services"
              />
              {content.textList.map((text, index2) => {
                return (
                  <p
                    key={index2}
                    style={text.style}
                    className={`${styles.glimpseSectionText}`}
                  >
                    {text.text}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
