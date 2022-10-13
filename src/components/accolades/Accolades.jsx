import { Link } from 'react-router-dom'
import { NavbarGreen } from '../navbar/Navbar'
import './accolades.scss'
const Accolades = ({accolades}) => {

  return (
    <div className='accolades'>
        <NavbarGreen/>
        <h1>Accolades</h1>
        <div className="accolades__container">
        {accolades.map(accolade => {
            return(
                <div className='accolades__accolade'>
                    <Link to={`/eachAccolade/${accolade.id}`}>
                        <img src={accolade.img} alt="" />
                    </Link>
                </div>
            )
        })}
        </div>
        <div className="accolades__copywrite">
            <h4>© 2022 Hive Dubai. All Rights Reserved</h4>
        </div>
    </div>
  )
}

export default Accolades