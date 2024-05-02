export default function SameYear({ data }) {
  const yearCount = {};

  data.forEach((row) => {
    const year = row.Year;

    yearCount[year] = (yearCount[year] || 0) + 1;
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
    <div className="item-syear">
      <p className="item-header" style={{ color: "#D7FF64" }}>
        Highest number of movies you watched from the same year
      </p>
      <p className="item-data" style={{ color: "#D7FF64" }}>
        {maxCount} movies
      </p>
      <p className="item-quantifier" style={{ color: "#D7FF64" }}>
        {maxYear}
      </p>
    </div>
  );
}
