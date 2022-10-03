import './about.scss'
import {aboutpic, learnpic, eatpic, playpic} from '../../const/index'
import { Link } from 'react-router-dom'


const About = () => {

  const lpe = [{
    pic: learnpic,
    h3: 'Learn',
    p: 'Dedicated team of game masters to help customers choose from our massive Inventory and understand the rules of their game of choice.'
  },
  {
    pic: playpic,
    h3: 'Play',
    p: 'We house over 500+ board game titles ranging from- Strategic, Fun, Party, Trivia, Mystery and more. We’ve got you covered with the right game for your mood.'
  },
  {
    pic: eatpic,
    h3: 'Eat',
    p: 'Fuel up while you play! Try one of our grilled sandwiches & wraps, or gulp down our special range of Freak shakes. Mix and match for ultimate snacking!'
  }]

  return (
    <div className='about'>
      <div className="about__top">
        <div className="about__info">
          <h1>About Us</h1>
          <p>Hive is dedicated to bring the community together through a very simple idea - Board Games!. I​t's a multi-concept space which includes a wide range of board games, hundreds of books, along with regular workshops and events - t​he modern age’s answer to dwindling social interaction!  Our cafe is ideal for board game enthusiasts – or anyone who wants to have quality time with their friends and family.</p>
          <Link to='/accolades'>
            <button>Accolades</button>
          </Link>
        </div>
        <div className="about__pic">
          <img src={aboutpic} alt="" />
        </div>
      </div>
      <div className="about__bottom">
        {lpe.map(lpe => {
          return(<div className="about__lpe">
            <div className="about__lpe-pic">
              <img src={lpe.pic} alt="" />
            </div>
            <div className="about__lpe-info">
              <h3>{lpe.h3}</h3>
              <p>{lpe.p}</p>
            </div>
          </div>)
          })
        }
      </div>
    </div>
  )
}

export default About