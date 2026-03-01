import { useState } from "react";
import axios from "axios";
import newCard from "../components/newCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setnews] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    try {
      const res = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`
      );

      console.log(res.data);
      setnews(res.data.hits); // 👈 Algolia uses "hits"
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="home">
      <h1>Search Hacker News</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Hacker News..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {news.map((new) => (
          <newCard key={new.objectID} new={new} />
        ))}
      </div>
    </div>
  );
}

export default Home;