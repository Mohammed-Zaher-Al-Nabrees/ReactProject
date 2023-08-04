
import HeaderSection from '../HeaderSection/HeaderSection'
import blogData from './BlogData'
import './blog.css'
import BlogItem from './BlogItem'

const Blog = () => {

  const showBlogData = blogData.map((item) => 
  <BlogItem key={item.id} img = {item.img} dsec = {item.desc} date = {item.date} /> 
  )
  
  return (
    <div className="happends">
      <div className="container">
        <HeaderSection title='This just happened' desc='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' />
          <div className="content-hadppend">
            {showBlogData}
          </div>
      </div>
  </div>

  )
}

export default Blog