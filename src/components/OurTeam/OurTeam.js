import './ourTeam.css'
import TeamMember from './TeamMember'
import ourTeamData from './OurTeamData'
import HeaderSection from '../HeaderSection/HeaderSection'

const OurTeam = () => {

    const showOurTeam = ourTeamData.map((item) => 
        <TeamMember 
            key = {item.id}
            img  = {item.img}
            name  = {item.name}
            job = {item.JobTitle}
            desc  = {item.desc}
        />  
    )
  return (
    
    <div className="team">
        <div className="container">
            <HeaderSection title='Our Awesome Team' desc = ' you can see our projects' />
            <div className="team-content">
                {showOurTeam}
            </div>
        </div>
    </div>
  )
}

export default OurTeam