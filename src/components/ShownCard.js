export default function ShownCard({ movieThumbnail }) {
  return (
    <>
      <video className="video" autoPlay={true}>
        <source src={movieThumbnail} type="video/mp4" />
      </video>
      <div className="info-box">
        <div className="icons">
          <a href="https://www.youtube.com/watch?v=O4lvOjiHFw0">
            <i className="far fa-play-circle">&nbsp;</i>
          </a>
          <i className="fas fa-plus-circle">&nbsp;</i>
          <i className="far fa-thumbs-up">&nbsp;</i>
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
  )
}
