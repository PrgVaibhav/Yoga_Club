import { Card } from "../Helpers/Card";
import "./Trainers.scss";

import userImage from "../../assets/user.avif";
import userImage2 from "../../assets/user-1.avif";
import userImage3 from "../../assets/user-2.avif";
import userImage4 from "../../assets/user-3.avif";
import userImage5 from "../../assets/user-4.avif";
import userImage6 from "../../assets/user-5.avif";

const TrainerData = [
  {
    id: 1,
    imgURL: userImage,
    trainerName: "Leonard Odonnell",
    contact: "@Leonard",
  },
  {
    id: 2,
    imgURL: userImage2,
    trainerName: "Aaron Meyer",
    contact: "@Aaron",
  },
  {
    id: 3,
    imgURL: userImage3,
    trainerName: "Damian Peck",
    contact: "@Damian",
  },
  {
    id: 4,
    imgURL: userImage4,
    trainerName: "Albert Fitzpatrick",
    contact: "@Albert",
  },
  {
    id: 5,
    imgURL: userImage5,
    trainerName: "Camilla Dotson",
    contact: "@Camilla",
  },
  {
    id: 6,
    imgURL: userImage6,
    trainerName: "Mahnoor Mcmahon",
    contact: "@Mahnooor",
  },
];

export const Trainers = () => {
  return (
    <Card className={"trainer_container"}>
      <Card type={"div"} className={"heading"}>
        <h3>Meet Our Team 💪</h3>
      </Card>

      <Card type={"div"} className={"trainer_container_card"}>
        {TrainerData.map((data) => (
          <Card type={"div"} className={"trainer_card"} key={data.id}>
            <img src={data.imgURL} alt="trainer of yoga world" />
            <div className="details">
              <p>{data.trainerName}</p>
              <p className="contact">{data.contact}</p>
            </div>
          </Card>
        ))}
      </Card>
    </Card>
  );
};
