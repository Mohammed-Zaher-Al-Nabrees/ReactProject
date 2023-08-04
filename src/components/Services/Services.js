import './services.css'
import Service from './Service'
import dataServices from './DataServices'

const Services = () => {
  const showDataServices = dataServices.map((item) =>
    <Service 
      key = {item.id}
      img = {item.img}
      nameService = {item.nameService}
      ListItem1 = {item.item1}
      ListItem2 = {item.item2}
      ListItem3 = {item.item3}
      ListItem4 = {item.item4}
      ListItem5 = {item.item5}
    />
  )
  return (
    <div className="services">
      <div className="container">
          <div className="content-services">
              {showDataServices}
          </div>
      </div>
  </div>
  )
}

export default Services