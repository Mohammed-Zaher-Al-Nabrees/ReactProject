import FACEBOOK__IMG from '../../assets/images/001-facebook.png'
import TWITTER__IMG from '../../assets/images/003-twitter.png'
import INSTA__IMG from '../../assets/images/004-instagram.png'
const Copyright = () => {
  return (
    <div className="copyright">
    <ul>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">© 2022 All rights reserved. techreif</a></li>
        <li className="end">
            <a href=""><img src={FACEBOOK__IMG} alt="Facebook Icon" /></a>
            <a href=""><img src={TWITTER__IMG} alt="Twitter Icon" /></a>
            <a href=""><img src={INSTA__IMG} alt="Instagram Icon" /></a>
          
        </li>
    </ul>
</div>
  )
}

export default Copyright