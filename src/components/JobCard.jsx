function newCard({ new }) {
  return (
    <div>
      <h3>{new.title}</h3>
      <p>Author: {new.author}</p>
      <p>Points: {new.points}</p>
      <a href={new.url} target="_blank" rel="noreferrer">
        Read Article
      </a>
    </div>
  );
}

export default newCard;