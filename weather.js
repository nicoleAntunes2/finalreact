import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    searchDefinition();
  }

  function searchDefinition() {
    const apiKey = "33ac5e9b0eacbo082t8a473ffd2045d0";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      if (response.data && response.data.definitions && response.data.definitions.length > 0) {
        setDefinition(response.data.definitions[0].definition);
      } else {
        setDefinition("Definition not found.");
      }
    }).catch((error) => {
      setDefinition("Error retrieving definition.");
    });
  }

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dictionary App 📚</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange}
          placeholder="Enter a word..."
          style={{ padding: "10px", width: "250px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}
        >
          Search
        </button>
      </form>

      {definition && (
        <div style={{ marginTop: "30px", padding: "20px" }}>
          <h2>Definition:</h2>
          <p>{definition}</p>
        </div>
      )}
    </div>
  );
}
