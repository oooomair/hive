import './footer.scss'
import { facebook, hivelogo, instagram, mail, phone, tiktok } from '../../const'

const Footer = () => {

  return (
    <div className='footer'>
        <img src={hivelogo} alt="" />
        <div className="footer__links">
            <img onClick={() => window.open('https://www.instagram.com/hiveboardgamecafe/', '_blank')} src={instagram} alt="" />
            <img onClick={() => window.open('https://www.tiktok.com/@hiveboardgamecafe?lang=en', '_blank')} src={tiktok} alt="" />
            <img  onClick={() => window.open('https://www.facebook.com/hiveboardgamecafe/', '_blank')} src={facebook} alt="" />
        </div>
        <div className="footer__info">
            <img src={mail} alt="" />
            <span>info@hiveboardgame.com</span>
        </div>
        <div className="footer__info">
            <img src={phone} alt="" />
            <span>+971559665458</span>
        </div>
        <div className="footer__copywrite">
            <h4>© 2022 Hive Dubai. All Rights Reserved</h4>
        </div>
    </div>
  )
}

export default Footer