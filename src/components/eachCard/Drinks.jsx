import { food1 } from '../../const'
import EachCard from './EachCard'

const Food = () => {

    const drinks = {
        title: 'Drinks',
        items: [
            {
                span: 'Double Espresso',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double Espresso',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double Espresso',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double Espresso',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double Espresso',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double Espresso',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            }
        ],
        images: [food1, food1, food1, food1]
    }
    
  return <EachCard item={drinks}/>
}

export default Food