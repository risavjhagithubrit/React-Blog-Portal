import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://drive.google.com/file/d/1k4z_nuQzaogVBlNFcl1BoqqWDQ0FzI_4/view?usp=sharing" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo"></div>
            <span className="singlePostAuthor">Author: <b>Risav</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio nihil aut pariatur ratione, beatae itaque quas laboriosam aspernatur veritatis debitis possimus officiis? Molestiae possimus fugit excepturi, expedita pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde rerum maiores laborum rem tempore vero? Veniam maxime quis a, explicabo sit hic laudantium. Vitae, cumque deserunt tenetur sapiente saepe minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officia ex? Corrupti molestias vero iste commodi cum itaque autem, blanditiis nemo ea. Itaque magni obcaecati nisi amet quod explicabo assumenda?</p>
    </div>
  )
}
