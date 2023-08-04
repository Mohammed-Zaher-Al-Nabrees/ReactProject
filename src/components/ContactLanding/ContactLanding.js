import'./ContactLangin.css'
import IMG from '../../assets/images/contact/contact.png'
import ContactBox from './ContactBox'
import ADDRESS from '../../assets/images/contact/Address.svg'
import EMAIL from '../../assets/images/contact/email.svg'
import PHONE from '../../assets/images/contact/phone.svg'

const ContactLanding = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="image"><img className="img" src={IMG} alt="" /></div>
            <div className="text">
                <div className="title">
                    <h2>Contact With Us Know</h2>
                </div>
                <p>We are with you to help you, just contact us</p>

                <div className="content-box">
                        <ContactBox 
                            name = {'Address: '}
                            icon = {ADDRESS}
                            link = {'28 Division St, New York,NY 10002, USA'}
                        />
                        <ContactBox 
                            name = {'Address: '}
                            icon = {EMAIL}
                            link = {'Startnext@Gmail.Com'}
                        />
                </div>
                
                <ContactBox 
                        name = {'Phone: '}
                        icon = {PHONE}
                        link = {'+ (321) 984 75413545'}
                    />
            </div>
        </div>
    </div>
  )
}

export default ContactLanding