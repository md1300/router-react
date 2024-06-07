import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts=useLoaderData()
    
    return (
        <div>
            <h1>All post : {posts.length}</h1>
            <div className="card-container">
                {
                    posts.map((post,indx)=><Post key={indx} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;