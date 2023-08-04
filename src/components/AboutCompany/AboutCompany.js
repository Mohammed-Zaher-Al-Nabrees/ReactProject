import BackgroundHeader from '../BackgroundHeader/BackgroundHeader'
import './aboutCompany.css'
import ABOUT__IMG from '../../assets/images/about_img/about-the-company.png'

const AboutCompany = () => {
  return (
    <>
    <BackgroundHeader 
        title='About Us'
        desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    />
    <div className="about-company">
        <div className="container">
            <img src={ABOUT__IMG} alt="About" />
            <div className="text">
                <h2>About The Company</h2>
                <h1>
                    Secure <span>IT Solutions </span>for a more <br /> 
                secure environment
                </h1>
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
        </div>
    </div>

    </>
    )
}

export default AboutCompany