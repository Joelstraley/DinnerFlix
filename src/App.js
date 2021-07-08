import './App.css';
import { useState, useEffect } from 'react'; 
import Section from "./components/Section";
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import Footer from "./components/Footer";

function App() {
    const genreIncrement = 4
    const [genres, setGenres] = useState(null)
    const [limit, setLimit] = useState(genreIncrement)
  
    const fetchData = async () => {
    const response = await fetch(".netlify/functions/getGenres", {
      method: "POST",
      body: limit
    })
    const responseBody = await response.json()
    console.log(responseBody)
    setGenres(responseBody.data.reference_list.values)
  } 

    useEffect(() => {
      fetchData()
    }, [, limit]);

/*   const handleScroll = async (event) => {
      const target = await event.target;

      if(target.scrollHeight - target.scrollTop === target.clientHeight){
        <Footer />
      }
    } */

  

  console.log(limit)
  return (
    <>
    <NavBar />
    <HeroSection />
      {genres && (
        <div className="container">
        {Object.values(genres).map((genre, index) => (<Section key={index} genre={genre.value} />
          ))}
          </div> 
          )}
          <div className="page-end"
            onMouseEnter={() => { 
              setLimit(limit + genreIncrement) 
          }}
        > 
        </div>
        <span></span>
        <Footer />
  
    </>
  );
}

export default App;
