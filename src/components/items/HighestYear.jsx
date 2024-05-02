export default function Year({ data }) {
  const yearCount = {};

  data.forEach((row) => {
    if (row["Date Rated"]) {
      const year = row["Date Rated"].split("-")[0];
      yearCount[year] = (yearCount[year] || 0) + 1;
    }
  });

  let maxYear = null;
  let maxCount = 0;

  Object.entries(yearCount).forEach(([year, count]) => {
    if (count > maxCount) {
      maxCount = count;
      maxYear = year;
    }
  });

  return (
    <div className="item-hyear">
      <p className="item-header" style={{ color: "#173B56" }}>
        The year with the highest number of movies watched
      </p>
      <p className="item-data" style={{ color: "#173B56" }}>
        {maxYear}
      </p>
      <p className="item-quantifier" style={{ color: "#173B56" }}>
        {maxCount} movies
      </p>
    </div>
  );
}
