import { useLoaderData } from "react-router-dom";
import './postDetails.css'

const PostDetails = ({params}) => {
   const post =useLoaderData();
   const {title,body}= post;
  console.log(post)
   
    return (
        <div className="postDetails">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;