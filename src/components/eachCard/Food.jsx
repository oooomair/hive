import { food1, food2, food3, food4 } from '../../const'
import EachCard from './EachCard'

const Food = () => {

    const foods = {
        title: 'Foods',
        items: [
            {
                span: 'Breakfast',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Burgers',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Sandwiches & Wraps',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Pasta',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Pizza',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Vegan Options',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            }
        ],
        images: [food1, food2, food3, food4]
    }
    
  return <EachCard item={foods}/>
}

export default Food