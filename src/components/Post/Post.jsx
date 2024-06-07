import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id,title}=post ;
    return (
        <div className="user-card">
            <h1>post id : {id}</h1>
            <h3>post title :{title}</h3>
            <Link to={`/post/${id}`}> <button>show details</button></Link>
            
        </div>
    );
};

export default Post;