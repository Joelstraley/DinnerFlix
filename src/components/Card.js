import { useState } from 'react';

function Card({ movie }) {
    const [isShown, setIsShown] = useState(false)
    return(
        <div className="card"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            >
           {!isShown && (<video className="video" controls>
                <source src={movie.thumbnail} type="video/mp4" />
            </video>)}

            {isShown && (
                <>
                <video className="video" controls autoPlay={true} loop>
                <source src={movie.thumbnail} type="video/mp4" />
                </video>
                <div className="info-box">
                    <div className="icons">
                        <i class="far fa-play-circle">&nbsp;</i>
                        <i class="fas fa-plus-circle">&nbsp;</i>
                        <i class="far fa-thumbs-up">&nbsp;</i>
                        <br />
                    </div>
                <div className="movie-info">
                    <span id="match"><strong>100% Match&nbsp;&nbsp;</strong></span>
                    <span id="rating">PG</span>
                    <span>&nbsp;&nbsp;1h 51m</span>
                </div>
                <div className="movie-details">
                    <span className="details">Comedy&nbsp;<span className="dot">&#183;</span>&nbsp;</span>
                    <span className="details">Drama&nbsp;<span className="dot">&#183;</span>&nbsp;</span>
                    <span className="details">Dinner</span>
                </div>
                </div>
                </>
                )}

        </div>
 )
}
export default Card