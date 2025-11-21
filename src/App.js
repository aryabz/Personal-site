import { ReactTyped } from "react-typed";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function App() {
  return (
    <>
      <nav>
        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png" alt="" />
        <div className="menu">
          <i class="bi bi-list"></i>
        </div>
      </nav>
      <div className="header">

        <h1>hi , I'm &nbsp;
          <span style={{ color: "red" }}>
            <ReactTyped
              strings={[`aryabz`, " AryaBarzegar"]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </span>
        </h1>
        <h1 style={{ color: "#007E6E" }}>mern stack developer</h1>
      </div>
    </>
  )
}