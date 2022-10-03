import { accolade1 } from '../../const'
import { NavbarGreen } from '../navbar/Navbar'
import './accolades.scss'
const Accolades = () => {

    const accolades = [
        {
            img: accolade1,
            span: 'Your home your choice winners 2021'
        },
        {
            img: accolade1,
            span: 'Your home your choice winners 2021'
        },
        {
            img: accolade1,
            span: 'Your home your choice winners 2021'
        },
        {
            img: accolade1,
            span: 'Your home your choice winners 2021'
        },
        {
            img: accolade1,
            span: 'Your home your choice winners 2021'
        }
    ]

  return (
    <div className='accolades'>
        <NavbarGreen/>
        <h1>Accolades</h1>
        <div className="accolades__container">
        {accolades.map(accolade => {
            return(
                <div className='accolades__accolade'>
                    <img src={accolade.img} alt="" />
                    <span>{accolade.span}</span>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Accolades