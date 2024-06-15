import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
        src="https://drive.google.com/file/d/1dorz_tH0fYFvT0XsSTULOcnU_tCI7jlu/view?usp=sharing" alt=""
        />
        
        <div className="postInfo">
            <div className="postCats">
                <span className="Music"></span>
                <span className="Life"></span>
            </div>
            <span className="postTitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio corporis sint necessitatibus ducimus illo! Tempora modi pariatur iusto, in quaerat veritatis unde quos, sapiente earum et fugiat sint deleniti. Sed!
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>

        </div>
        <p className="postDesc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab blanditiis ipsum, animi minima suscipit voluptatibus doloribus maxime eligendi. Adipisci dolorum molestiae voluptatum labore voluptas, totam maxime fugit repellat aperiam dicta!</p>
        Post</div>
  )
}
