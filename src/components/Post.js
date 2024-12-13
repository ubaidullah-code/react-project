
import "./post.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

let Post = (props) => {


  return (


    

    <div className='post' >
      <div className="post-header">
        <div style={{display:"flex", columnGap: "8px"}}>

        <img style={{width: 30}} src={props.data.profilePic} alt="" />
        <div className="post-inner-head">
            <p  style={{ fontSize: "15px", fontWeight: "600"}}>{props.data.UserName}</p>
            <p style={{ fontSize: "12px"}}>{props.data.postTime}</p>
        </div>
        </div>
        <div  style={{display:"flex" , columnGap:"8px"}}>
                            <FontAwesomeIcon icon={faEllipsisV} />
                            <FontAwesomeIcon icon={faClose} />
                        </div>
      </div>
      <img src={props.data.ImageUrl} style={{height:"340px" , width: "100%" ,objectFit:"fill"}} alt="" />
      <div className="lower-card">
        <div className="lower">
       < FontAwesomeIcon icon={faThumbsUp} />
            <p>Like</p>
        </div>
        <div className="lower">
        <FontAwesomeIcon icon={faComment} />
            <p>Comments</p>     
        </div>
        <div className="lower">
        <FontAwesomeIcon icon= {faShare}/>
           <p>Share</p>
        </div>
      </div>
    </div>
    
  )
}

export default Post
