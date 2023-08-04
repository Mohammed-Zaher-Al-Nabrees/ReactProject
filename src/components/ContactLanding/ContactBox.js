
const ContactBox = (props) => {
  return (
    <div className="box">
      <img className="icon" src={props.icon} alt="" />
      <div className="text">
        <h3>{props.name}</h3>
        <a href={props.link}>{props.link}</a>
      </div>
    </div>
  );
};

export default ContactBox;
