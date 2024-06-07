import './user.css'

const User = ({user}) => {
    const {name,phone,website}=user
    return (
        <div className="user-card">
            <h1>user name : {name}</h1>
            <h5>contact no. :{phone} </h5>
            <h5>website : {website}</h5>
        </div>
    );
};

export default User;