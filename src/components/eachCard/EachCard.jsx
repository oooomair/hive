import { NavbarGreen } from '../navbar/Navbar'
import './eachCard.scss'

const EachCard = ({item}) => {
  return (
    <div className='eachcard'>
        <NavbarGreen/>
        <h1>{item.title}</h1>
        <div className="eachcard__main">
            <div className="eachcard__menu">
                {item.items.map(item => {
                    return(
                        <div className="eachcard__menu-item">
                            <span>{item.span}</span>
                            <p>{item.p}</p>
                        </div>
                    )
                })}
            </div>
            <div className="eachcard__img">
            {item.images.map(img => {
                    return(
                        <img src={img} alt="" />
                    )
                })}
            </div>
        </div>
        <div className="eachcard__copywrite">
            <h4>© 2022 Hive Dubai. All Rights Reserved</h4>
        </div>
    </div>
  )
}

export default EachCard