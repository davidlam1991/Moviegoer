import stars from "../assets/img/graphic_stars.png";
import popcorn from "../assets/img/graphic_popcorn.png";
import popcorn1 from "../assets/img/graphic_popcorn1.png";
import popcorn2 from "../assets/img/graphic_popcorn2.png";
import filmRoll from "../assets/img/graphic_filmroll.png";

export default function TableImg() {
  return (
    <>
      <img
        src={stars}
        alt="Stars"
        style={{ position: "absolute", top: "10%", left: "10%" }}
      />
      <img
        src={popcorn}
        alt="popcorn"
        style={{ position: "absolute", top: "50%", left: "10%" }}
      />
      <img
        src={popcorn1}
        alt="popcorn1"
        style={{ position: "absolute", top: "10%", right: "20%" }}
      />
      <img
        src={popcorn2}
        alt="popcorn2"
        style={{ position: "absolute", top: "10%", right: "10%" }}
      />
      <img
        src={filmRoll}
        alt="filmRoll"
        style={{ position: "absolute", top: "50%", right: "10%" }}
      />
    </>
  );
}
