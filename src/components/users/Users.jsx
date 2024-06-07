import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './users.css'


const Users = () => {
    const users=useLoaderData()
    console.log(users)
    return (
        <div>
            <h1 className="title">Total users :{users.length}</h1>
             <div className="card-container">
                {
                   users.map(user=><User key={user.id} user={user}></User>)
                }
             </div>
        </div>
    );
};

export default Users;