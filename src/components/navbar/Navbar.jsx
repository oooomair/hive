import './navbar.scss'
import {hivelogogreen, hivelogo, facebook, instagram, tiktok, instagramgreen, tiktokgreen, facebookgreen} from '../../const/index'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
    <img className='logo' src={hivelogo} alt="logo" />
    <div className="navbar__right">
    <button>Book a Table</button>
    <div className="navbar__links">
        <img src={instagram} alt="" />
        <img src={tiktok} alt="" />
        <img src={facebook} alt="" />
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
      <button>Book a Table</button>
      <div className="navbar__links">
          <img src={instagramgreen} alt="" />
          <img src={tiktokgreen} alt="" />
          <img src={facebookgreen} alt="" />
      </div>
      </div>
  </div>
    )
  }