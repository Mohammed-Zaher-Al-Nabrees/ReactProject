import Copyright from './Copyright'
import FooterBoxFour from './FooterBoxFour'
import FooterBoxOne from './FooterBoxOne'
import FooterBoxThree from './FooterBoxThree'
import FooterBoxTwo from './FooterBoxTwo'
import './footer.css'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="head-foot">
                <span>Ready to get started?</span>
                <a href="#">Get Started</a>
            </div>

            <div className="foot">
                <FooterBoxOne />
                <FooterBoxTwo />
                <FooterBoxThree />
                <FooterBoxFour />
            </div>

            <Copyright />
        </div>
    </footer>
  )
}

export default Footer