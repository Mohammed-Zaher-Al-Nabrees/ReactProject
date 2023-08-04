import HeaderSection from '../HeaderSection/HeaderSection'
import StartegyItem from './StartegyItem'
import './startegy.css'
import strategyData from './StategyData'

const Startegy = () => {
  
  const showStartegyData = strategyData.map((item) =>
      <StartegyItem class={item.class} key={item.id} num = {item.num} title={item.title} desc = {item.desc}/>
  )
  return (
    <div className="strategy">
      <div className="container">
          <HeaderSection title='Our Startegy' desc='Amet minim mollit non deserunt ullamco est sit aliqua dolor' />
          <div className="strategy-content">
            {showStartegyData}
          </div>
      </div>
  </div>
  )
}

export default Startegy