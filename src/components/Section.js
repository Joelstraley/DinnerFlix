import { useEffect, useState } from "react";
import Card from "./Card";

function Section({ genre }) {
    const [movies, setMovies] = useState(null)
    const [pageState, setPageState] = useState(null)

    const fetchData = async () => {
        const response = await fetch (".netlify/functions/getMovies", {
            method: "POST",
            body: JSON.stringify({ genre:genre, pageState: pageState })
        })
        const responseBody = await response.json()
        setMovies(responseBody.data.movies_by_genre.values)
        setPageState(responseBody.data.movies_by_genre.pageState)
      } 

        useEffect(() => {
          fetchData()
        }, [])
    
    return (
        <>
        <h3 className="genre" id={genre}>{genre}</h3>
        {movies && (
            <div className="movie-section">
                {movies.map((movie, index) => (
                    <Card key={index} movie={movie}/>
                ))}
                <div className="more-button"
                    onClick={()=> {
                        setPageState(pageState)
                        fetchData();
                    }}
                    >
                    <i className="fas fa-angle-right fa-5x"></i>
                    </div> 
                </div>
            )}
            </>
         )
}

export default Section