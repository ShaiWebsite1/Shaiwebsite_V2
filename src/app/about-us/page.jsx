export async function generateMetadata() {
  return {
    title: "SHAI Global Analytics",
    description:
      "Helping healthcare companies improve revenue, reduce administrative overhead, and enhance customer experience and satisfaction. From enrollment to settlement, and from visit to collections, SHAI combines healthcare expertise with advanced technology to accelerate growth for both payers and providers.",
    robots: "index, follow",

    alternates: { canonical: "https://shai.health/about-us" },

    openGraph: {
      title: "SHAI Global Analytics",
      description:
        "Helping healthcare companies improve revenue, reduce administrative overhead, and enhance customer experience and satisfaction. From enrollment to settlement, and from visit to collections, SHAI combines healthcare expertise with advanced technology to accelerate growth for both payers and providers.",
      url: "https://shai.health/about-us",
    },
  };
}

import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import heroSectionImg from "@/../public/images/about-us/heroSectionImg.webp";
import howSectionCardImg from "@/../public/images/home/howSectionCardImg.webp";
import TeamSectionCardList from "@/components/about-us/teamSectionCardList/teamSectionCardList";
import DemoBtn from "@/components/demoBtn";

export default function AboutUs() {
  const featureSectionCardList = [
    {
      heading: "People",
      desc: "Unparalleled expertise in End-to End RCM, Billing, Utilization Management, and claims management, combined with multi-specialty clinical experience and certified coding knowledge, in each of our 400+ medical coders.",
      img: "/images/about-us/featureSectionCardImg1.webp"
    },
    {
      heading: "Process",
      desc: "SHAI understands your process objectives, conducts in-depth analysis to identify gaps, and ensures seamless knowledge transfer. Then, we enable transformation in phases with preset milestones while optimizing outputs to align with leadership, management, and business objectives.",
      img: "/images/about-us/featureSectionCardImg2.webp"
    },
    {
      heading: "Technology",
      desc: "SHAI leverages the latest automation tools and AI workflows to drive productivity, predict denials,  improve accuracy, minimize AR days, and maximize cash collections- all while ensuring data security and privacy.",
      img: "/images/about-us/featureSectionCardImg3.webp"
    },
  ]

  const qualitySectionPointList = [
    "Refresher Sessions and 1:1 Training",
    "Weekly EBTs (Error-Based Trainings) and PKTs (Process Knowledge Tests)",
    "RCA, 5 Whys, Fishbone Analysis, Pareto Chart, and CAPA (Corrective Action Preventive Action)",
    "Proactive Daily Team Huddles With Peer Audits",
    "Periodic Calibrations For Error-Based Improvement"
  ]

  const whySectionCardList = [
    {
      icon: "/images/about-us/whySectionCardIcon1.svg",
      desc: "Decades of healthcare expertise combined with new-age technology",
    },
    {
      icon: "/images/about-us/whySectionCardIcon2.svg",
      desc: "The ideal mix of skilled talent, process excellence and stable infrastructure that is scalable",
    },
    {
      icon: "/images/about-us/whySectionCardIcon3.svg",
      desc: "Services that go beyond tasks to co-creating strategic value with flexible engagement models and client-first mindset",
    },
    {
      icon: "/images/about-us/whySectionCardIcon4.svg",
      desc: "High-impact solutions that don’t just deliver surface-level value but influence your top line.",
    },
    {
      icon: "/images/about-us/whySectionCardIcon5.svg",
      desc: "Active collaboration with payers, providers and tech partners to deliver future-ready solutions",
    },
    {
      icon: "/images/about-us/whySectionCardIcon6.svg",
      desc: "Enterprise-ready solutions for the US healthcare ecosystem with relentless focus on security and privacy",
    },
  ]

  const legacySectionCardList = [
    {
      text: <>Established as <span>Nittany Decision Services (NDS)</span> serving as captive unit for a group of physicians out of PA</>,
      year: "1995"
    },
    {
      text: <>Rebranded as Nittany outsourcing services. <span>Working with Medical billing companies and Indus BPO</span> for Medicare HMO payer business providing end to end services including Medical coding</>,
      year: "2001"
    },
    {
      text: <>RCM Businesses sold to e4e. <span>Set up Nittany Institute</span> of BPO Management</>,
      year: "2006"
    },
    {
      text: <>Reestablished as <span>Synthesis Healthcare Services</span> to provide high end medical coding and audit services for both Payer and Provider business</>,
      year: "2008"
    },
    {
      text: <>100% of Synthesis Healthcare was acquired and <span>rebranded as “SHAI”</span> an acronym for Synthesis Healthcare And Infosystems</>,
      year: "2022"
    },
  ]

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
              <h1 className={styles.heroSectionHeading}>About SHAI</h1>
              <p className={styles.heroSectionDesc}>Our mission is simple: to empower every healthcare organization to bring out industry best services and achieve business objectives by bringing best of people and technology</p>
              <h2 className={styles.heroSectionSubHeading}><span>S</span>ynthesising <span>H</span>uman and <span>A</span>rtificial <span>I</span>ntelligence</h2>
              <DemoBtn />
            </div>
            <div className={styles.heroSectionRight}>
              <Image className={styles.heroSectionImg} src={heroSectionImg} alt="About SHAI" />
            </div>
          </div>
        </section>

        {/* feature section  */}
        <section className={`${styles.featureSection} d-flex flex-column align-items-center`}>
          <h2 className={styles.featureSectionHeading}>What We Do</h2>
          <div className={`${styles.featureSectionCardList} d-flex flex-column`}>
            {
              featureSectionCardList.map((card, index)=>{
                return (
                  <div key={index} className={`${styles.featureSectionCard} ${index % 2 === 1 ? styles.featureSectionCardRev : ""} d-flex align-items-center`}>
                    <div className={styles.featureSectionCardLeft}>
                      <h3 className={styles.featureSectionCardHeading}>{card.heading}</h3>
                      <p className={styles.featureSectionCardDesc}>{card.desc}</p>
                    </div>
                    <div className={`${styles.featureSectionCardRight} d-flex justify-content-center`}>
                      <Image width={480} height={330} className={styles.featureSectionCardImg} src={card.img} alt={card.heading} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* quality section  */}
        <section className={`${styles.qualitySectionWrap} d-flex justify-content-center`}>
          <div className={`${styles.qualitySection} d-flex align-items-center`}>
            <div className={`${styles.qualitySectionLeft} d-flex justify-content-center`}>
              <Image className={styles.qualitySectionImg} src={howSectionCardImg} alt="Quality Assurance Methodology" />
            </div>
            <div className={styles.qualitySectionRight}>
              <h2 className={styles.qualitySectionHeading}>Quality Assurance Methodology</h2>
              <div className={`${styles.qualitySectionPointList} d-flex flex-column`}>
                {
                  qualitySectionPointList.map((point, index)=>{
                    return (
                      <div key={index} className={`${styles.qualitySectionPoint} d-flex align-items-center`}>
                        <svg className={styles.qualitySectionPointIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M4.92896 11.9999H19.0711M19.0711 11.9999L12.7071 5.63599M19.0711 11.9999L12.7071 18.3639" stroke="#E43F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className={styles.qualitySectionPointText}>{point}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>

        {/* why section  */}
        <section className={`${styles.whySection} d-flex flex-column align-items-center`}>
          <h2 className={styles.whySectionHeading}>Why Choose SHAI Over Other Healthcare Services?</h2>
          <div className={`${styles.whySectionCardList} d-flex flex-wrap`}>
            {
              whySectionCardList.map((card, index)=>{
                return(
                  <div key={index} className={styles.whySectionCard}>
                    <Image width={48} height={48} className={styles.whySectionCardIcon} src={card.icon} alt={card.desc} />
                    <p className={styles.whySectionCardDesc}>{card.desc}</p>
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* legacy section  */}
        <section className={`${styles.legacySection} d-flex flex-column align-items-center`}>
          <h2 className={styles.legacySectionHeading}>A Strong Legacy in the US Healthcare Market with Decades of Expertise</h2>
          <div className={`${styles.legacySectionTimeLine} d-flex flex-column`}>
            <div className={styles.legacySectionCenterLine}></div>
            {
              legacySectionCardList.map((card, index)=>{
                const rev = index % 2 === 1 ? true : false;
                return (
                  <div key={index} className={`${styles.legacySectionCard} ${rev ? styles.legacySectionCardRev : ""} d-flex`}>
                    <div className={`${styles.legacySectionCardLeft} ${rev ? "justify-content-end" : "justify-content-start"} d-flex`}>
                      <div className={styles.legacySectionCardBox}>
                        <p className={styles.legacySectionCardBoxText}>{card.text}</p>
                        <svg className={`${styles.legacySectionCardBoxArrow} ${rev ? styles.legacySectionCardBoxArrowRev : ""}`} xmlns="http://www.w3.org/2000/svg" width="21" height="39" viewBox="0 0 21 39" fill="none">
                          <path d="M19.7278 18.0798C20.4443 18.848 20.4443 20.0397 19.7278 20.8079L3.46261 38.2478C2.22429 39.5756 -7.08311e-08 38.6993 8.53149e-09 36.8837L1.53317e-06 2.00398C1.61254e-06 0.188374 2.22429 -0.687885 3.46262 0.639878L19.7278 18.0798Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                    <div className={styles.legacySectionCardRight}>
                      <p className={styles.legacySectionYear}>{card.year}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* team section */}
        <section className={`${styles.teamSection} d-flex flex-column align-items-center`}>
          <h2 className={styles.teamSectionHeading}>Meet the Team Behind SHAI</h2>
          <TeamSectionCardList />
        </section>

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
          <h2 className={styles.ctaSectionHeading}>Maximize Revenue, Minimize Cost, and Deliver World-Class Healthcare <span>With SHAI</span></h2>
          <DemoBtn />
        </section>
      </main>

      <Footer />
    </>
  )
}