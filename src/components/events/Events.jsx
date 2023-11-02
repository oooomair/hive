import "./events.scss"
import { event1, event2 } from "../../const/index"

const Events = () => {
  return (
    <div className='events'>
      <div className='event'>
        <img src={event1} alt="event" />
        <p>Planning a kids' party or event? Look no further! We provide an
          extensive collection of board games for big groups, delectable
          food, and a prime central location. Our friendly Game Masters will
          be there to help conduct the birthday event. Get in touch with us
          to know about our special packages.</p>
      </div>
      <div className='event'>
        <img src={event2} alt="event" />
        <p>Host your next corporate gathering at Hive! We
          offer a wide array of board games for big groups,
          scrumptious food, and a central location. Contact
          us to book your table, packages start at 49 AED.</p>
      </div>
    </div>
  )
}

export default Events