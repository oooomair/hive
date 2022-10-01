import { facebookgreen, instagramgreen, locationgreen, mailgreen, phonegreen, tiktokgreen } from '../../const'
import './contact.scss'

const Contact = () => {

    const contactInfo = [
        {
            img: mailgreen,
            span: 'hive@hive.com'
        },
        {
            img: phonegreen,
            span: '971501234567'
        },
        {
            img: locationgreen,
            span: 'Hive Board Game Cafe, Abdullah Omran Taryam St, Dubai Internet City, Dubai'
        }
    ]

    const dayTiming = [
        {
            day: 'Monday',
            time: '11am - 9pm'
        },
        {
            day: 'Tuesday',
            time: '11am - 9pm'
        },
        {
            day: 'Wednesday',
            time: '11am - 9pm'
        },
        {
            day: 'Thursday',
            time: '11am - 9pm'
        },
        {
            day: 'Friday',
            time: '11am - 9pm'
        },
        {
            day: 'Saturday',
            time: '11am - 9pm'
        },
        {
            day: 'Sunday',
            time: '11am - 9pm'
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
                    <span>{info.span}</span>
                </div>
                )
            })}
            <button>Book a Table</button>
            <div className="contact__links">
                <img src={instagramgreen} alt="" />
                <img src={tiktokgreen} alt="" />
                <img src={facebookgreen} alt="" />
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