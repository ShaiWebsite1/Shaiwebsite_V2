"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import productLogo from "@/../public/images/productLogo.svg";
import menuCloseIcon from "@/../public/images/navbar/menuCloseIcon.svg";
import menuOpenIcon from "@/../public/images/navbar/menuOpenIcon.svg";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPointListOpen, setIsPointListOpen] = useState(false);
  const navWrap = useRef();
  const mobileNavTabListWrap = useRef();
  const mobileNavTabPointList = useRef();
  const mobileNavTab2 = useRef();

  const tabList = [
    {
      link: "/",
      text: "Home",
    },
    {
      dropDown: true,
      text: "Our Services",
      pointList: [
        {
          link: "/services/physician",
          icon: "/images/navbar/navTab2PointIcon1.svg",
          text: "Physician Services"
        },
        {
          link: "/services/hospitals",
          icon: "/images/navbar/navTab2PointIcon2.svg",
          text: "Hospital Services"
        },
        {
          link: "/services/value-based-care",
          icon: "/images/navbar/navTab2PointIcon3.svg",
          text: "Value-Based Care Services"
        },
        {
          link: "/services/payers",
          icon: "/images/navbar/navTab2PointIcon4.svg",
          text: "Payer Services"
        },
        {
          link: "/services/clinical",
          icon: "/images/navbar/navTab2PointIcon5.svg",
          text: "Clinical Services"
        },
      ]
    },
    {
      link: "#blogSection",
      text: "Blogs",
    },
    {
      link: "/about-us",
      text: "About Us",
    },
  ]

  useEffect(()=>{
    function handleScroll() {
      if(window.scrollY > 50) {
        navWrap.current.classList.add(styles.active);
      } else {
        navWrap.current.classList.remove(styles.active);
      }
    }

    if(window.innerWidth > 768) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  useEffect(()=>{
    const mobileNavTabListWrapEle = mobileNavTabListWrap.current;
    if(isMenuOpen) {
      mobileNavTabListWrapEle.style.height = mobileNavTabListWrapEle.scrollHeight + "px";
      setTimeout(() => {
        mobileNavTabListWrapEle.style.height = "auto";
      }, 250);
    } else {
      mobileNavTabListWrapEle.style.height = "0px";
    }
  }, [isMenuOpen])

  useEffect(()=>{
    const mobileNavTabPointListEle = mobileNavTabPointList.current;
    if(isPointListOpen) {
      mobileNavTabPointListEle.style.height = mobileNavTabPointListEle.scrollHeight + "px";
      mobileNavTab2.current.classList.add(styles.active);
      mobileNavTabPointListEle.classList.add(styles.active);
    } else {
      mobileNavTabPointListEle.style.height = "0px";
      mobileNavTab2.current.classList.remove(styles.active);
      mobileNavTabPointListEle.classList.remove(styles.active);
    }
  }, [isPointListOpen])

  return(
    <>
      <nav ref={navWrap} className={`${styles.navWrap} d-flex justify-content-center`}>
        <div className={`${styles.nav} d-flex align-items-center justify-content-between`}>
          <a href="/">
            <Image className={styles.navProductLogo} src={productLogo} alt="shai logo"  />
          </a>
          <div className={`${styles.navTabList} d-flex align-items-center`}>
            {
              tabList.map((tab, index)=>{
                return (
                    tab.dropDown ? (
                      <div key={index} href="/" className={`${styles.navTab} ${styles.navTab2} d-flex align-items-center`}>
                        <p className={styles.navTabText}>{tab.text}</p>
                        <svg className={styles.navTabArrow} xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                          <path d="M9.65002 5.15002L5.15002 0.650024L0.650024 5.15002" stroke="#1B0C27" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className={styles.navTab2PointListWrap}>
                          <div className={styles.navTab2PointList}>
                            {
                              tab.pointList.map((point, index)=>{
                                return (
                                  <a href={point.link} key={index} className={`${styles.navTab2Point} d-flex align-items-center`}>
                                    <Image width={16} height={16} className={styles.navTab2PointIcon} src={point.icon} alt={point.text} />
                                    <p className={styles.navTab2PointText}>{point.text}</p>
                                  </a>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a key={index} href={tab.link} className={`${styles.navTab}`}>
                        <p className={styles.navTabText}>{tab.text}</p>
                      </a>
                    )
                )
              })
            }
          </div>
          <a className={styles.navBtnLink} href="/contact-us">
            <button className={`${styles.navBtn} d-flex align-items-center`}>
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="white"  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </a>
          {
            <div onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className={styles.navMenuBtnWrap}>
              {
                isMenuOpen ? (
                  <Image className={styles.navMenuBtn} src={menuCloseIcon} alt="menuOpenIcon"  />
                ) : (
                  <Image className={styles.navMenuBtn} src={menuOpenIcon} alt="menuOpenIcon"  />
                )
              }
            </div>
          }
        </div>
        <div ref={mobileNavTabListWrap} className={styles.mobileNavTabListWrap}>
          <div className={styles.mobileNavTabList}>
            {
              tabList.map((tab, index)=>{
                return (
                  tab.dropDown ? (
                    <div key={index}>
                      <div onClick={()=>{setIsPointListOpen(!isPointListOpen)}} ref={mobileNavTab2} className={`${styles.mobileNavTab} d-flex justify-content-between`}>
                        <p className={styles.mobileNavTabText}>{tab.text}</p>
                        <svg className={styles.mobileNavTabArrow} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2.05859 5.75L8.05859 11.75L14.0586 5.75" stroke="#2D0612" strokeWidth="1.73333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div ref={mobileNavTabPointList} className={styles.mobileNavTabPointList}>
                        {
                          tab.pointList.map((point, index)=>{
                            return (
                              <a href={point.link} key={index} className={`${styles.mobileNavTabPoint} d-flex align-items-center`}>
                                <Image width={16} height={16} src={point.icon} alt={point.text} />
                                <p className={styles.mobileNavTab2PointText}>{point.text}</p>
                              </a>
                            )
                          })
                        }
                      </div>
                    </div>
                  ) : (
                    <a href={tab.link} key={index} className={styles.mobileNavTab}>
                      <p className={styles.mobileNavTabText}>{tab.text}</p>
                    </a>
                  )
                )
              })
            }
          </div>
          <a href="/contact-us" className={styles.mobileNavBtnWrap}>
            <button className={`${styles.mobileNavBtn} d-flex justify-content-center align-items-center`}>
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="white"  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </a>
        </div>
      </nav>
    </>
  )
}