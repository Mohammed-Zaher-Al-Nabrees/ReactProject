import HeaderSection from '../HeaderSection/HeaderSection'
import './factsAbout.css'

const FactsAbout = () => {
    const factsAboutData = [
        {id:'fact__item__01', num:'1000+',desc:'Completed projects'},
        {id:'fact__item__02', num:'50K+',desc:'Happy Customer\'s'},
        {id:'fact__item__03', num:'20+',desc:'awards won'},
    ]
  return (
    
    <div className="facts">
        <div className="container">
            <HeaderSection title ='Company Facts' desc = 'The service we offer is specifically designed We are proud of our design team' />
            <div className="content-facts">
                {
                    factsAboutData.map(({id,num,desc}) => 
                        <div className="item" key={id}>
                            <h3>{num}</h3>
                            <span>{desc}</span>
                        </div>
                    )
                }
            </div>
        </div>
    </div>

    )
}

export default FactsAbout