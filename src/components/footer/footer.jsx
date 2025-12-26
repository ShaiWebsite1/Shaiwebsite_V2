import Image from "next/image";
import styles from "./footer.module.css";
import productLogo from "@/../public/images/productLogo.svg";
import instagramIcon from "@/../public/images/footer/instagramIcon.svg";
import linkedinIcon from "@/../public/images/footer/linkedinIcon.svg";

export default function Footer() {
  return(
    <>
      <footer className={`d-flex flex-column align-items-center`}>
        <div className={`${styles.footer} d-flex`}>
          <div className={`${styles.footerLeft} d-flex`}>
            <div className={styles.footerLeftContainer}>
              <a href="/">
                <Image className={styles.footerProductLogo} src={productLogo} alt="shai health logo"  />
              </a>
              <div className={`${styles.footerSocialMediaList} d-flex`}>
                <a href="https://www.instagram.com/shai.healthcare/">
                  <Image className={styles.footerSocialMedia} src={instagramIcon} alt="shai health logo"  />
                </a>
                <a href="https://www.linkedin.com/company/shai-health/">
                  <Image className={styles.footerSocialMedia} src={linkedinIcon} alt="shai health logo"  />
                </a>
              </div>
            </div>
            <div className={styles.footerLeftContainer}>
              <p className={`${styles.footerHeading} ${styles.footerHeading1}`}>Company</p>
              <div className={`${styles.footerPointList} d-flex flex-column`}>
                <a href="/about-us" className={styles.footerPoint}>About Us</a>
                <a href="#blogSection" className={styles.footerPoint}>Blogs</a>
              </div>
            </div>
            <div className={styles.footerLeftContainer}>
              <p className={`${styles.footerHeading} ${styles.footerHeading1}`}>Our Services</p>
              <div className={`${styles.footerPointList} d-flex flex-column`}>
                <a href="/services/physician" className={styles.footerPoint}>Physician Services</a>
                <a href="/services/hospitals" className={styles.footerPoint}>Hospital Services</a>
                <a href="/services/value-based-care" className={styles.footerPoint}>Value-Based Care Services</a>
                <a href="/services/payers" className={styles.footerPoint}>Payer Services</a>
                <a href="/services/clinical" className={styles.footerPoint}>Clinical Services</a>
              </div>
            </div>
            <div className={`${styles.footerLeftContainer} ${styles.footerLeftContainer2} d-flex flex-column`}>
              <div>
                <p className={`${styles.footerHeading} ${styles.footerHeading1}`}>Careers</p>
                <div className={`${styles.footerPointList} d-flex flex-column`}>
                  <a href="mailto:hr@shai.health" className={styles.footerPoint}>hr@shai.health</a>
                  <a href="tel:+917845777499" className={`${styles.footerPoint} d-flex align-items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                      <path d="M6.75342 2.68359C6.64404 2.41016 6.47087 2.21875 6.23389 2.10938C5.97868 2 5.71436 1.97266 5.44092 2.02734L3.03467 2.68359C2.54248 2.86589 2.27816 3.22135 2.2417 3.75C2.25993 6.02865 2.81592 8.08854 3.90967 9.92969C5.00342 11.7708 6.47087 13.2383 8.31201 14.332C10.1532 15.4258 12.2131 15.9818 14.4917 16C15.0203 15.9635 15.3758 15.6992 15.5581 15.207L16.2144 12.8008C16.269 12.5273 16.2417 12.263 16.1323 12.0078C16.0229 11.7708 15.8315 11.5977 15.5581 11.4883L12.9331 10.3945C12.4409 10.2305 12.0216 10.3398 11.6753 10.7227L10.5815 12.0625C9.6154 11.6068 8.74951 11.0052 7.98389 10.2578C7.23649 9.49219 6.63493 8.6263 6.1792 7.66016L7.51904 6.56641C7.90186 6.22005 8.01123 5.80078 7.84717 5.30859L6.75342 2.68359Z" fill="#6D2F9D"/>
                    </svg>
                    +91 78457 77499
                  </a>
                  <a href="tel:+914424540122" className={`${styles.footerPoint} d-flex align-items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                      <path d="M6.75342 2.68359C6.64404 2.41016 6.47087 2.21875 6.23389 2.10938C5.97868 2 5.71436 1.97266 5.44092 2.02734L3.03467 2.68359C2.54248 2.86589 2.27816 3.22135 2.2417 3.75C2.25993 6.02865 2.81592 8.08854 3.90967 9.92969C5.00342 11.7708 6.47087 13.2383 8.31201 14.332C10.1532 15.4258 12.2131 15.9818 14.4917 16C15.0203 15.9635 15.3758 15.6992 15.5581 15.207L16.2144 12.8008C16.269 12.5273 16.2417 12.263 16.1323 12.0078C16.0229 11.7708 15.8315 11.5977 15.5581 11.4883L12.9331 10.3945C12.4409 10.2305 12.0216 10.3398 11.6753 10.7227L10.5815 12.0625C9.6154 11.6068 8.74951 11.0052 7.98389 10.2578C7.23649 9.49219 6.63493 8.6263 6.1792 7.66016L7.51904 6.56641C7.90186 6.22005 8.01123 5.80078 7.84717 5.30859L6.75342 2.68359Z" fill="#6D2F9D"/>
                    </svg>
                    +91 44 2454 0122
                  </a>
                </div>
              </div>
              <div>
                <p className={`${styles.footerHeading} ${styles.footerHeading1}`}>Business</p>
                <div className={`${styles.footerPointList} d-flex flex-column`}>
                  <a href="mailto:bd@shai.health" className={styles.footerPoint}>bd@shai.health</a>
                  <a href="tel: +1 (321)-220-3804" className={`${styles.footerPoint} d-flex align-items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                      <path d="M6.75342 2.68359C6.64404 2.41016 6.47087 2.21875 6.23389 2.10938C5.97868 2 5.71436 1.97266 5.44092 2.02734L3.03467 2.68359C2.54248 2.86589 2.27816 3.22135 2.2417 3.75C2.25993 6.02865 2.81592 8.08854 3.90967 9.92969C5.00342 11.7708 6.47087 13.2383 8.31201 14.332C10.1532 15.4258 12.2131 15.9818 14.4917 16C15.0203 15.9635 15.3758 15.6992 15.5581 15.207L16.2144 12.8008C16.269 12.5273 16.2417 12.263 16.1323 12.0078C16.0229 11.7708 15.8315 11.5977 15.5581 11.4883L12.9331 10.3945C12.4409 10.2305 12.0216 10.3398 11.6753 10.7227L10.5815 12.0625C9.6154 11.6068 8.74951 11.0052 7.98389 10.2578C7.23649 9.49219 6.63493 8.6263 6.1792 7.66016L7.51904 6.56641C7.90186 6.22005 8.01123 5.80078 7.84717 5.30859L6.75342 2.68359Z" fill="#6D2F9D"/>
                    </svg>
                    +1 (321)-220-3804
                  </a>
                  <a href="tel:+15617712005" className={`${styles.footerPoint} d-flex align-items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                      <path d="M6.75342 2.68359C6.64404 2.41016 6.47087 2.21875 6.23389 2.10938C5.97868 2 5.71436 1.97266 5.44092 2.02734L3.03467 2.68359C2.54248 2.86589 2.27816 3.22135 2.2417 3.75C2.25993 6.02865 2.81592 8.08854 3.90967 9.92969C5.00342 11.7708 6.47087 13.2383 8.31201 14.332C10.1532 15.4258 12.2131 15.9818 14.4917 16C15.0203 15.9635 15.3758 15.6992 15.5581 15.207L16.2144 12.8008C16.269 12.5273 16.2417 12.263 16.1323 12.0078C16.0229 11.7708 15.8315 11.5977 15.5581 11.4883L12.9331 10.3945C12.4409 10.2305 12.0216 10.3398 11.6753 10.7227L10.5815 12.0625C9.6154 11.6068 8.74951 11.0052 7.98389 10.2578C7.23649 9.49219 6.63493 8.6263 6.1792 7.66016L7.51904 6.56641C7.90186 6.22005 8.01123 5.80078 7.84717 5.30859L6.75342 2.68359Z" fill="#6D2F9D"/>
                    </svg>
                    +1 (561) 771-2005
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.footerRight} d-flex flex-column`}>
            <div>
              <p className={`${styles.footerHeading} ${styles.footerHeading2}`}>USA Office</p>
              <p className={`${styles.footerPoint} ${styles.footerPointAddress} ${styles.footerPointAddress1} d-flex align-items-start`}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{minWidth: "11px", marginTop: "4px"}} width="11" height="14" viewBox="0 0 11 14" fill="none">
                  <path d="M5.91781 13.6712C6.41096 13.0685 7.0137 12.2557 7.72603 11.2329C8.43836 10.2283 9.07763 9.18721 9.64384 8.10959C10.1918 7.03196 10.484 6.08219 10.5205 5.26027C10.484 3.76256 9.9726 2.52055 8.9863 1.53425C8 0.547945 6.75799 0.0365295 5.26027 0C3.76256 0.0365295 2.52055 0.547945 1.53425 1.53425C0.547945 2.52055 0.0365297 3.76256 0 5.26027C0.0365297 6.08219 0.328767 7.03196 0.876712 8.10959C1.44292 9.18721 2.08219 10.2283 2.79452 11.2329C3.50685 12.2557 4.10959 13.0685 4.60274 13.6712C4.78539 13.8904 5.00457 14 5.26027 14C5.51598 14 5.73516 13.8904 5.91781 13.6712ZM5.26027 3.50685C5.91781 3.52511 6.42009 3.81735 6.76712 4.38356C7.09589 4.96804 7.09589 5.55251 6.76712 6.13699C6.42009 6.7032 5.91781 6.99543 5.26027 7.0137C4.60274 6.99543 4.10046 6.7032 3.75342 6.13699C3.42466 5.55251 3.42466 4.96804 3.75342 4.38356C4.10046 3.81735 4.60274 3.52511 5.26027 3.50685Z" fill="#6D2F9D"/>
                </svg>
                SHAI Global Analytics Inc. 5851 Legacy Circle, Suite 6059 (6th Floor), Plano, Tx 75024.
              </p>
            </div>
            <div>
              <p className={`${styles.footerHeading} ${styles.footerHeading2}`}>India Office</p>
              <p className={`${styles.footerPoint} ${styles.footerPointAddress} ${styles.footerPointAddress2} d-flex align-items-start`}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{minWidth: "11px", marginTop: "4px"}} width="11" height="14" viewBox="0 0 11 14" fill="none">
                  <path d="M5.91781 13.6712C6.41096 13.0685 7.0137 12.2557 7.72603 11.2329C8.43836 10.2283 9.07763 9.18721 9.64384 8.10959C10.1918 7.03196 10.484 6.08219 10.5205 5.26027C10.484 3.76256 9.9726 2.52055 8.9863 1.53425C8 0.547945 6.75799 0.0365295 5.26027 0C3.76256 0.0365295 2.52055 0.547945 1.53425 1.53425C0.547945 2.52055 0.0365297 3.76256 0 5.26027C0.0365297 6.08219 0.328767 7.03196 0.876712 8.10959C1.44292 9.18721 2.08219 10.2283 2.79452 11.2329C3.50685 12.2557 4.10959 13.0685 4.60274 13.6712C4.78539 13.8904 5.00457 14 5.26027 14C5.51598 14 5.73516 13.8904 5.91781 13.6712ZM5.26027 3.50685C5.91781 3.52511 6.42009 3.81735 6.76712 4.38356C7.09589 4.96804 7.09589 5.55251 6.76712 6.13699C6.42009 6.7032 5.91781 6.99543 5.26027 7.0137C4.60274 6.99543 4.10046 6.7032 3.75342 6.13699C3.42466 5.55251 3.42466 4.96804 3.75342 4.38356C4.10046 3.81735 4.60274 3.52511 5.26027 3.50685Z" fill="#6D2F9D"/>
                </svg>
                Synthesis Healthcare (SHAI), Fayola Towers; #56/3A, 3rd Floor; 200 Ft. Radial Rd, Pallikaranai, Chennai 600100.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerLine}></div>
        <div className={`${styles.footerBottom} d-flex align-items-center justify-content-between`}>
          <p className={styles.footerPoint2}>ⓒ Copyright 2025 SHAI Global Analytics, Inc. All rights reserved</p>
          {/* <a href="" className={styles.footerPoint2}>Privacy Policy</a> */}
        </div>
      </footer>
    </>
  )
}
