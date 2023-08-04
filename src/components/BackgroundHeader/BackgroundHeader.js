import './backgroundHeader.css'
import IMG1 from '../../assets/images/about_img/circla.png';
import IMG2 from '../../assets/images/about_img/Bg.png';
import IMG3 from '../../assets/images/about_img/dots.png';

const BackgroundHeader = (props) => {
  return (
    <div className="header-page-title">
        <div className="left"><img src={IMG1} alt="About Company" /></div>
        <div className="middle"><img src={IMG2} alt="About Company" /></div>
        <div className="right"><img src={IMG3}alt="About Company" /></div>
        <div className="main-heading">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default BackgroundHeader