import { Card } from "../Helpers/Card";
import "./JoinClub.scss";

export const JoinTheClubSection = () => {
  return (
    <Card className={"join_club_section"}>
      <div className="about">
        <h3>Join the club and make your life healthy.</h3>

        <a href="#pricing">
          <button>Join Now</button>
        </a>
      </div>
    </Card>
  );
};
