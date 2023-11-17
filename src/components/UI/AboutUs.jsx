import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EventIcon from "@mui/icons-material/Event";
import { Card } from "../Helpers/Card";
import "./AboutUs.scss";

const AboutData = [
  {
    id: 1,
    title: "Community",
    description:
      "Our active community of yoga enthusiasts is a sanctuary for those seeking balance, mindfulness, and physical vitality. Connect with like-minded individuals who share your passion for yoga.",
    icon: <PeopleIcon />,
  },
  {
    id: 2,
    title: "Events",
    description:
      "Experience the richness of our community through a variety of events. From workshops and retreats to themed classes and social gatherings, there's always something happening at our club.",
    icon: <EventIcon />,
  },
  {
    id: 3,
    title: "Membership",
    description:
      "Our club offers a welcoming space for individuals of all experience levels. Memberships are designed to cater to diverse needs, ensuring accessibility for everyone.",
    icon: <BookmarkAddedIcon />,
  },
  {
    id: 4,
    title: "Online & Offline Training",
    description:
      "Embrace the flexibility of our hybrid approach to training. Enjoy the convenience of online classes, allowing you to practice from the comfort of your home.",
    icon: <FitnessCenterIcon />,
  },
];

export const AboutUs = () => {
  return (
    <Card className={"about_us_section"}>
      <Card type={"div"} className={"heading"}>
        <h3>What We Offer?? ✨</h3>
      </Card>
      <Card type={"div"} className={"cards"}>
        {AboutData.map((data) => (
          <Card type={"div"} className={"card"} key={data.id}>
            <span className="icon">{data.icon}</span>

            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </Card>
        ))}
      </Card>
    </Card>
  );
};
