import IMG1 from '../../assets/images/Frame -01.png'
import IMG2 from '../../assets/images/Frame -02.png'
import IMG3 from '../../assets/images/Frame 03.png'

const FooterBoxFour = () => {
  return (
    <div className="box">
      <span className="contact">
        <div className="location">
          <img src={IMG1}  alt="icon" />
          <span>28 Division St,New York,NY 10002,USA</span>
        </div>
        <div className="email">
          <img src={IMG2}  alt="icon" />
          <a href="mailto:Startnext@Gmail.Com">Email: Startnext@Gmail.Com</a>
        </div>
        <div className="phone">
          <img src={IMG3}   alt="icon" />
          <a href="tel:+ (321) 984 754">Phone: + (321) 984 754</a>
        </div>
      </span>
    </div>
  );
};

export default FooterBoxFour;
