export async function generateMetadata() {
  return {
    title: "SHAI Global Analytics",
    description:
      "Helping healthcare companies improve revenue, reduce administrative overhead, and enhance customer experience and satisfaction. From enrollment to settlement, and from visit to collections, SHAI combines healthcare expertise with advanced technology to accelerate growth for both payers and providers.",
    robots: "index, follow",

    alternates: { canonical: "https://shai.health/" },

    openGraph: {
      title: "SHAI Global Analytics",
      description:
        "Helping healthcare companies improve revenue, reduce administrative overhead, and enhance customer experience and satisfaction. From enrollment to settlement, and from visit to collections, SHAI combines healthcare expertise with advanced technology to accelerate growth for both payers and providers.",
      url: "https://shai.health/",
    },
  };
}

import Image from "next/image";
import styles from "./page.module.css";
import HeroSectionImgWrap from "@/components/home/heroSectionImgWrap/heroSectionImgWrap";
import howSectionCardImg from "@/../public/images/home/howSectionCardImg.webp";
import TextAnimation from "@/components/home/textAnimation/textAnimation";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import GlimpseSectionToggle from "@/components/home/glimpseSectionToggle/glimpseSectionToggle";
import DemoBtn from "@/components/demoBtn";

export default function Home() {
  const featureSectionCardList = [
    {
      img: "/images/home/featureSectionCardImg1.webp",
      heading: "SHAI For Providers",
      desc: "Drive operational efficiency, speed up claims submission, reduce denials, improve cash flow, and report on financial health.",
    },
    {
      img: "/images/home/featureSectionCardImg2.webp",
      heading: "SHAI For Payers",
      desc: "Manage enrollment to settlement. Improve member experience, lower cost, manage risk, and transition to outcome-based services.",
    },
  ];

  const serviceSectionCardList = [
    {
      link: "/services/physician",
      img: "/images/home/serviceSectionCardImg2.webp",
      imgText: "Physician Services",
      desc: "End-to-end billing support—from demographics entry and prior auth to denial management and collections —driving faster payments and higher First Pass Rates",
    },
    {
      link: "/services/hospitals",
      img: "/images/home/serviceSectionCardImg1.webp",
      imgText: "Hospital Services",
      desc: "Accurate multi-specialty coding—from clinical documentation and facility coding to claims submission—ensuring clean AR and denial prevention",
    },
    {
      link: "/services/value-based-care",
      img: "/images/home/serviceSectionCardImg3.webp",
      imgText: "Value-Based Care Services",
      desc: "Risk adjustment made seamless—from intake of charts and chart reviews to HCC coding and CMS submission—backed by rigorous audits",
    },
    {
      link: "/services/payers",
      img: "/images/home/serviceSectionCardImg4.webp",
      imgText: "Payer Services",
      desc: "Optimize operations—from enrollment and eligibility to claims adjudication and credentialing—ensuring compliance and fewer disputes",
    },
    {
      link: "/services/clinical",
      img: "/images/home/serviceSectionCardImg5.webp",
      imgText: "Clinical Services",
      desc: "SHAI delivers end-to-end clinical services that improve compliance, reduce claim denials, and help reduce rising healthcare administrative costs.",
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
      desc: "Healthcare Business  Audit",
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
        <section
          className={`${styles.heroSectionWrap} d-flex justify-content-center`}
        >
          <div className={`${styles.heroSection} d-flex align-items-center`}>
            <div className={styles.heroSectionLeft}>
              <p className={styles.heroSectionTitle}>
                TRUSTED OUTSOURCING PARTNER IN HEALTHCARE
              </p>
              <h1 className={`${styles.heroSectionHeading} ${styles.heroSectionHeading1}`}>
                Helping Healthcare Companies
              </h1>
              <h1 className={`${styles.heroSectionHeading} ${styles.heroSectionHeading2}`}>
                <TextAnimation
                  textList={[
                    "Drive Customer Experience/Satisfaction",
                    "Reduce Admin Overhead",
                    "Improve Revenue",
                  ]}
                />
              </h1>
              <p className={styles.heroSectionDesc}>
                SHAI combines healthcare expertise with new-age technology to accelerate growth for both Providers & Payers.
              </p>
              <DemoBtn />
            </div>
            <div className={styles.heroSectionRight}>
              <HeroSectionImgWrap />
            </div>
          </div>
        </section>

        {/* feature section */}
        <section
          className={`${styles.featureSection} d-flex justify-content-center`}
        >
          <div className={`${styles.featureSectionCardList} d-flex`}>
            {featureSectionCardList.map((card, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.featureSectionCard} d-flex flex-column`}
                >
                  <div className={styles.featureSectionCardImgWrap}>
                    <Image
                      width={480}
                      height={284}
                      className={styles.featureSectionCardImg}
                      src={card.img}
                      alt={card.desc}
                    />
                  </div>
                  <div
                    className={`${styles.featureSectionCardContentWrap} d-flex flex-column justify-content-between`}
                  >
                    <div>
                      <h2 className={styles.featureSectionCardHeading}>
                        {card.heading}
                      </h2>
                      <p className={styles.featureSectionCardDesc}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* service section  */}
        <section
          className={`${styles.serviceSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.serviceSectionHeading}>
            SHAI’s Services Across the US Healthcare Landscape
          </h2>
          <div className={`${styles.serviceSectionCardList} d-flex flex-wrap justify-content-center`}>
            {serviceSectionCardList.map((card, index) => {
              return (
                <a
                  href={card.link}
                  key={index}
                  className={`${styles.serviceSectionCard} d-flex flex-column justify-content-between`}
                >
                  <div>
                    <div className={styles.serviceSectionCardImgWrap}>
                      <Image
                        width={275}
                        height={261}
                        className={styles.serviceSectionCardImg}
                        src={card.img}
                        alt={card.desc}
                      />
                      <h2 className={styles.serviceSectionCardImgText}>
                        {card.imgText}
                      </h2>
                    </div>
                    <p className={styles.serviceSectionCardDesc}>{card.desc}</p>
                  </div>
                  <div
                    className={`${styles.serviceSectionCardLM} d-flex align-items-center`}
                  >
                    <p className={styles.serviceSectionCardLMText}>
                      Learn More
                    </p>
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* glimpse section  */}
        <section
          className={`${styles.glimpseSection} d-flex flex-column align-items-center`}
        >
          <h2 className={styles.glimpseSectionHeading}>
            A Glimpse Under the Hood What We Do
          </h2>
          <GlimpseSectionToggle />
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
            Secure. Compliant. <br /> A Service Provider You can Trust.
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
            Not just a trusted healthcare solutions provider, but a reliable business partner who works continuously to drive growth & operational efficiency through talent and tech solutions
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
            Reduce Revenue Leak, Drive Cash Flow, and Improve the Quality of
            Care Delivery <br /> <span>With SHAI</span>
          </h2>
          <DemoBtn />
        </section>
      </main>

      <Footer />
    </>
  );
}
