export async function generateMetadata() {
  return {
    title: "Hospitals Services - SHAI",
    description:
      "From data and cash flow management to reporting to clinical outcomes, SHAI takes care of patient and revenue cycle operations.",
    robots: "index, follow",

    alternates: { canonical: "https://shai.health/services/hospitals" },

    openGraph: {
      title: "Hospitals Services - SHAI",
      description:
        "From data and cash flow management to reporting to clinical outcomes, SHAI takes care of patient and revenue cycle operations.",
      url: "https://shai.health/services/hospitals",
    },
  };
}

import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import TextAnimation from "@/components/home/textAnimation/textAnimation";
import CardList from "@/components/hospitals/cardList/cardList";
import Image from "next/image";
import analyticsSectionImg from "@/../public/images/hospitals/analyticsSectionImg.webp";
import tickIcon from "@/../public/images/tickIcon.svg";
import maintainSectionImg from "@/../public/images/hospitals/maintainSectionImg.webp";
import recoveredSectionImg from "@/../public/images/hospitals/recoveredSectionImg.webp";
import howSectionCardImg from "@/../public/images/home/howSectionCardImg.webp";
import HeroSectionImgWrap from "@/components/hospitals/heroSectionImgWrap/heroSectionImgWrap";
import DemoBtn from "@/components/demoBtn";

