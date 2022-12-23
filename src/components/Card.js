import { useState } from 'react'
import ShownCard from './ShownCard'
import UnShownCard from './UnShownCard'

function Card({ movie }) {
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown ? (
        <ShownCard movieThumbnail={movie.thumbnail} />
      ) : (
        <UnShownCard />
      )}
    </div>
  )
}
export default Card
