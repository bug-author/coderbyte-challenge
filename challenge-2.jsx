// attempting second time because coderbyte didnt save the code history and I have to redo everything again

// for prev searches the requiremnt is a bit unclear
// should we include duplicate searched cities? Or not?
// The problem is with key when we map, I dont want to use index so Im writing a simple random
// id generation functin to use as key
// if we dont include duplicates this wont be an issue as every city name can be used as key which is
// unique

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function WeatherDashboard() {
  // instead of requesting data from an API, use this mock data
  const mockWeatherData = {
    'New York': { 
      temperature: '22°C', 
      humidity: '56%', 
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    'London': { 
      temperature: '15°C', 
      humidity: '70%', 
      windSpeed: '20 km/h' 
    },
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [prevSearches, setPrevSearches] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const generateUniqueId = () => Math.random() + Date.now();

  const handleSearch = () => {
    // get weather data or error (City not found)

    const data = mockWeatherData[searchQuery]
    if (!data) {
      setError(true);
      setWeatherData(null);
      }
    else {
      setWeatherData(data);
      setError(false);

      // save to prev search
      const searchData = {id: generateUniqueId(), query: searchQuery};
      setPrevSearches([...prevSearches, searchData]);
    }
  }

  const handlePrevSearchClick = (query) => {
    const data = mockWeatherData[query];
    // directly setting state because in history we only main valid city searches
    // although it would make more sense to include such checks but coderbyte is playing with my head so i want to submit before it times out
    setWeatherData(data);
    setError(false);
  }

  return (
    <div>
      <input type="text" id="citySearch" placeholder="Search for a city..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>Search</button>
      <div id="weatherData">
        {weatherData && (<div>
        <div>Temperature: {weatherData.temperature}</div>
        <div>Humidity: {weatherData.humidity}</div>
        <div>Wind Speed: {weatherData.windSpeed}</div>
        </div>)}
        {error && (<div>City not found.</div>)}
      </div>
      <div id="previousSearches">
        {prevSearches.map(search => (
          <button key={search.id} onClick={()=>handlePrevSearchClick(search.query)}>{search.query}</button>
        ))}
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WeatherDashboard />);
