import { useLoaderData, useNavigate } from "react-router-dom";
import './postDetails.css'

const PostDetails = () => {
   const post =useLoaderData();
   const {title,body}= post;
   const navigate=useNavigate()
//   console.log(post)



 const handleBackButton=()=>{
     navigate(-1)
 }
   
    return (
        <div className="postDetails">
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={handleBackButton}>back</button>
        </div>
    );
};

export default PostDetails;