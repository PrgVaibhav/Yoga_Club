import { FaMapPin } from "react-icons/fa";

import { Card } from "../Helpers/Card";
import { Yoga } from "../../data/YogaData";
import logo from "../../assets/yoga_logo.png";
import "./HeroSection.scss";

export const HeroSection = () => {
  return (
    <Card className="hero_section">
      <div className="hero_section_left">
        <div className="img">
          <img src={logo} alt="logo of company" />
          <p>
            <span>Yoga</span> <span className="world">World</span>
          </p>
        </div>
        <div className="description">
          <p>
            Visit the world of Yoga with us, come and take live classes of yoga
            online or offline. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            placeat eveniet ipsum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
          <button className="btn">Learn More </button>
        </div>
      </div>
      <div className="hero_section_right">
        <div className="cards">
          {Yoga.map((data) => (
            <div className="card" key={data.id}>
              {/* <span className="circle"></span> */}
              <FaMapPin className="icon" />
              <h3>{data.title}</h3>
              <p>{data.smallDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
