import { Link, NavLink, } from "react-router-dom";
import './header.css'



const Header = () => {
    return (
        <div className="navbar">
            <NavLink to="/about">about</NavLink>
            <NavLink to="/extention">extention</NavLink>
            <NavLink to="/subscribe">subscribe</NavLink>
            <NavLink to="/users">users</NavLink>
            <NavLink to="/">home</NavLink>
            <Link to="/posts">posts</Link>
          
            
        </div>
    );
};

export default Header;