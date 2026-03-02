import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

function Best() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await axios.get(
            "https://hacker-news.firebaseio.com/v0/beststories.json"        );
        
        const top20 = res.data.slice(0, 20);

        const detailRequests = top20.map((id) =>
          axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          )
        );

        const responses = await Promise.all(detailRequests);

        const storyData = responses.map((res) => res.data);

        setStories(storyData);
      } catch (err) {
        console.error(err);
        setError("Failed to load stories");
      }
    }

    fetchStories();
  }, []);

  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Best Hacker News Stories</h1>
    <div>
        {stories.map((n) => (
          <NewsCard key={n.id} n={n} />

        ))}
      </div>
      
    </div>
  );
}

export default Best;