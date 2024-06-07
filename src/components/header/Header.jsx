import { Link } from "react-router-dom";
import './header.css'



const Header = () => {
    return (
        <div className="navbar">
            <Link to="/about">about</Link>
            <Link to="/extention">extention</Link>
            <Link to="/subscribe">subscribe</Link>
            <Link to="/">home</Link>
            <Link to="/users">users</Link>
          
            
        </div>
    );
};

export default Header;