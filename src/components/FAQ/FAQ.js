import HeaderSection from '../HeaderSection/HeaderSection'
import faqItems from './FaqData'
import './faq.css'

const FAQ = () => {
 
  return (
    <div className="faq accordion accordion-flush" id="accordionFlushExample">
    <div className="container">
        <HeaderSection title='Frequently asked questions' desc ='The service we offer is specifically designed 
                We are proud of our design team' />

        <div className="accordion" id="accordionExample">
          {
            faqItems.map(({id,title,desc,classVal}) => 
              <div key={id} className="accordion-item m-3">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target= {`#collapse${classVal}`} aria-expanded="true" >
                    {title}
                  </button>
                </h2>
                <div id={`collapse${classVal}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {desc}
                  </div>
                </div>
              </div>
            )
          }
  
        </div>
    </div>
</div>
  )
}

export default FAQ