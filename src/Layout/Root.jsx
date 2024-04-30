import { Outlet } from "react-router-dom";
import Footer from "../Component/Shared/Footer";
import Navber from "../Component/Shared/Navber";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;