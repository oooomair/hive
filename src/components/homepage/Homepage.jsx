import {hivelogo, home1, facebook, instagram, tiktok} from '../../const/index'
import './homepage.scss'

const Homepage = () => {
  return (
    <div className='homepage'>
      <img className='home-img' src={home1} alt="home1" />
        <div className="homepage__top">
            <img className='logo' src={hivelogo} alt="logo" />
            <div className="homepage__top-right">
            <button>Book a Table</button>
            <div className="homepage__links">
                <img src={instagram} alt="" />
                <img src={tiktok} alt="" />
                <img src={facebook} alt="" />
            </div>
            </div>
        </div>
        <h1>Hive Board Game Cafe</h1>
    </div>
  )
}

export default Homepage