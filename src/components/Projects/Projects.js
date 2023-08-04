import HeaderSection from '../HeaderSection/HeaderSection'
import ProjectImage from './ProjectImage'
import'./projects.css'
import dataProjects from './ProjectData'

const Projects = () => {
  const showDataProjects = dataProjects.map((item) =>
    <ProjectImage key={item.id} img = {item.img} />
  )
  return (
    <div className="projects">
      <div className="container">
          <HeaderSection title='Our Project' desc='You Can See Our Projects' />
          <ul className="menu">
              <li className="active">All</li>
              <li>Digital Marketing</li>
              <li>Website development</li>
              <li>software</li>
          </ul>

          <div className="projects-content">
              {showDataProjects}
          </div>
      </div>
    </div>

  )
}

export default Projects