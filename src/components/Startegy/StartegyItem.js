
const StartegyItem = (props) => {
  return (
    <div className="box">
      <div className={`num ${props.class}`}>{props.num}</div>
      <h3>{props.title}</h3>
      <span></span>
      <p>
        {props.desc}
      </p>
    </div>
  );
};

export default StartegyItem;
