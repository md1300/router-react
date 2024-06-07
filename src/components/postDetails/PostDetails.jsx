import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import './postDetails.css'

const PostDetails = () => {
   const post =useLoaderData();
   const {title,body}= post;
   const navigate=useNavigate();
   const {postId}=useParams();


   



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