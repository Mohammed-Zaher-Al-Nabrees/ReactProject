
const HeaderSection = (props) => {
  return (
    <>
      <div className="main-heading">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default HeaderSection;
