import HeaderSection from '../HeaderSection/HeaderSection'
import './facts.css'
import FactItem from './FactItem';
import factsData from './FactsData'

const Facts = () => {
  const showFactData = factsData.map((item) =>
    <FactItem 
      key={item.id} 
      img = {item.img}
      number = {item.number}
      desc = {item.desc} />
  )
  
  return (
    <div className="facts">
      <div className="container">
            <HeaderSection  title='Company Facts' desc='The service we offer is specifically designed We are proud of our design team' />

          <div className="content-facts">
            {showFactData}
          </div>
      </div>
  </div>
  )
}

export default Facts