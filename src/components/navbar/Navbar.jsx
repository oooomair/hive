import './navbar.scss'
import {hivelogogreen, hivelogo, facebook, instagram, tiktok, instagramgreen, tiktokgreen, facebookgreen} from '../../const/index'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
    <img className='logo' src={hivelogo} alt="logo" />
    <div className="navbar__right">
    <button onClick={() => window.open('https://www.zomatobook.com/widget/makereservation03.aspx?id=81VT1D8C462W', '_blank')} >Book a Table</button>
    <div className="navbar__links">
        <img onClick={() => window.open('https://www.instagram.com/hiveboardgamecafe/', '_blank')} src={instagram} alt="" />
        <img onClick={() => window.open('https://www.tiktok.com/@hiveboardgamecafe?lang=en', '_blank')} src={tiktok} alt="" />
        <img onClick={() => window.open('https://www.facebook.com/hiveboardgamecafe/', '_blank')} src={facebook} alt="" />
    </div>
    </div>
</div>
  )
}

export const NavbarGreen = () => {
    return (
      <div className="navbar">
      <Link to='/'>
        <img className='logo' src={hivelogogreen} alt="logo" />
      </Link>
      <div className="navbar__right navbar__right-green">
      <button onClick={() => window.open('https://www.zomatobook.com/widget/makereservation03.aspx?id=81VT1D8C462W', '_blank')}>Book a Table</button>
      <div className="navbar__links">
          <img onClick={() => window.open('https://www.instagram.com/hiveboardgamecafe/', '_blank')} src={instagramgreen} alt="" />
          <img onClick={() => window.open('https://www.tiktok.com/@hiveboardgamecafe?lang=en', '_blank')} src={tiktokgreen} alt="" />
          <img onClick={() => window.open('https://www.facebook.com/hiveboardgamecafe/', '_blank')} src={facebookgreen} alt="" />
      </div>
      </div>
  </div>
    )
  }