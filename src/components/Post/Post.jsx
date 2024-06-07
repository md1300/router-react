import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title}=post ;
    const navigate=useNavigate()

    const handleUseShowDetails=()=>{

        navigate(`/post/${id}`)

    }
    return (
        <div className="user-card">
            <h1>post id : {id}</h1>
            <h3>post title :{title}</h3>
            <Link to={`/post/${id}`}> <button>show details</button></Link>
            <button onClick={handleUseShowDetails}> navigateButton</button>
            
        </div>
    );
};

export default Post;