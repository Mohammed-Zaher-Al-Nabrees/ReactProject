
const FactItem = (props) => {
  return (
    <div className="item">
      <div className="image first">
        <img src={props.img} lt="Fact" />
      </div>
      <h3>{props.number}</h3>
      <span>{props.desc}</span>
    </div>
  );
};

export default FactItem;
