import { NavbarGreen } from '../navbar/Navbar'
import './eachCard.scss'

const EachCard = ({item, title}) => {
  return (
    <div className='eachcard'>
        <NavbarGreen/>
        <h1>{title}</h1>
        <div className="eachcard__menu">
            {item.menu.map(item => {
                return(
                        <span>{item}</span>
                )
            })}
        </div>
        <div className="eachcard__img">
        {item.img.map(img => {
                return(
                    <img src={img} alt="" />
                )
            })}
        </div>
    </div>
  )
}

export default EachCard