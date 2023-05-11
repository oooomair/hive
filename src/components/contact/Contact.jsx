import { facebookgreen, instagramgreen, locationgreen, mailgreen, phonegreen, tiktokgreen } from '../../const'
import './contact.scss'

const Contact = () => {

    const contactInfo = [
        {
            img: mailgreen,
            span: 'info@hiveboardgame.com',
            address: false
        },
        {
            img: phonegreen,
            span: '+971559665458',
            address: false
        },
        {
            img: locationgreen,
            span: 'Hive Board Game Cafe, GR-03 Onyx Tower 1, The Greens, SZR, Dubai',
            address: true
        }
    ]

    const dayTiming = [
        {
            day: 'Monday',
            time: '12pm - 12am'
        },
        {
            day: 'Tuesday',
            time: '12pm - 12am'
        },
        {
            day: 'Wednesday',
            time: '12pm - 12am'
        },
        {
            day: 'Thursday',
            time: '12pm - 12am'
        },
        {
            day: 'Friday',
            time: '10am - 2am'
        },
        {
            day: 'Saturday',
            time: '10am - 2am'
        },
        {
            day: 'Sunday',
            time: '10am - 2am'
        }
    ]

  return (
    <div className='contact'>
        <div className="contact__infos">
            <h1>Contact Us</h1>
            {contactInfo.map(info => {
                return(
                <div className="contact__info">
                    <img src={info.img} alt="" />
                    <span className={info.address && 'contact__pointer'} onClick={() => info.address && window.open('https://www.google.com/maps/place/Hive+Board+Game+Cafe/@25.0970696,55.1682115,18.5z/data=!4m5!3m4!1s0x3e5f6b297cf798b9:0x5bae48ac63fbb98d!8m2!3d25.0973955!4d55.1687924', '_blank')}>{info.span}</span>
                </div>
                )
            })}
            <button onClick={() => window.open('https://www.zomato.com/dubai/hive-board-game-cafe-the-greens/book', '_blank')} >Book a Table</button>
            <div className="contact__links">
                <img onClick={() => window.open('https://www.instagram.com/hiveboardgamecafe/', '_blank')} src={instagramgreen} alt="" />
                <img onClick={() => window.open('https://www.tiktok.com/@hiveboardgamecafe?lang=en', '_blank')} src={tiktokgreen} alt="" />
                <img onClick={() => window.open('https://www.facebook.com/hiveboardgamecafe/', '_blank')} src={facebookgreen} alt="" />
            </div>
        </div>
        <div className="contact__timings">
            <div className="contact__timing-box">
            <h2>Hive Timings</h2>
            {dayTiming.map(time => {
                return(
                <div className="contact__timing-day">
                    <span>{time.day}</span>
                    <span>------------</span>
                    <span>{time.time}</span>
                </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Contact