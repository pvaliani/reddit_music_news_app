// Import css styling, useState and useEffect
import './App.css';
import { useState, useEffect } from  'react';
import StoryList from './components/StoryList';

// Container for reddit stories state

function App() {

  // Define stories will be kept as objects - **WAS AN ARRAY**
  const [stories, setStories] = useState(null);


  // Fetch the data
  const fetchMusicNews = () => {

    console.log("Fetching music news...");
    // Store API url in a variable for the fetch
    const url = `https://www.reddit.com/r/MusicNews/.json`;
    // Fetch returns a promise object - i.e before any conversion of .json
    fetch(url)
    // .then returns another promise which is then converted to .json
    .then((response) => response.json()) 
    .then((data) => setStories(data))

  };

  // Invoke useEffect so that we can regularly get music news

  useEffect(() => {
    fetchMusicNews();
  }, []);

  if(!stories) return null;

  return (
    <>
      <h1>This is the latest Reddit Music News!</h1>
      <StoryList stories={stories.data.children}/>
    </>
  );
}

export default App;
