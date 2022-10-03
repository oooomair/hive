import { food1 } from '../../const'
import EachCard from './EachCard'

const Food = () => {

    const foods = {
        title: 'Foods',
        items: [
            {
                span: 'Double CheeseBurger',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double CheeseBurger',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double CheeseBurger',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double CheeseBurger',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double CheeseBurger',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Double CheeseBurger',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            }
        ],
        images: [food1, food1, food1, food1]
    }
    
  return <EachCard item={foods}/>
}

export default Food