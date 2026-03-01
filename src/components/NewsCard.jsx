function NewsCard({ n }) {
  return (
    <div>
      <h3>{n.title}</h3>
      <p>Author: {n.author}</p>
      <p>Points: {n.points}</p>
      <a href={n.url} target="_blank" rel="noreferrer">
        Read Article
      </a>
    </div>
  );
}

export default NewsCard;