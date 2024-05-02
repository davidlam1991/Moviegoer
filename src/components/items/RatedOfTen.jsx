export default function RatedOfTen({ data }) {
  const tenRatedMovies = data.reduce((count, movie) => {
    if (movie["Your Rating"] === 10) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div className="item-ten">
      <p className="item-header" style={{ color: "#D9D9D9" }}>
        Number of Movies <br />
        Rated Ten
      </p>
      <p className="item-data" style={{ color: "#D9D9D9" }}>
        {tenRatedMovies}
      </p>
    </div>
  );
}
