import { gamespic } from '../../const'
import './games.scss'

const Games = () => {
  return (
    <div className='games'>
        <div className="games__info">
            <h2>Play Your Favorite Games!</h2>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor  voluptatem fugit distinctio dolorum aperiam! adipisicing elit. Delectus voluptatum obcaecati minus possimus, eum rerum consectetur, magnam enim officiis fugiat distinctio? Adipisci, laborum. Ipsa beatae at perferendis dolorum nam, quia facilis. Perferendis, veniam! Porro inventore sunt dolorem hic error, consectetur in, quas officia animi saepe similique neque quod suscipit corrupti!</p>
        </div>
        <div className="games__pic">
            <img src={gamespic} alt="" />
        </div>
    </div>
  )
}

export default Games