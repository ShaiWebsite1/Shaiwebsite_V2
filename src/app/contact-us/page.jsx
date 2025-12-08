export async function generateMetadata() {
  return {
    title: "SHAI Global Analytics",
    description:
      "Helping healthcare companies improve revenue, reduce administrative overhead, and enhance customer experience and satisfaction. From enrollment to settlement, and from visit to collections, SHAI combines healthcare expertise with advanced technology to accelerate growth for both payers and providers.",
    robots: "index, follow",

    alternates: { canonical: "https://shai.health/contact-us" },

    openGraph: {
      title: "SHAI Global Analytics",
      description:
        "Helping healthcare companies improve revenue, reduce administrative overhead, and enhance customer experience and satisfaction. From enrollment to settlement, and from visit to collections, SHAI combines healthcare expertise with advanced technology to accelerate growth for both payers and providers.",
      url: "https://shai.health/contact-us",
    },
  };
}

import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import HeroSectionRight from "@/components/contact-us/heroSectionRight/heroSectionRight";
import Image from "next/image";
import howSectionCardImg from "@/../public/images/home/howSectionCardImg.webp";
import DemoBtn from "@/components/demoBtn";

export default function ContactUs() {
  const whatSectionCardList = [
    {
      icon: "/images/contact-us/whatSectionCardIcon1.svg",
      text: "Provider Services"
    },
    {
      icon: "/images/contact-us/whatSectionCardIcon2.svg",
      text: "Payer Services"
    },
    {
      icon: "/images/contact-us/whatSectionCardIcon3.svg",
      text: "Clinical Services"
    },
    {
      icon: "/images/contact-us/whatSectionCardIcon4.svg",
      text: "Value-Based Care Services"
    },
    {
      icon: "/images/contact-us/whatSectionCardIcon5.svg",
      text: "Physician Services"
    },
    {
      icon: "/images/contact-us/whatSectionCardIcon6.svg",
      text: "Hospital Services"
    },
  ]

  const howSectionCardPointList = [
    {
      text: "Refresher Sessions and 1:1 Training",
      textWidth: "100%",
    },
    {
      text: "Weekly EBTs (Error-Based Trainings) and PKTs (Process Knowledge Tests)",
      textWidth: "300px",
    },
    {
      text: "RCA, 5 Whys, Fishbone Analysis, Pareto Chart, and CAPA (Corrective Action Preventive Action)",
      textWidth: "300px",
    },
    {
      text: "Proactive Daily Team Huddles With Peer Audits",
      textWidth: "300px",
    },
    {
      text: "Periodic Calibrations For Error-Based Improvement",
      textWidth: "300px",
    },
  ];

  const numberSectionCardList = [
    {
      numList: ["98%+", "40-60%", "98%"],
      textList: [
        "Transaction Accuracy",
        "Payroll Cost Reduction",
        "Financial Accuracy",
      ],
    },
    {
      numList: ["<5%", "20%+", "99%+"],
      textList: [
        "AR Time Reduction",
        "Increase in Collections",
        "Vendor SLA Compliance",
      ],
    },
    {
      numList: ["<2%", "90%+", "95%+"],
      textList: [
        "Denial Rate",
        "Increase in First Pass Rate",
        "Claims Adjudicated Within 30 days",
      ],
    },
  ];

  const promiseSectionCardList = [
    {
      icon: "/images/home/promiseSectionCardIcon1.svg",
      desc: "Payer Process Audit",
      descWidth: "100%",
    },
    {
      icon: "/images/home/promiseSectionCardIcon2.svg",
      desc: "Gap Analysis",
      descWidth: "100%",
    },
    {
      icon: "/images/home/promiseSectionCardIcon3.svg",
      desc: "Solutioning Scope with 24-48 Hours TAT",
      descWidth: "219px",
    },
    {
      icon: "/images/home/promiseSectionCardIcon4.svg",
      desc: "Systematic Monitoring and Feedback Loop",
      descWidth: "200px",
    },
  ];

  const insightsSectionCardList = [
    {
      link: "",
      img: "/images/home/insightsSectionCardImg1.webp",
      date: "23 Apr 2025",
      heading: "Transforming Healthcare Operations: The SHAI advantage",
    },
    {
      link: "",
      img: "/images/home/insightsSectionCardImg2.webp",
      date: "23 Apr 2025",
      heading: "Comprehensive Healthcare Billing Services for All Specialties",
    },
    {
      link: "",
      img: "/images/home/insightsSectionCardImg3.webp",
      date: "23 Apr 2025",
      heading: "Data Analytics Transforms Healthcare Revenue Cycle Management",
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* hero section  */}
        <section className={`${styles.heroSectionWrap} d-flex justify-content-center`}>
          <div className={`${styles.heroSection} d-flex align-items-center`}>
            <div className={styles.heroSectionLeft}>
              <p className={styles.heroSectionTitle}>CONTACT SHAI</p>
              <h1 className={styles.heroSectionHeading}>Interested in Learning More About SHAI’s Services and Packages?</h1>
              <p className={`${styles.heroSectionDesc} ${styles.heroSectionDesc1}`}>We help leading healthcare companies in the US improve operational efficiency, reduce admin load and maximize revenue through combining new-age technology with decades of healthcare expertise.</p>
              <p className={`${styles.heroSectionDesc}`}>Just fill out the form, and we’ll reach out to understand your unique requirements and deliver customized solutions.</p>
            </div>
            <HeroSectionRight />
          </div>
        </section>

        {/* what section  */}
        <section className={`${styles.whatSection} d-flex flex-column align-items-center`}>
          <h2 className={styles.whatSectionHeading}>What You Get with SHAI </h2>
          <p className={styles.whatSectionDesc}>A Trusted Business Partner Across The Healthcare Value Chain</p>
          <div className={`${styles.whatSectionCardList} d-flex flex-wrap`}>
            {
              whatSectionCardList.map((card, index)=>{
                return(
                  <div key={index} className={`${styles.whatSectionCard} d-flex align-items-center`}>
                    <Image width={40} height={40} className={styles.whatSectionCardIcon} src={card.icon} alt={card.text} />
                    <p className={styles.whatSectionCardText}>{card.text}</p>
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* how section  */}
        <section
          className={`${styles.howSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.howSectionHeading}>
            How SHAI Handles Transitions and Quality Assurance
          </h2>
          <div className={`${styles.howSectionCardList} d-flex`}>
            <div className={styles.howSectionCard1}>
              <Image
                width={478}
                height={511}
                className={styles.howSectionCardImg}
                src={howSectionCardImg}
                alt="How SHAI Handles Transitions and Quality Assurance"
              />
            </div>
            <div
              className={`${styles.howSectionCard2} d-flex justify-content-center align-items-center`}
            >
              <div
                className={`${styles.howSectionCardPointList} d-flex flex-column`}
              >
                {howSectionCardPointList.map((point, index) => {
                  return (
                    <div
                      key={index}
                      className={`${styles.howSectionCardPoint} d-flex align-items-start`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4.92871 11.9999H19.0708M19.0708 11.9999L12.7069 5.63599M19.0708 11.9999L12.7069 18.3639"
                          stroke="#E43F71"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p
                        style={{ maxWidth: point.textWidth }}
                        className={styles.howSectionCardPointText}
                      >
                        {point.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* number section  */}
        <section
          className={`${styles.numberSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.numberSectionHeading}>
            The Numbers Speak For Themselves
          </h2>
          <div className={`${styles.numberSectionCardList} d-flex flex-column`}>
            {numberSectionCardList.map((card, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.numberSectionCard} ${
                    styles[`numberSectionCard${index + 1}`]
                  } d-flex`}
                >
                  {card.numList.map((num, index) => {
                    return (
                      <div
                        key={index}
                        className={styles.numberSectionCardNumWrap}
                      >
                        <p className={styles.numberSectionCardNum}>{num}</p>
                        <p className={styles.numberSectionCardNumText}>
                          {card.textList[index]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>

        {/* promise section  */}
        <section
          className={`${styles.promiseSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.promiseSectionHeading}>The SHAI Promise</h2>
          <p className={styles.promiseSectionDesc}>
            Not just a Hospital Services provider, but a reliable business partner who works continuously to drive growth & operational efficiency through talent & tech-solutions          </p>
          <div className={`${styles.promiseSectionCardList} d-flex flex-wrap`}>
            {promiseSectionCardList.map((card, index) => {
              return (
                <div key={index} className={styles.promiseSectionCard}>
                  <p className={styles.promiseSectionCardStep}>
                    STEP 0{index + 1}
                  </p>
                  <Image
                    width={48}
                    height={48}
                    className={styles.promiseSectionCardIcon}
                    src={card.icon}
                    alt={card.desc}
                  />
                  <p
                    style={{ maxWidth: card.descWidth }}
                    className={styles.promiseSectionCardDesc}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* insights section  */}
        <section
          className={`${styles.insightsSection} d-flex flex-column align-items-center`}
          id="blogSection"
        >
          <h2 className={styles.insightsSectionHeading}>
            Related Healthcare Insights
          </h2>
          <div className={`${styles.insightsSectionCardList} d-flex`}>
            {insightsSectionCardList.map((card, index) => {
              return (
                <a
                  href={card.link}
                  key={index}
                  className={styles.insightsSectionCard}
                >
                  <div className={styles.insightsSectionCardImgWrap}>
                    <Image
                      width={377}
                      height={230}
                      className={styles.insightsSectionCardImg}
                      src={card.img}
                      alt={card.heading}
                    />
                  </div>
                  <div className={styles.insightsSectionCardContentWrap}>
                    <p className={styles.insightsSectionCardYear}>
                      {card.date}
                    </p>
                    <p className={styles.insightsSectionCardHeading}>
                      {card.heading}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* cta section  */}
        <section className={`${styles.ctaSection} d-flex flex-column align-items-center`}>
          <h2 className={styles.ctaSectionHeading}>Got Questions Around How SHAI Helps Healthcare Companies Like You Enable Revenue and Business Transformation?</h2>
          <DemoBtn />
        </section>
      </main>

      <Footer />
    </>
  )
}