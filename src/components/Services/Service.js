import ArrowIMG from '../../assets/images/right-arrow.png'

const Service = (props) => {
  return (
    <div className="box">
      <div className="image">
        <img src={props.img} alt="Service" />
      </div>
      <h3>{props.nameService}</h3>
      <ul>
        <li>{props.ListItem1}</li>
        <li>{props.ListItem2}</li>
        <li>{props.ListItem3}</li>
        <li>{props.ListItem4}</li>
        <li>{props.ListItem5}</li>

      </ul>
      <a href="#">Learn More <img src={ArrowIMG} alt="Arrow" /></a>
    </div>
  );
};

export default Service;
