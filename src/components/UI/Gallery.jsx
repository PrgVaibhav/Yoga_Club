import { Card } from "../Helpers/Card";
import "./Gallery.scss";

import galleryImage from "../../assets/yoga_club.avif";
import galleryImage2 from "../../assets/yoga_room2.avif";
import galleryImage3 from "../../assets/yoga_room3.avif";
import galleryImage4 from "../../assets/yoga_room4.avif";
import galleryImage5 from "../../assets/yoga_room5.avif";
import galleryImage6 from "../../assets/yoga_room.avif";

const imageData = [
  {
    id: 1,
    imgUrl: galleryImage,
  },
  {
    id: 2,
    imgUrl: galleryImage2,
  },
  {
    id: 3,
    imgUrl: galleryImage3,
  },
  {
    id: 4,
    imgUrl: galleryImage4,
  },
  {
    id: 5,
    imgUrl: galleryImage5,
  },
  {
    id: 6,
    imgUrl: galleryImage6,
  },
];

export const Gallery = () => {
  return (
    <Card className={"gallery_section"}>
      <Card type={"div"} className="top">
        <h3>Gallery 📸</h3>
      </Card>
      <Card type={"div"} className={"gallery_card"}>
        {imageData.map((data) => (
          <>
            <Card type={"div"} className={"card"} key={data.id}>
              <img src={data.imgUrl} alt="yoga gallery" />
            </Card>
          </>
        ))}
        <div className="card">
          <h3>...Come and see the beautiful club of ours 👀</h3>
        </div>
      </Card>
    </Card>
  );
};
