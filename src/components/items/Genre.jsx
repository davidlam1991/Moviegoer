export default function Genre({ data }) {
  const genreCount = {};
  data.forEach((row) => {
    const genres =
      row.Genres && row.Genres.includes(", ")
        ? row.Genres.split(", ")
        : [row.Genres];

    genres.forEach((genre) => {
      if (genre !== null && genre !== undefined) {
        const trimmedGenre = genre.trim();
        genreCount[trimmedGenre] = (genreCount[trimmedGenre] || 0) + 1;
      }
    });
  });

  let maxGenre = null;
  let maxCount = 0;

  Object.entries(genreCount).forEach(([genre, count]) => {
    if (count > maxCount) {
      maxCount = count;
      maxGenre = genre;
    }
  });

  return (
    <div className="item-genre">
      <p className="item-header" style={{ color: "#D9D9D9" }}>
        Most-watched genre
      </p>
      <p className="item-data" style={{ color: "#D9D9D9" }}>
        {maxGenre}
      </p>
    </div>
  );
}
