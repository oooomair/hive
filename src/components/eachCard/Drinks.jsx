import { drink1, drink2, drink3, drink4 } from '../../const'
import EachCard from './EachCard'

const Drink = () => {

    const drinks = {
        title: 'Drinks',
        items: [
            {
                span: 'Speciality Cofee',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Frappucino',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Smoothies',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Hot Chocolate',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Tea',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            },
            {
                span: 'Moktails',
                p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quidem? Lorem ipsum dolor sit amet.'
            }
        ],
        images: [drink1, drink2, drink3, drink4]
    }
    
  return <EachCard item={drinks}/>
}

export default Drink