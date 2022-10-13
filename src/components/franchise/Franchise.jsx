import { licsense, manual, ongoing, trademark, training } from '../../const'
import './franchise.scss'
import { scroller } from "react-scroll";

const Franchise = () => {

    const scrollToSection = divCss => {
        scroller.scrollTo(divCss, {
          duration: 200,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }

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
                <h4>Vision</h4>
                <p>We aim to provide world class services for recreational, social and educational activities to guests of all ages regardless ofethnicity, gender or economic status, with the goal to connect and organically grow the community.</p>
            </div>
            <div className="franchise__m">
                <h4>Mission</h4>
                <p>To establish an international cafe brandacross GCC that is dedicated to bring the community together through board games.The long term objective is to open 50 outlets through privately owned and franchise stores</p>
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
            <button onClick={() => scrollToSection('contact')}>Get In Touch</button>
        </div>
    </div>
  )
}

export default Franchise