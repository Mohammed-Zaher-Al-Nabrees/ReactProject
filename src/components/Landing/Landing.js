import './landing.css'
import LandingImg from '../../assets/images/landing.jpg'

const Landing = () => {
  return (
      <div className="landing">
        <div className="container">
            <div className="text">
                <h1>
                    Secure <span>IT Solutions </span>for a more <br />
                    secure environment
                </h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <a href="#">Get Started</a>
            </div>
            <div className="image">
                <img src={LandingImg} alt="Image_Landing"/>
            </div>
        </div>
  </div>
  )
}

export default Landing