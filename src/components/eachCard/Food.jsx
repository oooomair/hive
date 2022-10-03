import { food1, food2, food3, food4 } from '../../const'
import EachCard from './EachCard'

const Food = () => {

    const foods = {
        title: 'Foods',
        items: ['Breakfast', 'Burgers', 'Sandwiches & Wraps', 'Pasta', 'Pizza', 'Vegan Options', 'Salads', 'Light Bites'],
        images: [food1, food2, food3, food4]
    }
    
  return <EachCard item={foods}/>
}

export default Food