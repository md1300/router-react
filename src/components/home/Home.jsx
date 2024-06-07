import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3>This is our home page</h3>
            <p>If you want to know about home page,must visit this page</p>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Home;