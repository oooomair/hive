import './footer.scss'
import { facebook, hivelogo, instagram, mail, phone, tiktok } from '../../const'

const Footer = () => {

  return (
    <div className='footer'>
        <img src={hivelogo} alt="" />
        <div className="footer__links">
            <img src={instagram} alt="" />
            <img src={tiktok} alt="" />
            <img src={facebook} alt="" />
        </div>
        <div className="footer__info">
            <img src={mail} alt="" />
            <span>hive@hive.com</span>
        </div>
        <div className="footer__info">
            <img src={phone} alt="" />
            <span>971501234567</span>
        </div>
        <div className="footer__copywrite">
            <h4>© 2022 Hive Dubai. All Rights Reserved</h4>
        </div>
    </div>
  )
}

export default Footer