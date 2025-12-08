export async function generateMetadata() {
  return {
    title: "Payers Services - SHAI",
    description:
      "SHAI helps payers streamline enrollment, optimize payment accuracy across the claims lifecycle, strengthen member relationships, and lower healthcare cost.",
    robots: "index, follow",

    alternates: { canonical: "https://shai.health/services/payers" },

    openGraph: {
      title: "Payers Services - SHAI",
      description:
        "SHAI helps payers streamline enrollment, optimize payment accuracy across the claims lifecycle, strengthen member relationships, and lower healthcare cost.",
      url: "https://shai.health/services/payers",
    },
  };
}

import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import TextAnimation from "@/components/home/textAnimation/textAnimation";
import HeroSectionImgWrap from "@/components/payers/heroSectionImgWrap/heroSectionImgWrap";
import Image from "next/image";
import howSectionCardImg from "@/../public/images/home/howSectionCardImg.webp";
import DemoBtn from "@/components/demoBtn";

export default function Payers() {
  const featureSectionCardList = [
    {
      heading: (
        <>
          Streamline Claims Processing
        </>
      ),
      desc: "Accelerate the claims lifecycle, drive accuracy, and reduce errors.",
      pointList: [
        "Coding Expertise to Spot Errors Pre-Submission",
        "Post-Payment Claims Audit",
        "Claim Adjudication",
        "Claims Adjustments",
        "Appeals and Grievances Processing",
        "Multi-Domain Claims Processing (Pharmacy, Dental, Vision, etc)"
      ],
      img: "/images/payers/featureSectionCardImg5.webp",
    },
    {
      heading: (
        <>
          Accelerate Benefits <br />
          and Enrollment Processing
        </>
      ),
      desc: "Enhance member experience and efficiency through tailored processing and maintenance across the member-payer relationship.",
      pointList: [
        "Benefits Configuration and Testing",
        "Medicare, Medicaid, ACA, and payment reconciliation",
        "Member Enrollment & Reconciliation",
        "Premium Billing and Invoicing Services",
      ],
      img: "/images/payers/featureSectionCardImg1.webp",
    },
    {
      heading: <>Manage Provider Data End-to-End</>,
      desc: "Maintain, update, and analyze provider network data to reduce admin work in loading data, improve network data accuracy, and adhere to compliance regulations.",
      pointList: [
        "Provider Intake",
        "Credentialing",
        "Provider Data Aggregation and Validation",
        "Compliance Insights",
        "Contract Configuration and Modeling",
        "Testing",
      ],
      img: "/images/payers/featureSectionCardImg2.webp",
    },
    {
      heading: <>Mitigate Risk With Quality Assurance</>,
      desc: "Run risk adjustment programs spanning multiple plans, states, and technological changes, improve risk scores, and meet compliance regulations with 360* data collection.",
      pointList: [
        "Chase List and Retrieval",
        "Risk Score Chart Review",
        "HEDIS Chart Follow-ups And Review",
        "Documentation and Data Collection For Compliance",
      ],
      img: "/images/payers/featureSectionCardImg3.webp",
    },
    {
      heading: <>Manage Benefits Utilization</>,
      desc: "Review cases. Assess medical appropriateness with data-driven techniques. Lower healthcare cost.",
      pointList: [
        "Prior Auth Intake",
        "Case Management",
        "Prospective, Concurrent, and Retrospective Planning and Review",
        "Disease Management",
      ],
      img: "/images/payers/featureSectionCardImg4.webp",
    },
  ];

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
      text: "Periodic Calibrations For Continuous Improvement",
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

  const secureSectionImgList = [
    {
      img: "/images/home/secureSectionImg1.webp",
      text: "ISO 27001",
    },
    {
      img: "/images/home/secureSectionImg2.webp",
      text: (
        <>
          HIPAA <br /> compliant
        </>
      ),
    },
    {
      img: "/images/home/secureSectionImg3.webp",
      text: (
        <>
          PHI Policy Rigor With <br /> Clean Desk Policy
        </>
      ),
    },
    {
      img: "/images/home/secureSectionImg4.webp",
      text: (
        <>
          Purpose-Built SSO <br /> Login and Cloud Infra
        </>
      ),
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
        {/* hero sectio  */}
        <section
          className={`${styles.heroSectionWrap} d-flex justify-content-center`}
        >
          <div className={`${styles.heroSection} d-flex align-items-center`}>
            <div className={styles.heroSectionLeft}>
              <p className={styles.heroSectionTitle}>SHAI FOR PAYERS</p>
              <h1 className={`${styles.heroSectionHeading} ${styles.heroSectionHeading1}`}>
                Empowering Payers to
              </h1>
              <h1 className={`${styles.heroSectionHeading} ${styles.heroSectionHeading2}`}>
                <TextAnimation
                  textList={[
                    "Minimize Revenue Leakage",
                    "Reduce Healthcare Admin Cost",
                    "Improve Member and Provider Experience",
                  ]}
                />
              </h1>
              <p className={styles.heroSectionDesc}>
                SHAI helps payers streamline enrollment, optimize payment
                accuracy across the claims lifecycle, strengthen member
                relationships, and lower healthcare cost.
              </p>
              <DemoBtn />
            </div>
            <div className={styles.heroSectionRight}>
              <HeroSectionImgWrap />
            </div>
          </div>
        </section>

        <h2 className={styles.soloHeading}>
          Lower Claims Management Cost. <br /> Drive Operational Efficiency With
          SHAI
        </h2>

        {/* feature section  */}
        <section
          className={`${styles.featureSection} d-flex flex-column align-items-center`}
        >
          {featureSectionCardList.map((card, index) => {
            return (
              <div
                key={index}
                className={`${styles.featureSectionCard} ${
                  index % 2 !== 1 ? styles.featureSectionCardRev : ""
                } d-flex align-items-center`}
              >
                <div className={styles.featureSectionCardLeft}>
                  <h2 className={styles.featureSectionCardHeading}>
                    {card.heading}
                  </h2>
                  <p className={styles.featureSectionCardDesc}>{card.desc}</p>
                  <div
                    className={`${styles.featureSectionCardPointList} d-flex flex-wrap`}
                  >
                    {card.pointList.map((point, index2) => {
                      return (
                        <div
                          key={index2}
                          className={`${styles.featureSectionCardPoint} d-flex align-items-start`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                          >
                            <path
                              d="M1.92892 8.00007H16.0711M16.0711 8.00007L9.7071 1.63611M16.0711 8.00007L9.7071 14.364"
                              stroke="#E43F71"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className={styles.featureSectionCardPointText}>
                            {point}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`${styles.featureSectionCardRight} d-flex justify-content-center`}
                >
                  <Image
                    width={480}
                    height={330}
                    className={styles.featureSectionCardImg}
                    src={card.img}
                    alt={card.desc}
                  />
                </div>
              </div>
            );
          })}
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

        {/* secure section  */}
        <section
          className={`${styles.secureSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.secureSectionHeading}>
            Secure. Compliant. <br /> A Payer Services Provider You Can Trust.
          </h2>
          <div className={`${styles.secureSectionImgList} d-flex flex-wrap`}>
            {secureSectionImgList.map((data, index) => {
              return (
                <div key={index} className={`${styles.secureSectionImgWrap}`}>
                  <Image
                    width={120}
                    height={120}
                    className={styles.secureSectionImg}
                    src={data.img}
                    alt={data.text}
                  />
                  <p className={styles.secureSectionImgText}>{data.text}</p>
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
            Not just a Payer Services provider, but a reliable business partner who works continuously to drive growth & operational efficiency through talent & tech-solutions
          </p>
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
        <section
          className={`${styles.ctaSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.ctaSectionHeading}>
            Reduce Healthcare Cost, Drive Cash Flow and Improve Member
            Experience <br /> <span>With SHAI</span>
          </h2>
          <DemoBtn />
        </section>
      </main>

      <Footer />
    </>
  );
}
