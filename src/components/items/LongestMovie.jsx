export default function LongestMovie({ data }) {
  const maxRunTime = Math.max(
    ...data.map((movie) => parseFloat(movie["Runtime (mins)"]) || 0)
  );
  const longestMovie = data.find(
    (movie) => parseFloat(movie["Runtime (mins)"]) === maxRunTime
  );
  const movieTitle = longestMovie.Title;

  let fontSize = "";
  if (movieTitle.length < 20) {
    fontSize = "60px";
  } else if (movieTitle.length >= 20 && movieTitle.length < 40) {
    fontSize = "50px";
  } else {
    fontSize = "40px";
  }

  return (
    <div className="item-longest">
      <p className="item-header" style={{ color: "#D9D9D9" }}>
        The longest movie I watched
      </p>
      <div style={{ color: "#D9D9D9" }}>
        <p className="item-data" style={{ fontSize: `${fontSize}` }}>
          {movieTitle}
        </p>
        <p className="item-quantifier">{maxRunTime} minutes</p>
      </div>
    </div>
  );
}
