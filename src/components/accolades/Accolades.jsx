import { ac1, ac2, ac3, ac4, ac5, ac6 } from '../../const'
import { NavbarGreen } from '../navbar/Navbar'
import './accolades.scss'
const Accolades = () => {

    const accolades = [
        {
            img: ac6,
            span: 'Your home your choice winners 2021'
        },
        {
            img: ac2,
            span: 'Your home your choice winners 2021'
        },
        {
            img: ac3,
            span: 'Your home your choice winners 2021'
        },
        {
            img: ac4,
            span: 'Your home your choice winners 2021'
        },
        {
            img: ac1,
            span: 'Your home your choice winners 2021'
        },
        {
            img: ac5,
            span: 'Your home your choice winners 2021'
        },
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
        <div className="accolades__copywrite">
            <h4>© 2022 Hive Dubai. All Rights Reserved</h4>
        </div>
    </div>
  )
}

export default Accolades