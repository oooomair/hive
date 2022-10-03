import { drink1, drink2, drink3, drink4 } from '../../const'
import EachCard from './EachCard'

const Drink = () => {

    const drinks = {
        title: 'Drinks',
        items: ['Speciality Coffee', 'Frappucino', 'Smoothies', 'Hot Chocolate', 'Tea', 'Moktails', 'Iced Coffee', 'Freakshake'],
        images: [drink1, drink2, drink3, drink4]
    }
    
  return <EachCard item={drinks}/>
}

export default Drink