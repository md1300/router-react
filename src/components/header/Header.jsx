import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div>
            <Link to="/about">about</Link>
            <Link to="/extention">extention</Link>
            <Link to="/subscribe">subscribe</Link>
            <Link to="/">home</Link>
            {/* <a href="/about">about</a>
            <a href="/extention">extention</a>
            <a href="/subscribe">subscribe</a>
            <a href="/">home</a> */}
           
            
        </div>
    );
};

export default Header;