
const BlogItem = (props) => {
  return (
    <div className="item">
    <img src= {props.img} alt="Blog" />
    <div className="text">
        <p>{props.desc}
        </p>

        <span>{props.date}</span>
    </div>
</div>
  )
}

export default BlogItem