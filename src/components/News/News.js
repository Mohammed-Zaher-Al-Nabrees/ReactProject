import './news.css'
import IMG1 from '../../assets/images/latest_img/Latest-01.png';
import IMG2 from '../../assets/images/latest_img/Latest-02.png';
import IMG3 from '../../assets/images/latest_img/Latest-03.png';
import IMG4 from '../../assets/images/latest_img/Latest-04.png';
import { NavLink } from 'react-router-dom';



const News = () => {
    const newsData = [
        {id:1, img:IMG1 , title:'Blog Title - 01' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
        {id:2, img:IMG2 , title:'Blog Title - 02' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
        {id:3, img:IMG3 , title:'Blog Title - 03' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
        {id:4, img:IMG4 , title:'Blog Title - 04' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
        {id:5, img:IMG4 , title:'Blog Title - 05' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
        {id:6, img:IMG3 , title:'Blog Title - 06' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
        {id:7, img:IMG2 , title:'Blog Title - 07' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
        {id:8, img:IMG1 , title:'Blog Title - 08' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
    ]

  return (  
    <div className="happends">  
        <div className="container">
            <div className="content-hadppend">
                {
                    newsData.map((item) => 
                        <div key={item.id}>
                            <div className="item">
                            <img src={item.img} alt="Blog" />
                                <div className="text">
                                    <h3>{item.title}</h3>
                                    <h4>{item.jobTitle}</h4>
                                    <p>{item.desc}</p>
                                    <NavLink to={`/latestNews/${item.id}`}>{item.detail}</NavLink>
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

export default News