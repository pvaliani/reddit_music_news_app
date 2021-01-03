// Import css styling, useState and useEffect
import './App.css';
import { useState, useEffect } from  'react';
import StoryList from './components/StoryList';
import NewsFilterForm from './components/NewsFilterForm';

// Container for reddit stories state

function App() {

  // Define stories and filteredNews which will be kept as objects
  const [stories, setStories] = useState(null);
  const [filteredNews, setFilteredNews] = useState(null);


  // Fetch the data
  const fetchMusicNews = () => {

    console.log("Fetching music news...");
    // Store API url in a variable for the fetch
    const url = `https://www.reddit.com/r/MusicNews/.json`;
    // Fetch returns a promise object - i.e before any conversion of .json
    fetch(url)
    // .then returns another promise which is then converted to .json
    .then((response) => response.json()) 
    .then((data) => {
      
    // Pass the json data to the state methods 
    setStories(data.data.children);
    setFilteredNews(data.data.children);
  
    
    })

  };

  // Handle the filter input by filtering stories taking in a currentStory object ***FILTER ONLY WORKS WITH ARRAYS AND WE HAVE OBJECTS SO THIS DOESN'T WORK*** 

  const handleUserFilter = (userInput) => {
    const filteredNews = stories.filter((currentStory) => {
      return currentStory["data"].title.toUpperCase().includes(userInput.toUpperCase());
    });
    // setFilteredNews state method is passed the filteredNews from the filter
    setFilteredNews(filteredNews);
  };

  // Invoke useEffect so that we can regularly get music news i.e upon a new fetch request

  useEffect(() => {
    fetchMusicNews();
  }, []);



  if(!stories) return null;
  if(!filteredNews) return null;

  // React has to return something - the app container returns the stories to the storyList component. Stories.data.children is the path to the array on the Reddit MusicNews API. So we will return the full array to storyList component so that we can access it. We pass the filteredNews but this is an object....


  return (
    <>
      <h1>This is the latest Music News from Reddit!</h1>
      <div>
        <NewsFilterForm onUserInput={handleUserFilter}/>
      </div>
      <StoryList stories={stories} filteredstories={filteredNews}/>
    </>
  );
}

export default App;
