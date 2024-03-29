import './App.css'
import { useState, useEffect } from 'react'
import Section from './components/Section'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Credit from './components/Credit'
require('dotenv').config()

function App() {
  const genreIncrement = 4
  const [genres, setGenres] = useState(null)
  const [limit, setLimit] = useState(genreIncrement)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('.netlify/functions/getGenres', {
        method: 'POST',
        body: limit,
      })
      const responseBody = await response.json()
      console.log('this is the response body', responseBody)
      setGenres(responseBody.data.reference_list.values)
    }

    fetchData()
  }, [limit])

  return (
    <div
      className="main-container"
      onScroll={() => {
        setLimit(limit + genreIncrement)
      }}
    >
      <NavBar />
      <HeroSection />
      {genres && (
        <div className="container">
          {Object.values(genres).map((genre, index) => (
            <Section key={index} genre={genre.value} />
          ))}
        </div>
      )}
      <div
        className="page-end"
        onMouseEnter={() => {
          setLimit(limit + genreIncrement)
        }}
      >
        <Footer />
      </div>
      <Credit />
    </div>
  )
}

export default App
