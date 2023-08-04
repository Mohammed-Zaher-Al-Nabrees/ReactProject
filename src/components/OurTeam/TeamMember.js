

const TeamMember = (props) => {
  return (
    <div className="box">
        <div className="image">
            <img src={props.img} alt="Team Member" />
        </div>
        <div className="text">
            <h3>{props.name}</h3>
            <span>{props.job}</span>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default TeamMember