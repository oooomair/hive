import { licsense, manual, ongoing, trademark, training } from '../../const'
import './franchise.scss'

const Franchise = () => {

    const franchiseIcons = [
        {
            img: trademark,
            span: 'Trademark License',
            cn: 'trademark'
        },
        {
            img: licsense,
            span: 'License to Operate',
            cn: 'license'
        },
        {
            img: training,
            span: 'Training Program',
            cn: 'training'
        },
        {
            img: manual,
            span: 'Operations Manual',
            cn: 'operations'
        },
        {
            img: ongoing,
            span: 'Ongoing Support',
            cn: 'ongoing'
        },
    ]

  return (
    <div className='franchise'>
        <div className="franchise__title">
            <h1>Franchise</h1>
        </div>
        <div className="franchise__top">
            <div className="franchise__v">
                <h4>Vission</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quam deserunt dignissimos sit libero architecto accusantium quas nam similique molestiae maiores sint aliquid expedita cumque, dolorem et quod cupiditate inventore.</p>
            </div>
            <div className="franchise__m">
                <h4>Mission</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto, nesciunt modi accusantium, amet laudantium officia iste pariatur asperiores aut debitis! A, debitis quis error facilis eligendi nobis facere eum.</p>
            </div>
        </div>
        <div className="franchise__bottom">
            <h2>What You Get</h2>
            <div className="franchise__icons">
                {franchiseIcons.map(icon => {
                    return(
                    <div className={`franchise__icon ${icon.cn}`}>
                    <img src={icon.img} alt="" />
                    <span>{icon.span}</span>
                </div>)
                })}
            </div>
            <button>Get In Touch</button>
        </div>
    </div>
  )
}

export default Franchise