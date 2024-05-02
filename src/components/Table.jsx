import { Link, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";

import Title from "./items/Title";
import Director from "./items/Director";
import HoursSpent from "./items/HoursSpent";
import RatedOfOne from "./items/RatedOfOne";
import RatedOfTen from "./items/RatedOfTen";
import HighestYear from "./items/HighestYear";
import SameYear from "./items/SameYear";
import Genre from "./items/Genre";
import LongestMovie from "./items/LongestMovie";
import TableImg from "./TableImg";

export default function Table() {
  const location = useLocation();
  const data = location.state && location.state.imdbData;

  function handleCaptureScreen() {
    html2canvas(document.body).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = imgData;
      link.click();
    });
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="table">
      <div className="container">
        {/* {JSON.stringify(data)} */}
        <TableImg />
        <Title />
        <HoursSpent data={data} />
        <LongestMovie data={data} />
        <Director data={data} />
        <HighestYear data={data} />
        <RatedOfTen data={data} />
        <RatedOfOne data={data} />
        <SameYear data={data} />
        <Genre data={data} />
      </div>
      <div className="button-container">
        <Link to="/" className="link-button">
          <button type="button" className="playagain">
            Play Again
          </button>
        </Link>
        <button onClick={handleCaptureScreen} style={{ fontSize: "35px" }}>Save</button>
      </div>
    </div>
  );
}
