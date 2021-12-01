import { useState } from 'react'

function Card({ movie }) {
  const [isShown, setIsShown] = useState(false)
  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown && (
        <video className="video" controls>
          <source src={movie.thumbnail} type="video/mp4" />
        </video>
      )}

      {isShown && (
        <>
          <video className="video" controls autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4" />
          </video>
          <div className="info-box">
            <div className="icons">
              <a href="https://www.youtube.com/watch?v=O4lvOjiHFw0">
                <i class="far fa-play-circle">&nbsp;</i>
              </a>
              <i class="fas fa-plus-circle">&nbsp;</i>
              <i class="far fa-thumbs-up">&nbsp;</i>
              <br />
            </div>

            <div className="movie-info">
              <span id="match">
                <strong>98% Match&nbsp;&nbsp;</strong>
              </span>
              <span id="rating">PG</span>
              <span>&nbsp;&nbsp;1h 51m</span>
            </div>
            <div className="movie-details">
              <span>
                Comedy&nbsp;<span className="dot">&#183;</span>&nbsp;
              </span>
              <span>
                Drama&nbsp;<span className="dot">&#183;</span>&nbsp;
              </span>
              <span>Dinner</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default Card
