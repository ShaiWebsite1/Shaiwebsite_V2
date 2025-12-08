"use client";

import { useState } from "react";
import styles from "./heroSectionRight.module.css";
import popupImg from "@/../public/images/contact-us/popupImg.svg";
import Image from "next/image";

export default function HeroSectionRight() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShoePopup] = useState(false)
  const [error, setError] = useState(false);

  async function formSubmit() {
    if(!name || !email || !phone || !message) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    setShoePopup(true);

    setTimeout(() => {
      setShoePopup(false)
    }, 3000);
    const formData = {
      name,
      email,
      phone,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  }

  return (
    <>
      <div className={styles.heroSectionRight}>
        <p className={styles.heroSectionLable}>NAME</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className={styles.heroSectionInput} type="text" placeholder="Liam Baker" />
        <p className={styles.heroSectionLable}>COMPANY EMAIL</p>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} className={styles.heroSectionInput} type="text" placeholder="Green Future Corp" />
        <p className={styles.heroSectionLable}>PHONE</p>
        <input onChange={(e)=>setPhone(e.target.value)} value={phone} className={styles.heroSectionInput} type="text" placeholder="+1 555-987-6543" />
        <p className={styles.heroSectionLable}>MESSAGE</p>
        <textarea onChange={(e)=>setMessage(e.target.value)} value={message} className={styles.heroSectionInput} placeholder="Message for SHAI’s team"></textarea>
        {
          error && <p className={styles.error}>please fill all fields</p>
        }
        <button onClick={()=>{formSubmit()}} className={`${styles.heroSectionSubmitBtn} primaryBtn d-flex align-items-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M9.3335 22.6666L22.6668 9.33331M22.6668 9.33331H10.6668M22.6668 9.33331V21.3333"
              stroke="white"
              style={{ stroke: "white", strokeOpacity: 1 }}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          SUBMIT
        </button>
      </div>

      {
        showPopup && (
          <div className={`${styles.popupWrap} d-flex justify-content-center align-items-center`}>
            <div className={`${styles.popup} d-flex flex-column align-items-center`}>
              <Image className={styles.popupImg} src={popupImg} alt="shai logo" />
              <h2 className={styles.popupHeading}>Thank You For Reaching Out To SHAI</h2>
              <p className={styles.popupDesc}>One of our specialists will contact you soon</p>
            </div>
          </div>
        )
      }
    </>
  )
}