export default function Hospitals() {
  const featureSection = [
    {
      heading: "Streamline Cash Flow Without the Manual Work",
      headingWidth: "440px",
      desc: "SHAI manages your patient-to-payment workflow, making it easier to collect cash, reduce denials, and minimize AR days.",
      descWidth: "100%",
      pointList: [
        {
          icon: "/images/hospitals/featureSectionIcon11.svg",
          heading: "Payments",
          desc: "Processing, posting, and record-keeping"
        },
        {
          icon: "/images/hospitals/featureSectionIcon12.svg",
          heading: "Status",
          desc: "Conducts denial analysis and adjustments"
        },
        {
          icon: "/images/hospitals/featureSectionIcon13.svg",
          heading: "Patient Process",
          desc: "Handles appeals, resubmissions, and reconciliation"
        },
        {
          icon: "/images/hospitals/featureSectionIcon14.svg",
          heading: "Cash Flow",
          desc: "Takes care of billing, collection, and AR management"
        },
      ],
      img: "/images/hospitals/featureSectionImg1.webp"
    },
    {
      heading: "Reports and Dashboards to Maximize Performance",
      headingWidth: "440px",
      desc: "Track financial health, identify and address gaps, and optimize outcomes with data.",
      descWidth: "440px",
      pointList: [
        {
          icon: "/images/hospitals/featureSectionIcon21.svg",
          heading: "Revenue",
          desc: "Financial, claims, and payment reports"
        },
        {
          icon: "/images/hospitals/featureSectionIcon22.svg",
          heading: "Performance",
          desc: "KPI reports, provider and specialty-focused reports"
        },
        {
          icon: "/images/hospitals/featureSectionIcon23.svg",
          heading: "Risk",
          desc: "Compliance, regulatory, and AR age reports"
        },
        {
          icon: "/images/hospitals/featureSectionIcon24.svg",
          heading: "Payment",
          desc: "Claims, denials, and reconciliation reports"
        },
      ],
      img: "/images/hospitals/featureSectionImg2.webp"
    },
  ]

  const analyticsSection = [
    [
      {
        icon: "/images/hospitals/analyticsSectionPointIcon1.svg",
        text: "Revenue Forecasting Analytics",
      },
    ],
    [
      {
        icon: "/images/hospitals/analyticsSectionPointIcon2.svg",
        text: "Payment Variance and Trend Analytics",
      },
      {
        icon: "/images/hospitals/analyticsSectionPointIcon3.svg",
        text: "Operational Workflow Analytics",
      },
    ],
    [
      {
        icon: "/images/hospitals/analyticsSectionPointIcon4.svg",
        text: "Payer Behavior Analytics",
      },
      {
        icon: "/images/hospitals/analyticsSectionPointIcon5.svg",
        text: "Value-Based Care Analytics",
      },
    ],
    [
      {
        icon: "/images/hospitals/analyticsSectionPointIcon6.svg",
        text: "Provider Performance Analytics",
      },
      {
        icon: "/images/hospitals/analyticsSectionPointIcon7.svg",
        text: "Prescription Priority Analytics",
      },
      {
        icon: "/images/hospitals/analyticsSectionPointIcon8.svg",
        text: "Denials Root Cause Analytics",
      },
    ],
  ]

  const maintainSectionPointList = [
    "Ensure prior authorization",
    "Care Coordination",
    "Case Management",
    "Audit utilization, medical necessity, and clinical coding",
    "Handle Chronic Care Management (CCM)"
  ]
  
  const recoveredSectionPointList = [
    {
      icon: "/images/hospitals/recoveredSectionPointListIcon1.svg",
      heading: "Challenge",
      pointIcon: "/images/hospitals/recoveredSectionPointIcon1.svg",
      pointList: [
        "30k denied claims",
        "Capacity issues",
        "Inefficient process across paper and EDI"
      ]
    },
    {
      icon: "/images/hospitals/recoveredSectionPointListIcon2.svg",
      heading: "SHAI’s Solution",
      pointIcon: "/images/hospitals/recoveredSectionPointIcon2.svg",
      pointList: [
        "Claim prioritization",
        "Resource mobilization for quick resolutions and refilling",
        "Dedicated process to pull medical records from EMR for refiling",
        "Isolated duplicates for write-off and adjustment"
      ]
    },
    {
      icon: "/images/hospitals/recoveredSectionPointListIcon3.svg",
      heading: "The Result",
      pointIcon: "/images/hospitals/recoveredSectionPointIcon3.svg",
      pointList: [
        "<3 week closure time",
        "$2M recovered",
        "Repeatable process for high velocity in claims resolution"
      ]
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
        {/* hero section  */}
        <section className={styles.heroSectionWrap}>
          <div className={`${styles.heroSection} d-flex align-items-center`}>
            <div className={styles.heroSectionLeft}>
              <p className={styles.heroSectionTitle}>SHAI FOR HOSPITALS</p>
              <h1 className={`${styles.heroSectionHeading} ${styles.heroSectionHeading1}`}>
                Helping Hospital Networks
              </h1>
              <h1 className={`${styles.heroSectionHeading} ${styles.heroSectionHeading2}`}>
                <TextAnimation
                  textList={[
                    "Maximize Collections",
                    "Minimize Denials",
                    "Drive Cash Flow",
                  ]}
                />
              </h1>
              <p className={styles.heroSectionDesc}>From data and cash flow management to reporting to clinical outcomes, SHAI takes care of patient and revenue cycle operations.</p>
              <DemoBtn />
            </div>
            <div className={styles.heroSectionRight}>
              <HeroSectionImgWrap />
            </div>
          </div>
        </section>

        {/* card section */}
        <section className={`${styles.cardSection}`}>
          <CardList />
        </section>

        {/* feature section  */}
        <section className={`${styles.featureSection} d-flex flex-column align-items-center`}>
          {
            featureSection.map((card, index)=>{
              return(
                <div key={index} className={`${styles.featureSectionCard} ${index % 2 === 1 ? styles.featureSectionCardRef : ""} d-flex align-items-center`}>
                  <div className={styles.featureSectionCardLeft}>
                    <h2 style={{maxWidth: card.headingWidth}} className={styles.featureSectionCardHeading}>{card.heading}</h2>
                    <p style={{maxWidth: card.descWidth}} className={styles.featureSectionCardDesc}>{card.desc}</p>
                    <div className={`${styles.featureSectionCardPointList} d-flex flex-wrap`}>
                      {
                        card.pointList.map((point, index)=>{
                          return(
                            <div key={index} className={styles.featureSectionCardPoint}>
                              <div className="d-flex align-items-center">
                                <Image width={16} height={16} className={styles.featureSectionCardPointIcon} src={point.icon} alt={point.heading} />
                                <p className={styles.featureSectionCardPointHeading}>{point.heading}</p>
                              </div>
                              <p className={styles.featureSectionCardPointDesc}>{point.desc}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className={styles.featureSectionCardRight}>
                    <Image width={580} height={550} className={styles.featureSectionCardImg} src={card.img} alt={card.heading} />
                  </div>
                </div>
              )
            })
          }
        </section>

        {/* analytics section  */}
        <section className={`${styles.analyticsSection} d-flex flex-column align-items-center`}>
          <h2 className={styles.analyticsSectionHeading}>Analytics For Deeper Visibility Into Bottlenecks and Revenue Attainment</h2>
          <p className={styles.analyticsSectionDesc}>Drill down into insights that reduce healthcare cost, improve cash flow, and minimize admin.</p>
          <div className={styles.analyticsSectionImgWrap}>
            <Image className={styles.analyticsSectionImg} src={analyticsSectionImg} alt="Analytics For Deeper Visibility Into Bottlenecks and Revenue Attainment" />
            {
              analyticsSection.map((pointList, index)=>{
                return (
                  <div key={index} className={`${styles.analyticsSectionPointList} ${styles[`analyticsSectionPointList${index+1}`]} d-flex flex-column`}>
                    {
                      pointList.map((point, index2)=>{
                        return(
                          <div key={index2} className={`${styles.analyticsSectionPoint} d-flex align-items-center`}>
                            <Image width={20} height={20} className={styles.analyticsSectionPointIcon} src={point.icon} alt={point.text} />
                            <p className={styles.analyticsSectionPointText}>{point.text}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* maintain section  */}
        <section className={styles.maintainSectionWrap}>
          <div className={`${styles.maintainSection} d-flex align-items-center`}>
            <div className={styles.maintainSectionLeft}>
              <h2 className={styles.maintainSectionHeading}>Review, Improve, and Codify Your Clinical Operations</h2>
              <p className={styles.maintainSectionDesc}>Maintain clinical records, reduce risk, and drive clinical outcomes.</p>
              <div className={`${styles.maintainSectionPointList} d-flex flex-column`}>
                {
                  maintainSectionPointList.map((point, index)=>{
                    return(
                      <div key={index} className={`${styles.maintainSectionPoint} d-flex align-items-center`}>
                        <Image width={20} height={20} className={styles.maintainSectionPointIcon} src={tickIcon} alt="tick icon" />
                        <p className={styles.maintainSectionPointText}>{point}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className={styles.maintainSectionRight}>
              <Image className={styles.maintainSectionImg} src={maintainSectionImg} alt="Review, Improve, and Codify Your Clinical Operations" />
            </div>
          </div>
        </section>

        {/* recovered section  */}
        <section className={styles.recoveredSectionWrap}>
          <div className={`${styles.recoveredSection} d-flex align-items-center`}>
            <div className={styles.recoveredSectionLeft}>
              <Image className={styles.recoveredSectionImg} src={recoveredSectionImg} alt="How One California Based Hospital Network Recovered $2M From Denied Claims With SHAI" />
            </div>
            <div className={styles.recoveredSectionRight}>
              <h2 className={styles.recoveredSectionHeading}>How One California Based Hospital Network <span>Recovered $2M</span> From Denied Claims With SHAI</h2>
              <div className={styles.recoveredSectionPointListOuterWrap}>
                <div className={`${styles.recoveredSectionPointListWrap} d-flex flex-column`}>
                  <div className={styles.recoveredSectionPointListLine}></div>
                  {
                    recoveredSectionPointList.map((pointList, index)=>{
                      return(
                        <div key={index} className={`${styles[`recoveredSectionPointList${index+1}`]}`}>
                          <div className="d-flex align-items-center">
                            <Image width={28} height={28} className={styles.recoveredSectionPointListHeadIcon} src={pointList.icon} alt={pointList.heading} />
                            <p className={styles.recoveredSectionPointListHeadText}>{pointList.heading}</p>
                          </div>
                          <div className={`${styles.recoveredSectionPointInnerList} d-flex flex-column`}>
                            {
                              pointList.pointList.map((point, index)=>{
                                return (
                                  <div key={index} className={`d-flex align-items-center`}>
                                    <Image width={12} height={12} className={styles.recoveredSectionPointIcon} src={pointList.pointIcon} alt={point} />
                                    <p className={styles.recoveredSectionPoint}>{point}</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
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

        {/* secure section  */}
        <section
          className={`${styles.secureSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.secureSectionHeading}>
            Secure. Compliant. <br /> A Hospital Services Provider You Can Trust.
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
            Not just a Hospital Services provider, but a reliable business partner who works continuously to drive growth & operational efficiency through talent & tech-solutions
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
            Drive Operational Efficiency, Improve Coding Accuracy And Maximize Hospital Cash Flow <br /> <span>With SHAI</span>
          </h2>
          <DemoBtn />
        </section>
      </main>

      <Footer />
    </>
  )
}