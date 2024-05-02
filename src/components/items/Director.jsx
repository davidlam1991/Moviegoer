export default function Director({ data }) {
  const directorCount = {};
  data.forEach((row) => {
    const directors =
      row.Directors && row.Directors.includes(", ")
        ? row.Directors.split(", ")
        : [row.Directors];
    directors.forEach((director) => {
      if (director !== null && director !== undefined) {
        const trimmedDirector = director.trim();
        directorCount[trimmedDirector] =
          (directorCount[trimmedDirector] || 0) + 1;
      }
    });
  });

  let maxDirector = null;
  let maxCount = 0;

  Object.entries(directorCount).forEach(([director, count]) => {
    if (count > maxCount) {
      maxCount = count;
      maxDirector = director;
    }
  });

  return (
    <div className="item-director">
      <p className="item-header" style={{ color: "#173B56" }}>
        The director whose movies you've watched the most
      </p>
      <p className="item-data" style={{ color: "#173B56" }}>
        {maxDirector}
      </p>
    </div>
  );
}
