export default function RatedOfOne({ data }) {
  const oneRatedMovie = data.reduce((count, movie) => {
    if (movie["Your Rating"] === 1) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div className="item-one">
      <p className="item-header" style={{ color: "#173B56" }}>
        Number of Movies
        <br /> Rated One
      </p>
      <p className="item-data" style={{ color: "#173B56" }}>
        {oneRatedMovie}
      </p>
    </div>
  );
}
