import './contactFrom.css'

const ContactForm = () => {
  return (
    <div className="form-msg">
        <div className="container">
            <div className="title">
                <h2>Drop Us a Line
                </h2>
                <p>Fill out the contact form and we will get back to you shortly.</p>
            </div>
            <form action="">
                <input type="text" className="input" name="" placeholder="First Name" />
                <input type="text"className="input" name="" placeholder="Last Name" />
                <input type="email" className="input"name="" placeholder="Email" />
                <select className="input">
                    <optgroup label="">
                    <option value="-1">Select a department </option>
                    <option value="IT">IT</option>
                    <option value="IT">IT</option>
                    <option value="IT">IT</option>
                    <option value="IT">IT</option>
                    <option value="IT">IT</option>
                    </optgroup>
                </select>
                <textarea className="input"placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" />
            </form >
        </div>
    </div>
  )
}

export default ContactForm