import './oneBlog.css'
import BLOG_IMG from '../../assets/images/blog_img/blog.png'
import { useParams } from 'react-router-dom';
import IMG1 from '../../assets/images/latest_img/Latest-01.png';
import IMG2 from '../../assets/images/latest_img/Latest-02.png';
import IMG3 from '../../assets/images/latest_img/Latest-03.png';
import IMG4 from '../../assets/images/latest_img/Latest-04.png';
import BackgroundHeader from "../../components/BackgroundHeader/BackgroundHeader"


const OneBlog = () => {
  const newsData = [
    {id:1, img:IMG1 , title:'Blog Title - 01' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
    {id:2, img:IMG2 , title:'Blog Title - 02' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
    {id:3, img:IMG3 , title:'Blog Title - 03' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
    {id:4, img:IMG4 , title:'Blog Title - 04' , jobTitle :'UI/UX Designer' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing' ,detail:'Techreif Oct 20, 2022' },
]

  const blogData = [
    {id:1, img:BLOG_IMG , title:'Blog Title - 01' , jobTitle :'UI/UX Designer' , desc: `Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nec Et Ipsum Ullamcorper Venenatis Fringilla. Pretium, Purus Eu Nec Vulputate Vel Habitant Egestas. Congue Ornare At Ipsum, Viverra. Vitae br Magna Faucibus Eros, Lectus Sociis. Etiam Nunc Amet Id Dignissim. Feugiat Id Tempor Vel Sit In Ornare Turpis Posuere. Eu Quisque Integer Non Rhoncus Elementum Vel. Quis Nec Viverra
    Laoreet Mauris Odio Ut Nec. Nisl, Sed Adipiscing D ignissim Arcu Placerat Ornare Pharetra Nec In. Ultrices In Nisl Potenti Vitae Tempus. Auctor Consectetur Luctus Eu In Amet Sagittis. Dis Urna, Vel Hendrerit Convallis Senectus Feugiat Faucibus Commodo Egestas Leo Vitae In Morbi. Enim Arcu Dignissim Mauris, Eu, Eget` },
]

  const { id } = useParams();
  const blog = blogData.find((b) => b.id = Number(id));

  return (
    <>
      <BackgroundHeader title = 'Blog Title' desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' />;
      
      <div className="blog">
          <div className="container">
              <div className="image">
                  <img src={blog.img} alt="Blog" />
              </div>
              <a href="">{blog.title}</a>
              <h2>{blog.jobTitle}</h2>
              <p>
                {blog.desc}
              </p>
          </div>
      </div>
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
                                    <span >{item.detail}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default OneBlog