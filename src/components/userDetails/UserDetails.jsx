import { useLoaderData } from "react-router-dom";


const UserDetails = ({params}) => {
    const user=useLoaderData()
    const {name}=user
    
    return (
        <div>
            <h2>show details :{name} </h2>
        </div>
    );
};

export default UserDetails;