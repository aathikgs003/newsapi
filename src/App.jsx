import React, { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Fetching API Data</h2>
      {articles.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={article.url || index}>
              {article.title} — {article.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
