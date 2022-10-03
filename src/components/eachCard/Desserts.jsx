import { dessert1, dessert2, dessert3, dessert4 } from '../../const'
import EachCard from './EachCard'

const Dessert = () => {

    const desserts = {
        title: 'Desserts',
        items: ['Brownies', 'Cheesecakes', 'Waffles', 'Ice cream', 'Churros', 'Mono Cakes', 'Pancakes'],
        images: [dessert1, dessert2, dessert3, dessert4]
    }
    
  return <EachCard item={desserts}/>
}

export default Dessert