import { Link, useParams } from 'react-router-dom'
import { close } from '../../const'
import { NavbarGreen } from '../navbar/Navbar'
import './eachaccolade.scss'

const EachAccolade = ({accolades}) => {

    const {id} = useParams()

    const accolade = accolades.find(accolade => accolade.id === id)
    console.log(accolade);

  return (
    <div className='each-accolade'>
        <NavbarGreen/>
        <h1>Accolades</h1>  
        <div className="each-accolade__img">
            <img src={accolade.img} alt="" />
            <Link to='/accolades' >
                <img src={close} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default EachAccolade