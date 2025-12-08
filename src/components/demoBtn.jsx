export default function DemoBtn() {
  return (
    <>
      <a href="/contact-us" className="demoBtnLink">
        <button className="primaryBtn d-flex align-items-center">
          TALK TO US
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
        </button>
      </a>
    </>
  )
}