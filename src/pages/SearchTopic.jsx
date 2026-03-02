import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";


function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");  

  useEffect(() => {
    if (!searchTerm.trim()) return;

    async function fetchNews() {
      try {
        const res = await axios.get(
          `https://hn.algolia.com/api/v1/search_by_date?query=${searchTerm}&tags=story`
        );

        setNews(res.data.hits);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchNews();
  }, [query]); 

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(searchTerm);
  
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
        {news.map((t) => (
          <NewsCard key={t.objectID} n={t} />
        ))}
      </div>
    </div>
  );
}

export default Search;