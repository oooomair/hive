import './cards.scss'
import {foodpic, drinkspic, dessertspic} from '../../const/index'


const Cards = () => {
  return (
    <div className='cards'>
      <div className="cards__res">
        <div className="cards__card">
            <img src={foodpic} alt="" />
            <h2>Food</h2>
            <p> atque error doloremque. Debitis excepturi reprehenderit aspernatur exercitationem perferendis quia dolorem aut labore amet blanditiis. Fugit illo adipisci a?</p>
        </div>
        <div className="cards__card">
            <img src={drinkspic} alt="" />
            <h2>Drinks</h2>
            <p> atque error doloremque. Debitis excepturi reprehenderit aspernatur exercitationem perferendis quia dolorem aut labore amet blanditiis. Fugit illo adipisci a?</p>
        </div>
      </div>
        <div className="cards__card">
            <img src={dessertspic} alt="" />
            <h2>Desserts</h2>
            <p> atque error doloremque. Debitis excepturi reprehenderit aspernatur exercitationem perferendis quia dolorem aut labore amet blanditiis. Fugit illo adipisci a?</p>
        </div>
    </div>
  )
}

export default Cards