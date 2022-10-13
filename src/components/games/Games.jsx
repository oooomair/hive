import { gamespic } from '../../const'
import './games.scss'

const Games = () => {
  return (
    <div className='games'>
        <div className="games__info">
            <h2>Play Your Favorite Games!</h2>
            <p>Whether you enjoy the classics, mind boggling strategy and mystery, or simple card games, there's always something for you at our Cafe. Enjoy our collection of 500+ games, learn new ones recommended by our game masters or play the games you know in all their different versions. With new arrivals every month, there is very little room for anyone to get bored. Bring along kids, family and friends and prepare for unlimited fun.</p>
        </div>
        <div className="games__pic">
            <img src={gamespic} alt="" />
        </div>
    </div>
  )
}

export default Games