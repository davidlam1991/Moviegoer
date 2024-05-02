export default function HoursSpent({ data }) {
  const totalMinutes = data.reduce((total, movie) => {
    const runtime = parseFloat(movie["Runtime (mins)"]);

    if (!isNaN(runtime)) {
      return total + runtime;
    }

    return total;
  }, 0);
  const totalHours = (totalMinutes / 60).toFixed(0);

  return (
    <div className="item-hours">
      <p className="item-header" style={{ color: "#D9D9D9" }}>
        Movie Viewing Hours
      </p>
      <div style={{ color: "#D7FF64" }}>
        <p className="item-data">{totalHours}</p>
        <p className="item-quantifier">HOURS</p>
      </div>
    </div>
  );
}
