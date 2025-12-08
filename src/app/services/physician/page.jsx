export async function generateMetadata() {
  return {
    title: "Physician Services - SHAI",
    description:
      "SHAI understands revenue cycle gaps in your physician practice, analyzes denials and rejections, and fixes issues across your revenue cycle, leading to improved physician collections.",
    robots: "index, follow",

    alternates: { canonical: "https://shai.health/services/physician" },

    openGraph: {
      title: "Physician Services - SHAI",
      description:
        "SHAI understands revenue cycle gaps in your physician practice, analyzes denials and rejections, and fixes issues across your revenue cycle, leading to improved physician collections.",
      url: "https://shai.health/services/physician",
    },
  };
}

import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import TextAnimation from "@/components/home/textAnimation/textAnimation";
import HeroSectionImgWrap from "@/components/physician/heroSectionImgWrap/heroSectionImgWrap";
import Image from "next/image";
import howSectionCardImg from "@/../public/images/home/howSectionCardImg.webp";
import graphSectionImg from "@/../public/images/physician/graphSectionImg.webp";
import DemoBtn from "@/components/demoBtn";

export default function Physician() {
  const featureSectionCardList = [
    {
      heading: (
        <>SHAI Enables Trust and Streamlines Intake</>
      ),
      headingWidth: "440px",
      type: 1,
      pointList: [
        {
          icon: "/images/physician/featureSectionIcon11.svg",
          heading: "Credentialing",
          desc: "SHAI ensures appropriate provider credentials are in place for faster onboarding and processing"
        },
        {
          icon: "/images/physician/featureSectionIcon12.svg",
          heading: "Eligibility Verification",
          desc: "SHAI confirms that all criteria are met before services are rendered"
        },
        {
          icon: "/images/physician/featureSectionIcon13.svg",
          heading: "Prior Auth",
          desc: "SHAI secures approvals quickly, minimizing delays and reducing costs"
        },
        {
          icon: "/images/physician/featureSectionIcon14.svg",
          heading: "Referrals",
          desc: "SHAI increases referral volume while strengthening relationships with insurance providers"
        },
      ],
      img: "/images/physician/featureSectionCardImg1.webp",
    },
    {
      heading: (
        <>SHAI Minimizes Revenue Leak</>
      ),
      headingWidth: "100%",
      type: 2,
      pointList: [
        "Handles claims submission and rejection management",
        "Takes care of payment posting and secondary submissions",
        "Checks credit balances and manages refunds",
        "Manages denials and reduces denial rate",
      ],
      img: "/images/physician/featureSectionCardImg2.webp",
    },
    {
      heading: <>SHAI Defines and Executes Next Steps On Behalf of Physicians</>,
      headingWidth: "527px",
      type: 2,
      pointList: [
        "Conducts AR follow-up",
        "Prepares and sends appeals",
        "Hands over patient statements",
        "Handles patient calls and self-pay collection",
      ],
      img: "/images/physician/featureSectionCardImg3.webp",
    },
    {
      heading: <>SHAI Leverages Talent and AI Tech to Improve First-Pass Rate</>,
      headingWidth: "510px",
      type: 3,
      pointList: [
        {
          icon: "/images/physician/featureSectionIcon41.svg",
          heading: "Talent",
          descList: [
            "Certified multi-specialty coders to improve accuracy",
            "Initiate provider contracting"
          ]
        },
        {
          icon: "/images/physician/featureSectionIcon42.svg",
          heading: "AI Tech",
          descList: [
            "Proprietary AI tech to reduce AR days",
            "AI spots and fixes all addressable denials"
          ]
        }
      ],
      img: "/images/physician/featureSectionCardImg4.webp",
    },
  ];

  const graphSectionCardList = [
    {
      heading: "Ophthalmology Specialty",
      descList: [
        "Reduced AR Days from 23 to 5",
        "Increased First-Pass Rate% from 85% to 97%",
        "Improved collections by 43%"
      ],
      img: "/images/physician/graphSectionCardImg1.webp",
      imgText: "Ophthalmology Specialty"
    },
    {
      heading: "Cardiovascular Specialty",
      descList: [
        "Reduced AR Days from 23 to 2",
        "Increased First-Pass Rate% from 68% to 95%",
        "Improved collections by 40%"
      ],
      img: "/images/physician/graphSectionCardImg2.webp",
      imgText: "Cardiovascular Specialty"
    },
    {
      heading: "Primary Care Specialty",
      descList: [
        "Reduced AR Days from 27 to 5",
        "Increased First-Pass Rate% from 66% to 88%",
        "Improved collections by 32%"
      ],
      img: "/images/physician/graphSectionCardImg3.webp",
      imgText: "Primary Care Specialty"
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
        {/* hero sectio  */}
        <section
          className={`${styles.heroSectionWrap} d-flex justify-content-center`}
        >
          <div className={`${styles.heroSection} d-flex align-items-center`}>
            <div className={styles.heroSectionLeft}>
              <p className={styles.heroSectionTitle}>PHYSICIAN SERVICES</p>
              <h1 className={`${styles.heroSectionHeading} ${styles.heroSectionHeading1}`}>
                Helping Physicians
              </h1>
              <h1 className={`${styles.heroSectionHeading} ${styles.heroSectionHeading2}`}>
                <TextAnimation
                  textList={[
                    "Increase Collections",
                    "Minimize AR Days",
                    "Accelerate Revenue Cycle Operations",
                  ]}
                />
              </h1>
              <p className={styles.heroSectionDesc}>
                SHAI understands revenue cycle gaps in your physician practice, analyzes denials and rejections, and fixes issues across your revenue cycle, leading to improved physician collections.
              </p>
              <DemoBtn />
            </div>
            <div className={styles.heroSectionRight}>
              <HeroSectionImgWrap />
            </div>
          </div>
        </section>

        {/* feature section  */}
        <section
          className={`${styles.featureSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.featureSectionHeading}>
            How SHAI Improves Physician Collections By 20% or more
          </h2>
          <div className={`${styles.featureSectionCardList} d-flex flex-column`}>
            {featureSectionCardList.map((card, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.featureSectionCard} ${
                    index % 2 === 1 ? styles.featureSectionCardRev : ""
                  } d-flex align-items-center`}
                >
                  <div className={styles.featureSectionCardLeft}>
                    <h2 className={styles.featureSectionCardHeading}>
                      {card.heading}
                    </h2>
                    
                      {
                        card.type === 1 ? (
                          <div
                            className={`${styles.featureSectionCardPointList1} d-flex flex-wrap`}
                          >
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
                        ) : card.type === 2 ? (
                          <div
                            className={`${styles.featureSectionCardPointList2} d-flex flex-wrap`}
                          >
                            {
                              card.pointList.map((point, index2) => {
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
                              })
                            }
                          </div>
                        ) : (
                          <div
                            className={`${styles.featureSectionCardPointList3} d-flex flex-wrap`}
                          >
                            {
                              card.pointList.map((point, index)=>{
                                return(
                                  <div key={index} className={styles.featureSectionCardPoint}>
                                    <div className="d-flex align-items-center">
                                      <Image width={16} height={16} className={styles.featureSectionCardPointIcon} src={point.icon} alt={point.heading} />
                                      <p className={styles.featureSectionCardPointHeading}>{point.heading}</p>
                                    </div>
                                    <div className={`${styles.featureSectionCardPointDescList} d-flex flex-column`}>
                                      {
                                        point.descList.map((desc, index)=>{
                                          return(
                                            <div key={index} className="d-flex align-items-start">
                                              <div className={styles.featureSectionCardPointDescIcon}></div>
                                              <p className={styles.featureSectionCardPointDesc}>{desc}</p>
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
                        )
                      }
                  </div>
                  <div
                    className={`${styles.featureSectionCardRight} d-flex justify-content-center`}
                  >
                    <Image
                      width={480}
                      height={330}
                      className={styles.featureSectionCardImg}
                      src={card.img}
                      alt={card.heading}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* graph section  */}
        <section className={`${styles.graphSection} d-flex flex-column align-items-center`}>
          <h2 className={styles.graphSectionHeading}>Demonstrable Outcomes <br /> In Maximizing Physician Revenue</h2>
          <Image className={styles.graphSectionImg} src={graphSectionImg} alt="graph" />
          <div className={`${styles.graphSectionCardList} d-flex`}>
            {
              graphSectionCardList.map((card, index)=>{
                return (
                  <div key={index} className={styles.graphSectionCard}>
                    <div className={styles.graphSectionCardContentWrap}>
                      <h3 className={styles.graphSectionCardHeading}>{card.heading}</h3>
                      <div className={`${styles.graphSectionCardDescList} d-flex flex-column`}>
                        {
                          card.descList.map((desc, index)=>{
                            return(
                              <div key={index} className="d-flex align-items-start">
                                <div className={styles.graphSectionCardDescIcon}></div>
                                <p className={`${styles.graphSectionCardDesc} ${styles[`graphSectionCardDesc${index+1}`]}`}>{desc}</p>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div className={styles.graphSectionCardImgWrap}>
                      <Image width={390} height={240} className={styles.graphSectionCardImg} src={card.img} alt={card.imgText} />
                      <h4 className={styles.graphSectionCardImgText}>{card.imgText}</h4>
                    </div>
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
        <section
          className={`${styles.ctaSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.ctaSectionHeading}>
            Minimize Risk and Maximize Cash Flow Through Value-Based Care Delivery <span>With SHAI</span>
          </h2>
          <DemoBtn />
        </section>
      </main>

      <Footer />
    </>
  );
}
