import './cards.scss'
import {foodpic, drinkspic, dessertspic} from '../../const/index'
import { Link } from 'react-router-dom'


const Cards = () => {
  return (
    <div className='cards'>
      <div className="cards__res">
        <Link to={'/foods'}>
          <div className="cards__card">
              <img src={foodpic} alt="" />
              <h2>Food</h2>
              <p> Multi-cuisine Menu with Vegan and Healthy options</p>
          </div>
        </Link>
        <Link to={'/drinks'}>
          <div className="cards__card">
              <img src={drinkspic} alt="" />
              <h2>Drinks</h2>
              <p> Wide range of Beverages options </p>
          </div>
        </Link>
      </div>
        <Link to={'/desserts'}>
          <div className="cards__card">
              <img src={dessertspic} alt="" />
              <h2>Desserts</h2>
              <p> Multiple Dessert categories ranging from Delicious cakes to elegant pastries and much more</p>
          </div>
        </Link>
    </div>
  )
}

export default Cards