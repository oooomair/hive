import { dessert1, dessert2, dessert3, dessert4 } from '../../const'
import EachCard from './EachCard'

const Dessert = () => {

    const desserts = {
        title: 'Desserts',
        items: [
            {
                span: 'Brownies',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Cheesecakes',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Waffles',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Ice cream',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Churros',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Mono Cakes',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            }
        ],
        images: [dessert1, dessert2, dessert3, dessert4]
    }
    
  return <EachCard item={desserts}/>
}

export default Dessert