import { useState, useEffect } from 'react';

function HeroSection() {
    const [movie, setMovie] = useState(null)
    const [mute, setMute] = useState(true)
    const pageState = null

    const fetchData = async () => {
        const response = await fetch (".netlify/functions/getMovies", {
            method: "POST",
            body: JSON.stringify({ genre: "Romance", pageState: pageState })
        })
        const responseBody = await response.json()
        const movies = responseBody.data.movies_by_genre.values
        setMovie(movies[Math.floor(Math.random() * movies.length)])
      } 

        useEffect(() => {
          fetchData()
        }, [])

        function handleMouseEnter(e){ 
            var video = document.getElementsByClassName("hero-video")
            console.log("mouse move")
            if(video.muted){
                video.muted = true;
            } else {
                video.muted = false;
                console.log(video.muted)
            }
        }

 
    return(
        <div>
            {movie && (
                <div className="hero"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
                   <video className="hero-video" muted controls autoPlay={true} loop>
                        <source src={movie.thumbnail} type="video/mp4" />
                    </video> 
                    <div className="info-section">
                        <h3 className="hero-blurb">{movie.synopsis}</h3>
                    <div className="button-section">
                    <a href="https://www.youtube.com/watch?v=O4lvOjiHFw0">
                        <div className="button play">
                            <span><i className="fas fa-play"></i></span>
                            &nbsp;Play
                        </div></a>
                        <div className="button more">
                            <span><i className="fas fa-info-circle"></i></span>
                            &nbsp;More Info
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
 )
}

export default HeroSection





